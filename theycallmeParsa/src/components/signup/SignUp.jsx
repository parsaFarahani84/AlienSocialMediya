import React from "react";
import {
  BiCheckCircle,
  BiLogInCircle,
  BiUserCircle,
  BiKey,
} from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import img from "../../imgs/l-2.svg";

function SignUp() {
  // use import { ToastContainer, toast } from "react-toastify";

  return (
    <div className="w-[95vw] flex items-center justify-center">
      <div className="pass-container pass-container w-[60rem] h-[33rem] bg-white mt-4 rounded-lg grid overflow-hidden">
        <div className="pass-image2 flex items-center justify-center">
          <img className="w-[70%]" src={img} />
        </div>

        <div className="flex flex-col justify-between">
          <div className="p-8 flex flex-col">
            <h1 className="flex items-center justify-center text-[2.2rem]">
              <div className="flex font-bold justify-center items-center mt-4">
                <MdAccountCircle className="text-[2.5rem]" />
                Set New Account
              </div>
            </h1>
            <form className="p-parental mt-5">
              <div>
                <div className="w-100 grid mt-8 grid-cols-2 ">
                  <div>
                    <label className="ml-[-0.4rem] text-[0.8rem] mb-[-0.6rem] flex items-center z-99">
                      <BiUserCircle className="text-[0.9rem]" />
                      Username
                    </label>
                    <input
                      className="cool-link py-4 px-2 w-[80%] text-lg border-none leading-4 cool-link focus:outline-none"
                      placeholder="Username"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="ml-[-0.4rem] text-[0.8rem] mb-[-0.6rem] flex items-center z-99">
                      {" "}
                      <BiKey className="text-[0.9rem]" />
                      Password
                    </label>
                    <input
                      className="focus:outline-none cool-link py-4 px-2 w-[80%] text-lg border-none leading-4 cool-link"
                      placeholder="Password"
                      type="email"
                    />
                  </div>
                </div>

                <div className="w-100 flex justify-center mt-8 items-start flex-col">
                  <label className="ml-[-0.4rem] text-[0.8rem] mb-[-0.6rem] flex items-center z-99">
                    <BiKey className="text-[0.9rem]" />
                    Comfirm Password
                  </label>
                  <input
                    className="focus:outline-none cool-link py-4 px-2 w-80 text-lg border-none leading-4 cool-link"
                    placeholder="Password"
                    type="email"
                  />
                </div>
                <div className="w-100 flex justify-center mt-8 items-start flex-col">
                  <label className="ml-[-0.4rem] text-[0.8rem] mb-[-0.6rem] flex items-center z-99">
                    <MdEmail className="text-[0.9rem]" />
                    Email
                  </label>
                  <input
                    className="focus:outline-none cool-link py-4 px-2 w-80 text-lg border-none leading-4 cool-link"
                    placeholder="Email"
                    type="email"
                  />
                </div>
              </div>

              <div className="flex gap-[0.2rem]">
                <button className="text-lg py-[0.7rem] px-[1.5rem] mt-8 rounded-[0.5rem] border-[2px] border-solid border-white cursor-pointer bg-black text-white flex items-center hover:bg-white hover:text-black hover:border-[2px] hover:border-solid hover:border-black hover:translate-y-[-7px] transition-all duration-300">
                  <BiCheckCircle />
                  Submit
                </button>

                <Link to="/">
                  <button className="text-lg py-[0.7rem] px-[1.5rem] mt-8 rounded-[0.5rem] border-[2px] border-solid border-white cursor-pointer bg-black text-white flex items-center hover:bg-white hover:text-black hover:border-[2px] hover:border-solid hover:border-black hover:translate-y-[-7px] transition-all duration-300">
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

export default SignUp;
