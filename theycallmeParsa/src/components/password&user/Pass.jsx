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

  return (
    <div className="w-[95vw] flex items-center justify-center">
      <div className="pass-container w-[60rem] h-[33rem] bg-white mt-4 rounded-lg grid overflow-hidden">
        <div className="pass-image flex items-center justify-center">
          <img className="w-[80%]" src={img} />
        </div>

        <div className="main-page-log">
          <div className="p-8 flex flex-col">
            <h1 className="flex items-center justify-center text-[2.2rem]">
              {wel ? (
                <div className="flex font-bold justify-center items-center m-4">
                  <GiAlienStare className="icon-s" />
                  Welcome Back
                </div>
              ) : value ? (
                <div className="flex font-bold justify-center items-center m-4 text-pl">
                  <FaDoorOpen className="icon-s" />
                  Enter To Your Panel.
                </div>
              ) : (
                <div className="flex font-bold justify-center items-center m-4">
                  <GiArchitectMask className="icon-s" />
                  Try Again...
                </div>
              )}
            </h1>
            <form className="p-parental mt-1" onSubmit={checkData}>
              <div>
                <div className="w-100 flex justify-center mt-8 items-start flex-col">
                  <label className="ml-[-0.4rem] text-[0.8rem] mb-[-0.6rem] flex items-center z-99">
                    {" "}
                    <BiUserCircle className="icon-m" />
                    username
                  </label>
                  <input
                    className="focus:outline-none cool-link py-4 px-2 w-80 text-lg border-none leading-4"
                    placeholder="User"
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>

                <div className="w-100 flex justify-center mt-8 items-start flex-col">
                  <label className="ml-[-0.4rem] text-[0.8rem] mb-[-0.6rem] flex items-center z-99">
                    <BiKey className="icon-m" />
                    password
                  </label>
                  <input
                    className="focus:outline-none cool-link py-4 px-2 w-80 text-lg border-none leading-4 cool-link"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex">
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
