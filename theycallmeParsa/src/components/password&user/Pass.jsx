import React from "react";
import "./Pass.css";
import img from "../../imgs/n.png";
import { GiAlienStare, GiBalaclava, GiKey } from "react-icons/gi";
import { TbDoorEnter } from "react-icons/tb";

function Pass() {
  return (
    <div className="mother-p">
      <div className="pass-container">
        <div className="pass-image">
          <img src={img} />
        </div>

        <div className="pass-login">
          <h1 className="h1">
            <GiAlienStare className="icon-s" />
            Wlcome Back
          </h1>
          <div className="p-parental">
            <div>
              <div className="inputs">
                {/* <GiBalaclava className="icon-p" /> */}
                <input placeholder="User" />
              </div>

              <div className="inputs">
                {/* <GiKey className="icon-p" /> */}
                <input placeholder="Password" />
              </div>
            </div>
            <button className="g-btn">
              <TbDoorEnter />
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pass;
