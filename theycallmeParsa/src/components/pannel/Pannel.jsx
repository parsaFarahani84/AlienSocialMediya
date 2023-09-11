import React from "react";
import img from "../../imgs/k-r.png";
import "./Pannel.css";
import { useAtom } from "jotai";
import { BsFileEarmarkCheckFill, BsArrowRight } from "react-icons/bs";
import { FaEdit, FaMicrophoneAlt } from "react-icons/fa";
import { SiRoundcube } from "react-icons/si";
import { FiArrowDownRight } from "react-icons/fi";
import Atom from "../../Atom";
import { Link } from "react-router-dom";

function Pannel() {
  const [data, setData] = useAtom(Atom);

  return (
    <div className="mother-s">
      <div className="left-panel">
        <div className="one">
          <Link to="/" className="right-head">
            <SiRoundcube className="icon-s" />

            <h2>
              <span className="colored-t">{data.name}</span>'s panel
            </h2>
          </Link>
        </div>
        <div className="one-main">
          <h3 className="intro">
            <FiArrowDownRight />
            Sections:
          </h3>
          <div className="nav-item">
            <h4>
              <div>
                <FaEdit className="icon-color" />
                Blog Section
              </div>
              <div>
                <BsArrowRight className="icon-p appear" />
              </div>
            </h4>
          </div>
          <div className="nav-item">
            <h4>
              <div>
                <BsFileEarmarkCheckFill className="icon-color" />
                Todo's
              </div>
              <div>
                {" "}
                <BsArrowRight className="icon-p appear" />
              </div>
            </h4>
          </div>
          <div className="nav-item">
            <h4>
              <div>
                <FaMicrophoneAlt className="icon-color" />
                Talk
              </div>
              <div>
                {" "}
                <BsArrowRight className="icon-p appear" />
              </div>
            </h4>
          </div>
          <div className="nav-item">
            <h4>
              <div>
                <FaMicrophoneAlt className="icon-color" />
                Blog Section
              </div>
              <div className="">
                {" "}
                <BsArrowRight className="icon-p appear" />
              </div>
            </h4>
          </div>

          <div className="big-sec"></div>
        </div>
      </div>
      <div className="main-panel"></div>
      <div className="right-panel"></div>
    </div>
  );
}

export default Pannel;
