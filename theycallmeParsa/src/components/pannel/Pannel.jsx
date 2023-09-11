import React from "react";
import img from "../../imgs/k-r.png";
function Pannel() {
  return (
    <div>
      <div className="left-panel">
        <div className="right-head">
          <img src={img} />
          <h1>Header</h1>
        </div>
      </div>
      <div className="main-panel"></div>
      <div className="right-panel"></div>
    </div>
  );
}

export default Pannel;
