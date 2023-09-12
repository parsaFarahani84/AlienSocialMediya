import React, { useState } from "react";
import {
  BiCheckCircle,
  BiLogInCircle,
  BiUserCircle,
  BiKey,
} from "react-icons/bi";
import { MdEmail, MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import Atom from "../../Atom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../imgs/l-2.svg";

function Pass() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [truedata, setTrueData] = useState(false);
  const [trueUser, setTrueUser] = useState("");
  const [truePass, setTruePass] = useState("");
  const [data, setData] = useAtom(Atom);

  const changedData = (e) => {
    e.preventDefault();

    if (user.length > 0 && pass.length > 0) {
      setData({
        name: user,
        pass: pass,
      });

      toast("Data Updated");
    } else {
      toast.warn("No Data Passed");
    }
  };

  // use import { ToastContainer, toast } from "react-toastify";

  return (
    <div className="mother-p">
      <div className="pass-container">
        <div className="pass-image5">
          <img src={img} />
        </div>

        <div className="main-page-log">
          <div className="pass-login">
            <h1 className="h1">
              <div className="texty-p">
                <MdAccountCircle className="icon-s" />
                Set New Account
              </div>
            </h1>
            <form className="p-parental">
              <div>
                <div className="inputs-2">
                  <div>
                    <label className="label">
                      {" "}
                      <BiUserCircle className="icon-m" />
                      Username
                    </label>
                    <input
                      className="cool-link"
                      placeholder="Username"
                      type="email"
                    />
                  </div>
                  <div>
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