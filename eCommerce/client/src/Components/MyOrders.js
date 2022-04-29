import React from "react";
import Tabs from "./TabComponents/Tabs";
import Title from "./Title";

const MyOrders = () => {
  return (
    <div className="outerDiv">
      <div className="innerOrderDiv">
        <Title title={"My Orders"} />
        <Tabs />
      </div>
    </div>
  );
};

export default MyOrders;
