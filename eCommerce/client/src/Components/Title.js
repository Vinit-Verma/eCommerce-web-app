import React from "react";

const Title = (props) => {
  return (
    <div className="outerDiv">
      <div className="innerDiv">
        <h1>{props.title}</h1>
      </div>
      <div className="lineUnder"></div>
    </div>
  );
};

export default Title;
