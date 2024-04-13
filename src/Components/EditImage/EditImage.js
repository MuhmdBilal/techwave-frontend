import React, { useState } from "react";
import { FaList } from "react-icons/fa6";
import "./EditImage.css";
import a from "../../Media/dalle.avif";
import { IoIosArrowDown } from "react-icons/io";
import Sidebar from "../../Layout/Sidebar";
import Navbar from "../../Layout/Navbar";

const EditImage = ({ handleLinkClick, showSidebar, toggleSidebar }) => {
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
            className={` order-lg-1 order-2 col-lg-${active_div ? "9" : "12"}`}
          >
            <div className="d-flex pt-3 justify-content-between px-5">
              <h3>Edit / Upscale Image</h3>
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
              <div className="mt-3 d-flex justify-content-end">
                <button className="generate-bnt">Generate</button>
              </div>
            </div>
          </div>
          <div
            className={` px-2 order-lg-2 order-1 img-container-right-div col-lg-${
              active_div ? "3 d-block" : "3 d-none"
            }`}
          >
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
            <div className="px-2 mt-5">
              <span>Image</span>
              <div>
                <button className="upload-btn">Upload</button>
              </div>
            </div>
            <div className="px-2 mt-5">
              Codeformer_fidelity
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
              background_enhance
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
            <div className="px-2 mt-5">
              face_upsample
              <div class="form-check form-switch">
                <input
                  class="form-check-input mt-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                {/* <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label> */}
              </div>
            </div>
            <div className="px-2 mt-5">
              Upscale
              <div>
                <input className="n-input mt-2" type="number" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default EditImage;
