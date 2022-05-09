import React, { useEffect, useState } from "react";
import Axios from "axios";

const OrderHistory = () => {
  const [data_fetched, setData_fetched] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    fetch_data();
  }, []);

  const fetch_data = () => {
    Axios.get("http://localhost:3001/order_history", {
      headers: {
        user: localStorage.getItem("user_id"),
      },
    }).then((res) => {
      // console.log(res.data);
      setData_fetched(res.data);
    });
  };

  const handleSelectChange = (e) => {
    setFilterValue(e.target.value);
  };

  // const rowList = data_fetched.map((ele, index) => {
  const rowList = data_fetched
    .filter((val) => {
      if (filterValue === "") {
        return val;
      } else if (String(new Date(val.createdAt).getMonth()) === filterValue) {
        return val;
      }
    })
    .map((ele, index) => {
      return (
        <tr key={index}>
          <td>{ele.createdAt.substring(0, 10)}</td>
          <td>
            {ele.products.map((product, index) => {
              return <div key={index}>{product}</div>;
            })}
          </td>
          <td>{ele.address}</td>
          <td>{ele.amount}</td>
        </tr>
      );
    });

  return (
    <>
      <div className="OuterDiv">
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
        <div className="innerDiv">
          <table className="order_table">
            <thead>
              <tr>
                <th>Date</th>
                <th>List of products</th>
                <th>Address</th>
                <th>Amount paid</th>
              </tr>
            </thead>
            <tbody>{rowList}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
