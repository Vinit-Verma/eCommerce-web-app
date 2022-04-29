import React, { useState, useEffect } from "react";
import "../App.css";

const PageNumber = (props) => {
  let pageCount = props.pNum;
  const [countArr, setCountArr] = useState([]);
  useEffect(() => {
    for (let i = 1; i <= pageCount; i++) {
      setCountArr((prevArr) => [...prevArr, i]);
    }
  }, [pageCount]);

  //   console.log(countArr);
  return (
    <div className="pageNumOuterDiv">
      <div className="pageNumInnerDiv">
        <ul>
          {countArr.map((ele, index) => {
            return (
              <li key={index}>
                <a href="#">{ele}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PageNumber;
