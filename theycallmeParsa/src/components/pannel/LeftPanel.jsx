import React, { useEffect, useState } from "react";
import {
  BsFileEarmarkCheckFill,
  BsArrow90DegLeft,
  BsFillBookmarkFill,
} from "react-icons/bs";
import axios from "axios";
import { SiRoundcube } from "react-icons/si";
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import face from "../../imgs/face.jpg";
import { useAtom } from "jotai";
import Atom from "../../Atom";

function LeftPanel() {
  const [data, setData] = useAtom(Atom);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiUrl = "http://45.139.10.86/api/users/";

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);

        if (response.status !== 200) {
          throw new Error("Request failed with status " + response.status);
        }

        const data = response.data;
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAPI = (id) => {
    // axios.post("http://45.139.10.86/api/users/", {
    //   username: "ali tajili",
    //   password: "dfdsfsffsgfg",
    //   email: "mnmn.ali-tajili@example.net",
    // });
    // console.log("Posted!");
    // axios.delete(`http://45.139.10.86/api/users/${id}`);
    // console.log("Deleted!", id);
  };

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
              <div
                className="one-whole-container py-1 rounded-lg"
                onClick={() => handleAPI(i.id)}
                key={i.id}
              >
                <div className="nav-item">
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
