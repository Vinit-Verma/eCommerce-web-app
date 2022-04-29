import React, { useEffect, useState } from "react";
import Axios from "axios";

const OrderHistory = () => {
  const [data_fetched, setData_fetched] = useState([]);

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
  // console.log(data_fetched);

  const rowList = data_fetched.map((ele, index) => {
    return (
      <tr key={index}>
        <td>{ele.createdAt.substring(0, 10)}</td>
        <td>
          {ele.products.map((ele, index) => {
            return <div key={index}>{ele.product_name}</div>;
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
