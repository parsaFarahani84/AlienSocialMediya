import React from "react";
import "./Pannel.css";

import Atom from "../../Atom";
import LeftPanel from "./LeftPanel";
import MainPanel from "./MainPanel";
import RightPanel from "./RightPanel";

function Pannel() {
  return (
    <div className="mother-s">
      <LeftPanel />
      <MainPanel />
      <RightPanel />
    </div>
  );
}

export default Pannel;
