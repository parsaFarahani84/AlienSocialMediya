import React, { useState } from "react";
import "./NewPass.css";
import { GiBirdMask } from "react-icons/gi";
import { BiUserCircle, BiKey, BiCheckCircle } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
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
        <div className="pass-image2">{/* <img src={img} /> */}</div>

        <div className="pass-login">
          <h1 className="h1" style={{ fontSize: "2rem" }}>
            <div className="texty-p">
              <GiBirdMask className="icon-s" />
              Change User & Pass
            </div>
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
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
            </div>

            <div className="grouped">
              <button className="g-btn" onClick={checkData}>
                <BiCheckCircle />
                Submit
              </button>
              <Link to="/">
                <button className="g-btn">
                  <IoIosArrowBack />
                  Back
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
