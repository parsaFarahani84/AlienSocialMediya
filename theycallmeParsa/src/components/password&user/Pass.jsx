import React, { useState } from "react";
import "./Pass.css";
import { GiAlienStare, GiArchitectMask } from "react-icons/gi";
import { BiUserCircle, BiKey, BiEditAlt, BiCheckCircle } from "react-icons/bi";
import { TbDoorEnter } from "react-icons/tb";
import { FaDoorOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import Atom from "../../Atom";
import img from "../../imgs/l-3.svg";

function Pass() {
  const [value, setValue] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [wel, setWel] = useState(true);

  const [data, setData] = useAtom(Atom);

  const checkData = function (e) {
    e.preventDefault();
    if (user === data.name && pass === data.pass) {
      setValue(true);
    }
    setWel(false);
  };
  // pass-image2

  return (
    <div className="mother-p">
      <div className="pass-container">
        <div className="pass-image">
          <img src={img} />
        </div>

        <div className="main-page-log">
          <div className="pass-login">
            <h1 className="h1">
              {wel ? (
                <div className="texty-p font-bold justify-center items-center m-4">
                  <GiAlienStare className="icon-s" />
                  Welcome Back
                </div>
              ) : value ? (
                <div className="texty-p font-bold justify-center items-center m-4 text-pl">
                  <FaDoorOpen className="icon-s" />
                  Enter To Your Panel.
                </div>
              ) : (
                <div className="texty-p font-bold justify-center items-center m-4">
                  <GiArchitectMask className="icon-s" />
                  Try Again...
                </div>
              )}
            </h1>
            <form className="p-parental mt-1" onSubmit={checkData}>
              <div>
                <div className="inputs">
                  <label className="label flex items-center">
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
                  <label className="label flex items-center">
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

                <Link to="/sign-up">
                  <button className="g-btn">
                    <BiEditAlt />
                    Sign Up
                  </button>
                </Link>
              </div>
            </form>
          </div>
          <div className="w-full flex justify-center">
            <Link to="/change">
              <p className="text-gray-500 mb-3">Forget Password?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pass;
