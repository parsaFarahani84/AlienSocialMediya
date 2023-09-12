import React, { useState } from "react";
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

        <div className="flex flex-col justify-between">
          <div className="p-8 flex flex-col">
            <h1 className="flex items-center justify-center text-[2.2rem]">
              {wel ? (
                <div className="flex font-bold justify-center items-center m-4">
                  <GiAlienStare className="text-[2.5rem]" />
                  Welcome Back
                </div>
              ) : value ? (
                <div className="flex font-bold justify-center items-center m-4 text-pl">
                  <FaDoorOpen className="text-[2.5rem]" />
                  Enter To Your Panel.
                </div>
              ) : (
                <div className="flex font-bold justify-center items-center m-4">
                  <GiArchitectMask className="text-[2.5rem]" />
                  Try Again...
                </div>
              )}
            </h1>
            <form className="p-parental mt-1" onSubmit={checkData}>
              <div>
                <div className="w-100 flex justify-center mt-8 items-start flex-col">
                  <label className="ml-[-0.4rem] text-[0.8rem] mb-[-0.6rem] flex items-center z-99">
                    {" "}
                    <BiUserCircle className="text-[0.9rem]" />
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
                    <BiKey className="text-[0.9rem]" />
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

              <div className="flex gap-[0.2rem]">
                {value ? (
                  <Link to="/home">
                    <button className="text-lg py-[0.7rem] px-[1.5rem] mt-8 rounded-[0.5rem] border-[2px] border-solid border-white cursor-pointer bg-black text-white flex items-center hover:bg-white hover:text-black hover:border-[2px] hover:border-solid hover:border-black hover:translate-y-[-7px] transition-all duration-300">
                      {" "}
                      <TbDoorEnter />
                      Go to pannel
                    </button>
                  </Link>
                ) : (
                  <button
                    className="text-lg py-[0.7rem] px-[1.5rem] mt-8 rounded-[0.5rem] border-[2px] border-solid border-white cursor-pointer bg-black text-white flex items-center hover:bg-white hover:text-black hover:border-[2px] hover:border-solid hover:border-black hover:translate-y-[-7px] transition-all duration-300"
                    onClick={checkData}
                  >
                    <BiCheckCircle />
                    Submit
                  </button>
                )}

                <Link to="/sign-up">
                  <button className="text-lg py-[0.7rem] px-[1.5rem] mt-8 rounded-[0.5rem] border-[2px] border-solid border-white cursor-pointer bg-black text-white flex items-center hover:bg-white hover:text-black hover:border-[2px] hover:border-solid hover:border-black hover:translate-y-[-7px] transition-all duration-300">
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
