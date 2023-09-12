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
    <div className="mother-p">
      <div className="pass-container">
        <div className="pass-image4">
          <img src={img} />
        </div>

        <div className="main-page-log">
          <div className="pass-login">
            <h1 className="h1">
              <div className="texty-p" style={{ fontSize: "2rem" }}>
                <MdAccountCircle className="icon-s" />
                Set New Password
              </div>
            </h1>
            <form className="p-parental">
              <div>
                <div className="inputs">
                  <label className="label">
                    {" "}
                    <BiKey className="icon-m" />
                    Password
                  </label>
                  <input
                    className="cool-link"
                    placeholder="Password"
                    type="email"
                  />
                </div>

                <div className="inputs">
                  <label className="label">
                    {" "}
                    <BiKey className="icon-m" />
                    Comfirm Password
                  </label>
                  <input
                    className="cool-link"
                    placeholder="Password"
                    type="email"
                  />
                </div>
                <div className="inputs">
                  <label className="label">
                    {" "}
                    <MdEmail className="icon-m" />
                    Email
                  </label>
                  <input
                    className="cool-link"
                    placeholder="Email"
                    type="email"
                  />
                </div>
              </div>

              <div className="grouped">
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
