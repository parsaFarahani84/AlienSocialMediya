import React, { useState } from "react";
import { BiCheckCircle, BiLogInCircle, BiKey } from "react-icons/bi";
import { MdEmail, MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import Atom from "../../Atom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../imgs/l.svg";

function Pass() {
  // use import { ToastContainer, toast } from "react-toastify";

  return (
    <div className="w-[95vw] flex items-center justify-center">
      <div className="pass-container pass-container w-[60rem] h-[33rem] bg-white mt-4 rounded-lg grid overflow-hidden">
        <div className="pass-image4 flex items-center justify-center">
          <img className="w-[70%]" src={img} />
        </div>

        <div className="main-page-log">
          <div className="p-8 flex flex-col">
            <h1 className="flex items-center justify-center text-[2.2rem]">
              <div
                className="flex font-bold justify-center items-center m-3"
                style={{ fontSize: "2rem" }}
              >
                <MdAccountCircle className="icon-s" />
                Set New Password
              </div>
            </h1>
            <form className="p-parental mt-3">
              <div>
                <div className="w-100 flex justify-center mt-8 items-start flex-col">
                  <label className="ml-[-0.4rem] text-[0.8rem] mb-[-0.6rem] flex items-center z-99">
                    {" "}
                    <BiKey className="icon-m" />
                    Password
                  </label>
                  <input
                    className="focus:outline-none cool-link py-4 px-2 w-80 text-lg border-none leading-4 cool-link"
                    placeholder="Password"
                    type="email"
                  />
                </div>

                <div className="w-100 flex justify-center mt-8 items-start flex-col">
                  <label className="ml-[-0.4rem] text-[0.8rem] mb-[-0.6rem] flex items-center z-99">
                    {" "}
                    <BiKey className="icon-m" />
                    Comfirm Password
                  </label>
                  <input
                    className="focus:outline-none cool-link py-4 px-2 w-80 text-lg border-none leading-4 cool-link"
                    placeholder="Password"
                    type="email"
                  />
                </div>
                <div className="w-100 flex justify-center mt-8 items-start flex-col">
                  <label className="ml-[-0.4rem] text-[0.8rem] mb-[-0.6rem] z-99 flex items-center">
                    {" "}
                    <MdEmail className="icon-m" />
                    Email
                  </label>
                  <input
                    className="focus:outline-none cool-link py-4 px-2 w-80 text-lg border-none leading-4 cool-link"
                    placeholder="Email"
                    type="email"
                  />
                </div>
              </div>

              <div className="flex">
                <button className="g-btn">
                  <BiCheckCircle />
                  Submit
                </button>

                <Link to="/">
                  <button className="g-btn">
                    <BiLogInCircle />
                    Log In
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pass;
