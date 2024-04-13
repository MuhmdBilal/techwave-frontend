import React, { useState } from "react";
import { FaList } from "react-icons/fa6";
import "./VideoGeneration.css";
import a from "../../Media/dalle.avif";
import { IoIosArrowDown } from "react-icons/io";
import { Scrollbars } from "react-custom-scrollbars-2";
import Sidebar from "../../Layout/Sidebar";
import Navbar from "../../Layout/Navbar";

const VideoGeneration = ({ handleLinkClick, showSidebar, toggleSidebar }) => {
  const [active_div, setActive_div] = useState(true);
  const [dropActive, setDropActive] = useState(false);
  const [dropTwoActive, setDropTwoActive] = useState(false);
  const [dropThreeActive, setDropThreeActive] = useState(false);
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
      <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
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
              className={` order-lg-1 order-2 col-lg-${
                active_div ? "9" : "12"
              }`}
            >
              <div className="d-flex pt-3 justify-content-between px-5">
                <h3>Video Generation</h3>
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
              <div className="px-4">
                <input
                  class=" image-c-i mt-3 px-2"
                  type="search"
                  placeholder="Prompt"
                  aria-label="Search"
                />
                <input
                  class=" image-c-i mt-3 px-2"
                  type="search"
                  placeholder=" Negative Prompt"
                  aria-label="Search"
                />
                <div className="mt-3 d-flex justify-content-end">
                  <button className="generate-bnt">Generate</button>
                </div>
              </div>
            </div>
            <div
              className={`py-2 px-2 order-lg-2 order-1 img-container-right-div col-lg-${
                active_div ? "3 d-block" : "3 d-none"
              }`}
            >
              <Scrollbars style={{ width: "100%", height: 610 }}>
                <div className="Main-div position-relative p-2">
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
                  max_frames
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
                  angle
                  <div>
                    <input type="text" className="big-input mt-2" />
                  </div>
                </div>
                <div className="px-2 mt-3">
                  zoom
                  <div>
                    <input type="text" className="big-input mt-2" />
                  </div>
                </div>
                <div className="px-2 mt-3">
                  translation_x
                  <div>
                    <input type="text" className="big-input mt-2" />
                  </div>
                </div>
                <div className="px-2 mt-3">
                  translation_y
                  <div>
                    <input type="text" className="big-input mt-2" />
                  </div>
                </div>

                <div className="px-2 mt-3 position-relative">
                  Color_coherence
                  <div className="dimension-dropdown-h mt-1 px-2 d-flex justify-content-between align-items-center ">
                    <p className="mt-3">Match frame 0 HSV</p>
                    <button
                      onClick={() => {
                        setDropTwoActive(!dropTwoActive);
                      }}
                      className="arrow-icon-btn"
                    >
                      <IoIosArrowDown />
                    </button>
                  </div>
                  {dropTwoActive && (
                    <div className="dropdown-content d-flex flex-column ">
                      <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                        Match frame 0 HSV
                      </butotn>
                      <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                        Match frame 0 HSV
                      </butotn>
                      <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                        Match frame 0 HSV
                      </butotn>
                    </div>
                  )}
                </div>
                <div className="px-2 mt-3 position-relative">
                  Sampler
                  <div className="dimension-dropdown-h mt-1 px-2 d-flex justify-content-between align-items-center ">
                    <p className="mt-3">plms</p>
                    <button
                      onClick={() => {
                        setDropThreeActive(!dropThreeActive);
                      }}
                      className="arrow-icon-btn"
                    >
                      <IoIosArrowDown />
                    </button>
                  </div>
                  {dropThreeActive && (
                    <div className="dropdown-content d-flex flex-column ">
                      <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                        Match frame 0 HSV
                      </butotn>
                      <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                        Match frame 0 HSV
                      </butotn>
                      <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                        Match frame 0 HSV
                      </butotn>
                    </div>
                  )}
                </div>
                <div className="px-2 mt-3">
                  fps
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
                  Seed
                  <div>
                    <input className="n-input mt-2" type="number" />
                  </div>
                </div>
              </Scrollbars>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGeneration;
