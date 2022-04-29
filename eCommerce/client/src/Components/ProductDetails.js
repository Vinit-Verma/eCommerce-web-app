import React, { useState, useRef } from "react";
import "../App.css";
import Title from "./Title";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";

const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  const location = useLocation();
  const product_data = location.state;
  const navigate = useNavigate();
  // console.log(product_data);

  const imageRef = useRef(null);

  const handle_home_click = () => {
    navigate("/");
  };

  const handleInc = () => {
    setQty((prevCount) => prevCount + 1);
    if (qty >= product_data.total) {
      setQty(product_data.total);
    }
  };

  const handleDec = () => {
    setQty((prevCount) => {
      if (qty <= 1) {
        setQty(1);
      }
      return prevCount - 1;
    });
  };

  const update = () => {
    const new_qty = product_data.total - qty;
    const p_id = product_data.id;
    // console.log("new qty : ", new_qty);
    Axios.patch("http://localhost:3001/update", {
      id: p_id,
      num: new_qty,
    });
    // console.log("update qty :", qty);
  };

  const date = new Date().toJSON();

  const handle_add_to_cart = () => {
    if (
      Axios.post("http://localhost:3001/cart", {
        user: localStorage.getItem("user_id"),
        product_id: product_data.id,
        product_quantity: qty,
        date_added_to_cart: date,
        color: "color pending......",
        size: "Size pending....",
      })
    ) {
      update();
      alert("Product added to your cart!");
      navigate("/cart");
    }
  };

  const changeImg = (e) => {
    imageRef.current.src = e.target.src;
  };

  return (
    <>
      <Title title={product_data.name} />
      <div className="productDetailsOuterDiv">
        <div className="productDetailsInnerDiv">
          <section className="leftSection">
            <figure>
              <img
                src={require("../images/" + product_data.img1)}
                alt="bigImg"
                ref={imageRef}
              />
            </figure>
            <img
              className="smallImg"
              src={require("../images/" + product_data.img1)}
              alt="img1"
              onMouseOver={changeImg}
            />
            <img
              className="smallImg"
              src={require("../images/" + product_data.img2)}
              alt="img2"
              onMouseOver={changeImg}
            />
            <img
              className="smallImg"
              src={require("../images/" + product_data.img3)}
              alt="img3"
              onMouseOver={changeImg}
            />
          </section>
          <section className="rightSection">
            <summary>{product_data.desc}</summary>
            <div className="quantityDiv">
              <div>
                {product_data.total === 0
                  ? "Product Sold Out"
                  : product_data.total + " units left."}
              </div>
              <div
                style={
                  localStorage.getItem("token") === null
                    ? { display: "none" }
                    : { display: "" }
                }
              >
                <input
                  type="button"
                  value="&nbsp; &#x2212; &nbsp;"
                  className="subBtn"
                  onClick={handleDec}
                  disabled={product_data.total === 0}
                />
                <span>Quantity : {qty === 0 ? 1 : qty}</span>
                <input
                  type="button"
                  value="&nbsp; &#x2b; &nbsp;"
                  className="addBtn"
                  onClick={handleInc}
                  disabled={product_data.total === 0}
                />
              </div>
              <div>
                <span className="price">
                  &#8377;&nbsp;{product_data.price}&nbsp;
                  <span className="mrp_inner">
                    &#8377;&nbsp;{product_data.mrp}
                  </span>
                </span>
              </div>
            </div>
            <div className="btnDiv mt-50">
              <input
                type="button"
                value="Add to cart"
                className="cartBtn"
                onClick={handle_add_to_cart}
                style={
                  localStorage.getItem("token") === null
                    ? { display: "none" }
                    : { display: "" }
                }
                disabled={product_data.total === 0}
              />
              <input type="button" value="Home" onClick={handle_home_click} />
            </div>
            <div className="dateDiv">
              <div className="added_date_div">
                Posted on : <br /> {product_data.added_date}
              </div>
              <div>
                Updated on : <br /> {product_data.update_date}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
