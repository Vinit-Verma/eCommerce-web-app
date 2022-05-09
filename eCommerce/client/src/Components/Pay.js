import React, { useState } from "react";
import Title from "./Title";
import { useNavigate, useLocation } from "react-router-dom";
import Axios from "axios";
import { useContext } from "react";
import cart_badge_context from "../context/cart_badge/cart_badge_context";

const Pay = () => {
  const context = useContext(cart_badge_context);
  const navigate = useNavigate();
  const handle_cancel = () => {
    navigate("/cart");
  };
  const location = useLocation();
  const sum = location.state.amount;
  const data = location.state.data;

  // console.log(data);

  const product_data = data.map((ele) => {
    return ele["product_id"];
  });
  console.log("product_data are :", product_data);

  const total_quantity = product_data.map((ele) => {
    return ele["product_quantity"];
  });
  // console.log(total_quantity);

  const product_ids = product_data.map((ele) => {
    return ele["_id"];
  });
  // console.log("product_ids are :", product_ids);

  const product_names = product_data.map((ele) => {
    return ele["product_name"];
    return [ele["product_name"], ele["product_img1"]];
  });
  console.log("product_names are :", product_names);

  let total_final_data = {};
  product_ids.forEach((key, i) => {
    total_final_data[key] = total_quantity[i];
  });
  // console.table(total_final_data);

  const deduct_quantity = data.map((ele) => {
    return ele.product_quantity;
  });
  // console.log(deduct_quantity);

  let total_deduce_quantity = {};
  product_ids.forEach((key, i) => {
    total_deduce_quantity[key] = deduct_quantity[i];
  });
  // console.table(total_deduce_quantity);

  let quantity_difference = Object.keys(total_final_data).reduce((a, k) => {
    a[k] = total_final_data[k] - total_deduce_quantity[k];
    return a;
  }, {});
  // console.log(typeof quantity_difference);

  const [address, setAddress] = useState("");

  const handle_pay = () => {
    if (address.length !== 0) {
      window.confirm("Are you sure you want to buy ?");
      if (
        Axios.post("http://localhost:3001/pay", {
          amount: sum,
          products: product_names,
          user: localStorage.getItem("user_id"),
          address: address,
          status: false,
        })
      ) {
        Axios.delete("http://localhost:3001/delete_many", {
          headers: {
            user: localStorage.getItem("user_id"),
          },
        });
        context.setFalse();
        alert("Payment Succesful! Your order is on its way!");
        navigate("/myOrders");

        for (var key in quantity_difference) {
          // console.log(key, quantity_difference[key]);
          Axios.patch("http://localhost:3001/update", {
            id: key,
            num: quantity_difference[key],
          });
        }
      }
    } else {
      alert("Please enter an address!");
    }
  };

  const textarea_change = (e) => {
    setAddress(e.target.value);
  };

  return (
    <>
      <Title title={"Payment Details"} />
      <div className="payOuterDiv">
        <div className="payInnerDiv">
          <form action="" className="payForm">
            <label htmlFor="amount">Total amount to pay </label>
            <div className="flex-left">
              <input
                type="text"
                name="amount"
                id="amount"
                readOnly
                value={sum}
              />
              <span className="rupee">&#8377;</span>
            </div>
            <label htmlFor="method">Payment method </label>
            <div className="flex-left">
              <select name="method" id="method">
                <option value="none">Select a method</option>
                <option value="debitCard">Debit Card</option>
                <option value="creditCard">Credit Card</option>
                <option value="netBanking">Net Banking</option>
                <option value="upi">UPI</option>
              </select>
            </div>
            <label htmlFor="address">Billing / delivery address </label>
            <div className="flex-left">
              <textarea
                name="address"
                id="address"
                cols="30"
                rows="3"
                value={address}
                onChange={textarea_change}
              ></textarea>
            </div>
            <div>
              <input
                type="button"
                value="Pay"
                className="payBtn"
                onClick={handle_pay}
              />
            </div>
            <div className="flex-left">
              <input
                type="button"
                value="Cancel"
                className="cancelBtn"
                onClick={handle_cancel}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Pay;
