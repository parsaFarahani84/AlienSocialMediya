import React, { useState } from "react";
import "./Pass.css";
import { GiAlienStare, GiArchitectMask } from "react-icons/gi";
import { BiUserCircle, BiKey, BiEditAlt } from "react-icons/bi";
import { TbDoorEnter } from "react-icons/tb";
import { Link } from "react-router-dom";

function Pass() {
  const [value, setValue] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const userP = {
    username: "parsa",
    pass: "parsa1100",
  };

  const checkData = function (e) {
    e.preventDefault();
    if (user === userP.username && pass === userP.pass) {
      setValue(true);
    }
  };

  return (
    <div className="mother-p">
      <div className="pass-container">
        <div className="pass-image">{/* <img src={img} /> */}</div>

        <div className="pass-login">
          <h1 className="h1">
            {value ? (
              <div>
                <GiAlienStare className="icon-s" />
                Wlcome Back!
              </div>
            ) : (
              <div>
                <GiArchitectMask className="icon-s" />
                Try Again...
              </div>
            )}

            {/* <div>
              <GiAnimalSkull className="icon-s" />
              Wrong Pass/User
            </div> */}
          </h1>
          <form className="p-parental" onSubmit={checkData}>
            <div>
              <div className="inputs">
                <label className="label">
                  {" "}
                  <BiUserCircle className="icon-m" />
                  username
                </label>
                <input
                  placeholder="User"
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>

              <div className="inputs">
                <label className="label">
                  <BiKey className="icon-m" />
                  password
                </label>
                <input
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
            </div>

            {value ? (
              <Link to="/home">
                <button className="g-btn">Go to pannel</button>
              </Link>
            ) : (
              <button className="g-btn" onClick={checkData}>
                <TbDoorEnter />
                Submit
              </button>
            )}

            <Link to="/change">
              <button className="g-btn">
                <BiEditAlt />
                Set New Data
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Pass;
