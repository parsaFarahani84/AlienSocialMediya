import React from "react";
import {
  BsFileEarmarkCheckFill,
  BsArrow90DegLeft,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { BiSolidCircle } from "react-icons/bi";
import { SiRoundcube } from "react-icons/si";
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import face from "../../imgs/face.jpg";
import { useAtom } from "jotai";
import Atom from "../../Atom";

function LeftPanel() {
  const [data, setData] = useAtom(Atom);

  return (
    <div>
      {" "}
      <div className="left-panel">
        <div className="one-main">
          <div className="one">
            <div className="right-head">
              <SiRoundcube className="icon-s" />

              <h2>
                <span className="colored-t">{data.name}</span>'s chats
              </h2>
            </div>
          </div>
          <h3 className="intro">
            <FiArrowDownRight />
            chats:
          </h3>
          <div className="nav-item">
            <h4 style={{ marginLeft: "15px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
              >
                <BsFillBookmarkFill
                  className="icon-color icon-p"
                  style={{ color: "#337CCF" }}
                />
                Save Messages
              </div>
            </h4>
          </div>
          <div className="nav-item">
            <img className="faces" src={face} />
            <h4>
              <div className="center">Sarah Jay</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p className="unread">1</p>
              </div>
            </h4>
          </div>
          <div className="nav-item">
            <img className="faces" src={face} />
            <BiSolidCircle className="icon-m online" />
            <h4>
              <div className="center">Sarah Jay</div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <p className="unread">2</p>
              </div>
            </h4>
          </div>
        </div>
        <div className="bottom-sec">
          <Link to="/">
            <span className="b-s">
              <BsArrow90DegLeft />
              Back To Log In Page
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
