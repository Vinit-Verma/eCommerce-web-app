import React from "react";
import Tabs from "./TabComponents/Tabs";
import Title from "./Title";

const MyOrders = () => {
  return (
    <div className="outerDiv">
      <div className="innerOrderDiv">
        <Title title={"My Orders"} />
        <div className="select_div">
          <select name="duration" id="duration">
            <option value="all">All records</option>
            <option value="may">May</option>
            <option value="april">April</option>
            <option value="march">March</option>
          </select>
        </div>
        <Tabs />
      </div>
    </div>
  );
};

export default MyOrders;
