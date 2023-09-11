import React, { useState } from "react";
import "./NewPass.css";
import { GiBirdMask } from "react-icons/gi";
import { BiUserCircle, BiKey, BiCheckCircle } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import Atom from "../../Atom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Pass() {
  //   const notify = () => toast("Data Updated");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
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

  return (
    <div className="mother-p">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="pass-container">
        <div className="pass-image2">{/* <img src={img} /> */}</div>

        <div className="pass-login">
          <h1 className="h1" style={{ fontSize: "2rem" }}>
            <div className="texty-p">
              <GiBirdMask className="icon-s" />
              Change User & Pass
            </div>
          </h1>
          <form className="p-parental" onSubmit={changedData}>
            <div>
              <div className="inputs cool-link">
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
              <button className="g-btn" onClick={changedData}>
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
