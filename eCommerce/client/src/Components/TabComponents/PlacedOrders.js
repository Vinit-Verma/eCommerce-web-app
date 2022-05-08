import React, { useState } from "react";
import SinglePlacedOrder from "./SinglePlacedOrder";

const PlacedOrders = () => {
  const [filterValue, setFilterValue] = useState("");

  const handleSelectChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className="PlacedOrdersTab">
      <div className="select_div">
        <select
          name="duration"
          id="duration"
          onChange={handleSelectChange}
          value={filterValue}
        >
          <option value="">All records</option>
          <option value="4">May</option>
          <option value="3">April</option>
          <option value="2">March</option>
        </select>
      </div>
      <SinglePlacedOrder month={filterValue} />
    </div>
  );
};

export default PlacedOrders;
