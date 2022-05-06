import React, { useState } from "react";
import Axios from "axios";
import { useContext } from "react";
import cart_badge_context from "../context/cart_badge/cart_badge_context";

const CartSingleProduct = (props) => {
  const context = useContext(cart_badge_context);
  const { data } = props;
  // console.log("data is ", data);
  const total = data.product_id.product_quantity;

  const [qty, setQty] = useState(data.product_quantity);

  const handle_dec = () => {
    setQty((prevCount) => {
      if (qty <= 1) {
        setQty(1);
      }
      return prevCount - 1;
    });
  };
  const handle_inc = () => {
    setQty((prevCount) => prevCount + 1);
    if (qty >= total) {
      setQty(total);
    }
  };

  const handleDelete = (id) => {
    if (Axios.delete(`http://localhost:3001/delete/${id}`)) {
      props.callBack(true);
      context.setFalse();
      // alert("Product deleted from cart!");
    }
  };

  return (
    <div className="outerCartSingleProductDiv">
      <div className="innerCartSingleProductDiv">
        <img
          src={require("../images/" + data.product_id.product_img1)}
          alt=""
        />
        <article>
          <span className="product_name">{data.product_id.product_name} </span>
          <br />
          {data.product_id.product_description}
        </article>
        <div className="quantityDiv extra">
          {/* <input
            type="button"
            value="&nbsp; &#x2212; &nbsp;"
            className="subBtn"
            onClick={handle_dec}
          /> */}
          {/* <span>Quantity : {data.product_id.product_quantity} </span> */}
          <span>Quantity : {qty} </span>
          {/* <input
            type="button"
            value="&nbsp; &#x2b; &nbsp;"
            className="addBtn"
            onClick={handle_inc}
          /> */}
        </div>
        <div className="priceDiv">
          <div>
            <span className="upper_price">
              &#8377;&nbsp;
              {data.product_id.product_disc_price}
            </span>
          </div>
          <div>
            &#8377;&nbsp;
            <span className="mrp">{data.product_id.product_MRP}</span>
          </div>
        </div>
        <div className="removeBtnDiv">
          <input
            type="button"
            value="Remove"
            onClick={() => handleDelete(data._id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartSingleProduct;
