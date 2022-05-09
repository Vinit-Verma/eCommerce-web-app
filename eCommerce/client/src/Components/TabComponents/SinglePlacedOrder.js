import React, { useEffect, useState } from "react";
import Axios from "axios";

const SinglePlacedOrder = (props) => {
  const [data_fetched, setData_fetched] = useState([]);

  useEffect(() => {
    fetch_data();
  }, []);

  const fetch_data = () => {
    Axios.get("http://localhost:3001/placed_orders", {
      headers: {
        user: localStorage.getItem("user_id"),
      },
    }).then((res) => {
      console.log(res.data);
      setData_fetched(res.data);
    });
  };

  const rowList = data_fetched
    .filter((val) => {
      if (props.month === "") {
        return val;
      } else if (String(new Date(val.createdAt).getMonth()) === props.month) {
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
            {/* {ele.products.map((ele, index) => {
              return <div key={index}>{ele.product_name}</div>;
            })} */}
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

export default SinglePlacedOrder;
