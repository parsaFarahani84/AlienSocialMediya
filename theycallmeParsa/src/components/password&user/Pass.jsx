import React from "react";
import "./Pass.css";
import img from "../../imgs/n.png";
import { GiAlienStare } from "react-icons/gi";
import { BiUserCircle, BiKey } from "react-icons/bi";
import { TbDoorEnter } from "react-icons/tb";

function Pass() {
  const userP = {
    username: "parsa",
    pass: "parsa1100",
  };

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
                <label className="label">
                  {" "}
                  <BiUserCircle className="icon-m" />
                  username
                </label>
                <input placeholder="User" />
              </div>

              <div className="inputs">
                <label className="label">
                  <BiKey className="icon-m" />
                  password
                </label>
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
