import React, { useState } from "react";
import Title from "./Title";
import { useNavigate, useLocation } from "react-router-dom";
import Axios from "axios";

const Pay = () => {
  const navigate = useNavigate();
  const handle_cancel = () => {
    navigate("/cart");
  };
  const location = useLocation();
  const sum = location.state.amount;
  const data = location.state.data;

  console.log(data);

  const product_data = data.map((ele) => {
    return ele["product_id"];
  });
  const product_ids = product_data.map((ele) => {
    return ele["_id"];
  });

  const [address, setAddress] = useState("");

  const handle_pay = () => {
    if (sum > 0) {
      if (
        Axios.post("http://localhost:3001/pay", {
          amount: sum,
          products: product_ids,
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
        alert("Payment Succesful! Your order is on its way!");
        navigate("/myOrders");
      }
    } else {
      alert("There is nothing to pay!");
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
