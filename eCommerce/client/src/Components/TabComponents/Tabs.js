import React, { useState } from "react";
import PlacedOrders from "./PlacedOrders";
import OrderHistory from "./OrderHistory";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handletab1 = () => {
    setActiveTab("tab1");
  };

  const handletab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className="outerDiv">
      <div className="innerDiv">
        <div className="Tabs">
          <ul className="Tab-nav">
            <li
              className={activeTab === "tab1" ? "active" : ""}
              onClick={handletab1}
            >
              Placed Orders
            </li>
            <li
              className={activeTab === "tab2" ? "active" : ""}
              onClick={handletab2}
            >
              Order History
            </li>
          </ul>
          <div className="content">
            {activeTab === "tab1" ? <PlacedOrders /> : <OrderHistory />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
