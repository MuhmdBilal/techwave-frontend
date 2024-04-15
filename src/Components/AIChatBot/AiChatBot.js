import "./AiChatBot.css";
import React, { useState } from "react";
import { FaList } from "react-icons/fa6";
import a from "../../Media/dalle.avif";
import { IoIosArrowDown } from "react-icons/io";
import { LuSendHorizonal } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import Sidebar from "../../Layout/Sidebar";
import Navbar from "../../Layout/Navbar";

const AiChatBot = ({ handleLinkClick, showSidebar, toggleSidebar,setCredit,credit }) => {
  const [active_div, setActive_div] = useState(true);
  const [dropActive, setDropActive] = useState(false);
  const [dropTwoActive, setDropTwoActive] = useState(false);
  const toggle = () => {
    setActive_div(!active_div);
    console.log("Toggling active");
  };
  const dropdown = () => {
    setDropActive(!dropActive);
  };
  return (
    <>
    <Sidebar handleLinkClick={handleLinkClick} showSidebar={showSidebar} />
      <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} setCredit={setCredit}
                credit={credit}/>
    <div className="col-lg-9 home-h order-lg-3 mt-5">
      <div className="mt-5 bg-black">
      <div className="p-4">
        <div className="bg-img-div">
          <div className="mt-5 px-5">
            <h1 className="pt-4">WELCOME</h1>
            <div className="d-flex">
              <h1>TO</h1> <h1 className="ms-3 bg-home-heading">TECHWAVE</h1>
            </div>
          </div>
        </div>

        </div>
        <div className="row mt-3">
          <div
            className={` order-lg-1 px-5 order-2 col-lg-${active_div ? "9" : "12"}`}
          >
            <div className="d-flex pt-3 justify-content-between ">
              <h3>AI Chat Bot</h3>
              <div className="img-container-div-w">
                This will Use four tokens per generated image.
                <button
                  onClick={toggle}
                  className=" ms-2 img-container-div-icon"
                >
                  <FaList />
                </button>
              </div>
            </div>
            <div className="chat-msg-main-div pt-4 px-5">
              <div className="position-relative text-div d-flex align-items-center">
                <div className="u-span px-3 pb-1">You</div>
                <div className=" px-3">
                  <p>bilal</p>
                  
                </div>
              </div>
            </div>
            <div className="send-msg-div mt-4 d-flex justify-content-between align-items-center px-3">
              <input type="text" className=""/>
              <div className="send-msg-icon-div d-flex justify-content-center align-items-center">
              <LuSendHorizonal />

              </div>


            </div>
          </div>
          <div
            className={` px-2 order-lg-2 order-1 img-container-right-div col-lg-${
              active_div ? "3 d-block" : "3 d-none"
            }`}
          > 
            <div className="right-sidebar-ai px-2">
              <div className="new-chat-div pt-2">
              <button className="d-flex  align-items-center">
               <span className="new-chat-div-icon"><AiOutlinePlus /></span> 
                <span className="ms-5">New Chat</span>
                </button>
                

              </div>

            </div>
            <div className="chat-history-main-div px-3 pt-3">

              <span>History</span>

            <button className="history-data-btn">07/04/2024 23:39</button>
            <button className="history-data-btn mt-2">07/04/2024 23:39</button>
            <button className="history-data-btn mt-2">07/04/2024 23:39</button>
            <button className="history-data-btn mt-2">07/04/2024 23:39</button>
            <button className="history-data-btn mt-2">07/04/2024 23:39</button>
            <button className="history-data-btn mt-2">07/04/2024 23:39</button>
            <button className="history-data-btn mt-2">07/04/2024 23:39</button>
            <button className="history-data-btn mt-2">07/04/2024 23:39</button>
            </div>
         <div className="Main-div-config">

         
            <div className="Main-div mt-2 position-relative p-2">
              <h3 className="py-2">Configuration</h3>
              <div className="dropdown-head d-flex justify-content-between ">
                <div className="d-flex">
                  <div>
                    <img src={a} alt="a" className="dropdown-icon-img" />
                  </div>
                  <div className=" px-2 d-flex flex-column">
                    <span className="light-p">Model</span>
                    <span> DALL.E 3</span>
                  </div>
                </div>
                <div>
                <button onClick={dropdown} className="arrow-icon-btn p-1">
                    
                    Select Model <IoIosArrowDown />
                  </button>
                </div>
              </div>
              {dropActive && (
                <div className="dropdown-content d-flex flex-column ">
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>

                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                  <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                    Abcdeireonoienvei
                  </butotn>
                </div>
              )}
            </div>
            <div className="px-2 mt-3">
              <h5>System_Prompt</h5>
              <div>
                <input type="text" className="big-input mt-2" />
              </div>
            </div>
            <div className="px-2 mt-5">
             <h5> Max_New_Tokens</h5>
              <div>
                <input className="n-input mt-2" type="number" />
              </div>
            </div>
            <div className="px-2 mt-5">
             <h5> Min_New_Tokens</h5>
              <div>
                <input className="n-input mt-2" type="number" />
              </div>
            </div>    
            <div className="px-2 mt-5">
              <h5>temprature</h5>
              <div>
                {/* <label for="customRange2" class="form-label">Example range</label> */}
                <input
                  type="range"
                  class="form-range mt-2"
                  min="0"
                  max="5"
                  id="customRange2"
                />
              </div>
            </div>
            <div className="px-2 mt-5">
              <h5>top_p</h5>
              <div>
                {/* <label for="customRange2" class="form-label">Example range</label> */}
                <input
                  type="range"
                  class="form-range mt-2"
                  min="0"
                  max="5"
                  id="customRange2"
                />
              </div>
            </div>
            <div className="px-2 mt-3">
              <h5>Repetition_penality</h5>
              <div>
                <input type="text" className="big-input mt-2" />
              </div>
            </div>
            <div className="px-2 mt-5">
             <h5>stop_sequence</h5>
              <div>
                <input className="n-input mt-2" type="number" />
              </div>
            </div>
            <div className="px-2 mt-5">
              <h5>Seed</h5>
              <div>
                <input className="n-input mt-2" type="number" />
              </div>
            </div>
            <div className="px-2 mt-5">
              <h5>Debug</h5>
              <div class="form-check form-switch mt-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked
                />
              </div>
            </div>
            <div className="px-2 mt-3">
              <h5>Prompt_template</h5>
              <div>
                <input type="text" className="big-input mt-2" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default AiChatBot;
