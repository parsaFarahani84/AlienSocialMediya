import React, { useEffect, useState } from "react";
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
  const [users, setUsers] = useState([]);

  // const handleAPI = async () => {
  //   const API = await fetch("http://45.139.10.86/api/users/");
  //   console.log(API.json());
  // };

  useEffect(() => {
    // Define the URL of the API you want to fetch data from
    const apiUrl = "http://45.139.10.86/api/users/"; // Replace with your API URL

    // Create a function to fetch and log data
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
          {/* ----------------------------------------- */}

          <div className="user-mother flex flex-col gap-2">
            {users.map((i) => (
              <div className="one-whole-container py-1 rounded-lg">
                <div
                  className="nav-item"
                  key={i.id}
                  onClick={() => handleAPI()}
                >
                  <img className="faces" src={face} />
                  <h4>
                    <div className="center max-w-[100px] overflow-hidden whitespace-nowrap text-ellipsis">
                      {i.username}
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p className="unread">1</p>
                    </div>
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* ----------------------------------------- */}
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
