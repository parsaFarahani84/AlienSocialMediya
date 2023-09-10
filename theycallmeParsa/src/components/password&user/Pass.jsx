import React, { useState } from "react";
import "./Pass.css";
import { GiAlienStare, GiArchitectMask, GiAndroidMask } from "react-icons/gi";
import { BiUserCircle, BiKey, BiEditAlt, BiCheckCircle } from "react-icons/bi";
import { TbDoorEnter } from "react-icons/tb";
import { Link } from "react-router-dom";

function Pass() {
  const [value, setValue] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [wel, setWel] = useState(true);

  const userP = {
    username: "parsa",
    pass: "parsa1100",
  };

  const checkData = function (e) {
    e.preventDefault();
    if (user === userP.username && pass === userP.pass) {
      setValue(true);
    }
    setWel(false);
  };

  return (
    <div className="mother-p">
      <div className="pass-container">
        <div className="pass-image">{/* <img src={img} /> */}</div>

        <div className="pass-login">
          <h1 className="h1">
            {wel ? (
              <div className="texty-p">
                <GiAlienStare className="icon-s" />
                Welcome Back
              </div>
            ) : value ? (
              <div className="texty-p">
                <GiAndroidMask className="icon-s" />
                Let's Gooo!
              </div>
            ) : (
              <div className="texty-p">
                <GiArchitectMask className="icon-s" />
                Try Again...
              </div>
            )}
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
                  className="cool-link"
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
                  className="cool-link"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
            </div>

            <div className="grouped">
              {value ? (
                <Link to="/home">
                  <button className="g-btn">
                    {" "}
                    <TbDoorEnter />
                    Go to pannel
                  </button>
                </Link>
              ) : (
                <button className="g-btn" onClick={checkData}>
                  <BiCheckCircle />
                  Submit
                </button>
              )}

              <Link to="/change">
                <button className="g-btn">
                  <BiEditAlt />
                  Set New Data
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Pass;
