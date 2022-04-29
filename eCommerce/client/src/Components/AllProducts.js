import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import Title from "./Title";
// import PageNumber from "./PageNumber";
import Axios from "axios";

const AllProducts = () => {
  const [data_Fetched, setData_Fetched] = useState([]);

  useEffect(() => {
    fetch_All_Products();
  }, []);

  function fetch_All_Products() {
    Axios.get("http://localhost:3001/").then(async (res) => {
      await setData_Fetched(res.data);
    });
  }

  const mapping_Products = data_Fetched.map((ele, index) => {
    return <SingleProduct key={index} data={ele} />;
  });

  return (
    <div>
      <Title title={"All Products"} />
      {mapping_Products}
    </div>
  );
};

export default AllProducts;
