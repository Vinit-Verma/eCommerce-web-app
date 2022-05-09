import React, { useState, useEffect } from "react";
import CartSingleProduct from "./CartSingleProduct";
import Title from "./Title";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const [data_for_cart, setData_for_cart] = useState([]);
  const navigate = useNavigate();
  const [signal, setSignal] = useState(false);

  console.log(data_for_cart);

  const sum = data_for_cart.reduce(
    (a, v) => a + v.product_id.product_disc_price * v.product_quantity,
    0
  );

  const mrp_sum = data_for_cart.reduce(
    (a, v) => a + v.product_id.product_MRP * v.product_quantity,
    0
  );

  useEffect(() => {
    fetch_for_cart();
    setSignal(false);
  }, [signal]);

  const fetch_for_cart = () => {
    Axios.get("http://localhost:3001/cart", {
      headers: {
        user: localStorage.getItem("user_id"),
      },
    }).then(async (res) => {
      await setData_for_cart(res.data);
    });
  };

  const mapping_cart = data_for_cart.map((ele, index) => {
    return <CartSingleProduct key={index} data={ele} callBack={setSignal} />;
  });

  const handle_pay = () => {
    navigate("/pay", {
      state: {
        amount: sum,
        data: data_for_cart,
      },
    });
  };

  const handle_continue_shopping_click = () => {
    navigate("/");
  };

  return (
    <>
      <Title title={"My Cart"} />
      {mapping_cart.length === 0 ? <EmptyCart /> : mapping_cart}
      <div className="cartOuterDiv">
        <div className="cartInnerDiv">
          <input
            type="button"
            value="Continue Shopping"
            className="continueShoppingBtn"
            onClick={handle_continue_shopping_click}
          />
          <span className="total">
            Total amount to pay : &#8377; {sum} &nbsp;
            <span className="total_mrp">&#8377; {mrp_sum}</span>
          </span>
          <input
            type="button"
            value="Pay & Buy"
            className="payBtn"
            onClick={handle_pay}
            disabled={sum === 0}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
