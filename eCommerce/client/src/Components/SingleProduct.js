import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useContext } from "react";
import cart_badge_context from "../context/cart_badge/cart_badge_context";

const SingleProduct = (props) => {
  const context = useContext(cart_badge_context);
  // const [data_for_cart, setData_for_cart] = useState([]);
  // // console.log(data_for_cart);
  // const fetch_for_cart = () => {
  //   Axios.get("http://localhost:3001/cart", {
  //     headers: {
  //       user: localStorage.getItem("user_id"),
  //     },
  //   }).then(async (res) => {
  //     await setData_for_cart(res.data);
  //   });
  // };

  // useEffect(() => {
  //   fetch_for_cart();
  //   // console.log("useEffect", data_for_cart);
  // }, []);

  const { data } = props;
  // console.log("data is", data);
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate("/productDetails", {
      state: {
        id: data._id,
        name: data.product_name,
        img1: data.product_img1,
        img2: data.product_img2,
        img3: data.product_img3,
        desc: data.product_description,
        price: data.product_disc_price,
        mrp: data.product_MRP,
        added_date: data.product_added,
        update_date: data.product_updated,
        total: data.product_quantity,
      },
    });
  };

  const date = new Date().toJSON();

  const handleCartBtnClick = () => {
    if (
      Axios.post("http://localhost:3001/cart", {
        user: localStorage.getItem("user_id"),
        product_id: data._id,
        product_quantity: 1,
        date_added_to_cart: date,
        color: "color pending......",
        size: "Size pending....",
      })
    ) {
      context.setFalse();
      alert("Product added to your cart!");
    }
  };
  return (
    <>
      <div className="singleProductOuterDiv">
        <div className="singleProductInnerDiv">
          <figure className="pImgFig">
            <img
              src={require("../images/" + data.product_img1)}
              alt=""
              className="pImg"
            />
          </figure>
          <p className="pDetails">{data.product_description}</p>
          <span className="price_span">
            &#8377;&nbsp;{data.product_disc_price}&nbsp;
            <span className="mrp">&#8377;&nbsp;{data.product_MRP}</span>
          </span>
          <div className="btnDiv">
            <input type="button" value="View" onClick={handleViewClick} />
            {/* <input type="button" value="Buy" /> */}
            <input
              type="button"
              value="Add to cart"
              className="cartBtn"
              onClick={handleCartBtnClick}
              style={
                localStorage.getItem("token") === null
                  ? { display: "none" }
                  : { display: "" }
              }
              disabled={data.product_quantity === 0}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
