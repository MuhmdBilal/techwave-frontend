import "./AiChatBot.css";
import React, { useEffect, useRef, useState } from "react";
import { FaList } from "react-icons/fa6";
import a from "../../Media/dalle.avif";
import { IoIosArrowDown } from "react-icons/io";
import { LuSendHorizonal } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import Sidebar from "../../Layout/Sidebar";
import Navbar from "../../Layout/Navbar";
import axios from "axios";
import ai from "../../Media/ai.png";
import user from "../../Media/user.png";
const AiChatBot = ({
  handleLinkClick,
  showSidebar,
  toggleSidebar,
  setCredit,
  credit,
}) => {
  const [active_div, setActive_div] = useState(true);
  const [dropActive, setDropActive] = useState(false);
  const [dropTwoActive, setDropTwoActive] = useState(false);
  const [record, setRecord] = useState([]);
  const [recordLoading, setRecordLoading] = useState(true);
  const getToken = localStorage.getItem("token");
  const [error, setError] = useState(false);
  const [textLoading, setTextLodaing] = useState(false);
  const [text, setText] = useState("");
  const toggle = () => {
    setActive_div(!active_div);
    console.log("Toggling active");
  };
  const dropdown = () => {
    setDropActive(!dropActive);
  };
  const handleChat = async () => {
    try {
      if (!text) {
        setError(true);
        return;
      }
      setError(false);
      setTextLodaing(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/replicate/chat-box`,
        { prompt: text },
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      if (response) {
        setText("")
        getImage();
        scrollToBottom()
      }
    } catch (e) {
      console.log("e", e);
    } finally {
      setTextLodaing(false);
    }
  };

  const getImage = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/replicate/get-Chat`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setRecord(response?.data?.result);
    } catch (e) {
      console.log("e", e);
    } finally {
      setRecordLoading(false);
    }
  };
  useEffect(() => {
    getImage();
  }, []);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when record or recordLoading changes
    scrollToBottom();
  }, [record, recordLoading]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };
  return (
    <>
      <Sidebar handleLinkClick={handleLinkClick} showSidebar={showSidebar} />
      <Navbar
        toggleSidebar={toggleSidebar}
        showSidebar={showSidebar}
        setCredit={setCredit}
        credit={credit}
      />
      <div className="col-lg-10 home-h order-lg-3 mt-5">
        <div className="mt-5">
          {/* <div className="p-4">
        <div className="bg-img-div">
          <div className="mt-5 px-5">
            <h1 className="pt-4">WELCOME</h1>
            <div className="d-flex">
              <h1>TO</h1> <h1 className="ms-3 bg-home-heading">TECHWAVE</h1>
            </div>
          </div>
        </div>

        </div> */}
          <div className="row mt-3">
            <div
              className={` order-lg-1 px-5 order-2 col-lg-${
                active_div ? "12" : "12"
              }`}
            >
              <div className="d-flex pt-3 justify-content-between ">
                <h3>AI Chat Bot</h3>
              </div>
              <div className="chat-msg-main-div-main pt-4 pb-4" >
                <div className="chat-msg-main-div pb-2" ref={chatContainerRef}>
                {recordLoading ? (
                  <div className="d-flex justify-content-center pt-5 pb-5">
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <>
                    {record?.length > 0 ? (
                      record?.map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="ps-3 d-flex align-items-center mt-4">
                              <img
                                src={item?.person == "User" ? user : ai}
                                alt="log"
                                width={item?.person == "User" ? 30 : 35}
                              />{" "}
                              <span className="user-person">
                                {item?.person}
                              </span>
                            </div>
                            <p className="ps-4 pt-3 flex-wrap pe-3 d-flex align-items-center text-chat">
                              {item?.chat}
                            </p>
                          </div>
                        );
                      })
                    ) : (
                      <div className="d-flex justify-content-center pt-5 pb-5">
                        <span>Chat is empty</span>
                      </div>
                    )}
                  </>
                )}
                </div>
                
              </div>
              <div className="send-msg-div mt-2 d-flex justify-content-between align-items-center px-3">
                <input
                  type="text"
                  className=""
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button
                  className="send-msg-icon-div d-flex justify-content-center align-items-center"
                  onClick={handleChat}
                  disabled={textLoading}
                >
                  <LuSendHorizonal />
                </button>
              </div>
              {textLoading && (
                <div className="d-flex align-items-center mt-2 mb-5">
                  <div class="spinner-grow text-light-sm" role="status">
                  </div>
                  <span className="ms-2">Lodaing ...</span>
                </div>
              )}
              {error && <span className="text-danger">fill the Input</span>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiChatBot;
