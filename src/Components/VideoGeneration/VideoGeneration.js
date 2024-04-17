import React, { useEffect, useState } from "react";
import { FaList } from "react-icons/fa6";
import "./VideoGeneration.css";
import a from "../../Media/dalle.avif";
import { IoIosArrowDown } from "react-icons/io";
import { Scrollbars } from "react-custom-scrollbars-2";
import Sidebar from "../../Layout/Sidebar";
import Navbar from "../../Layout/Navbar";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VideoGeneration = ({ handleLinkClick, showSidebar, toggleSidebar, setCredit,credit  }) => {
  const [active_div, setActive_div] = useState(true);
  const navigate = useNavigate()
  const [dropActive, setDropActive] = useState(false);
  const [dropTwoActive, setDropTwoActive] = useState(false);
  const [dropThreeActive, setDropThreeActive] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [record, setRecord] = useState([]);
  const [recordLoading, setRecordLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(
    "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351"
  );
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [selectedValue, setSelectedValue] = useState("xl");
  const getToken = localStorage.getItem("token");
  const handleSelectChangeModel = (event) => {
    setSelectedValue(event.target.value);
  };
  const toggle = () => {
    setActive_div(!active_div);
    console.log("Toggling active");
  };
  const dropdown = () => {
    setDropActive(!dropActive);
  };
  const handleGenerate = async () => {
    try {
      if (!prompt) {
        setError(true);
        return;
      }
      const object = {
        prompt,
        selectedOption,
        selectedValue,
      };
      if (getToken) {
        if(credit?.credit >0 ){
          setLoading(true);
        let response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/replicate/video-generate`,
          object,
          {
            headers: {
              Authorization: `Bearer ${getToken}`,
            },
          }
        );
        if (response.status == 200) {
          toast.success("Video Generate successfully.");
          let responseCredit = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/get-credit`,
            {
              headers: {
                Authorization: `Bearer ${getToken}`,
              },
            })
          setCredit(responseCredit?.data?.result)
          setPrompt("");
          getImage();
        }
        } else{
          toast.error("Please make a purchase to add credit first.")
        }
        
      } else {
        toast.error("token is missing , please signIn again");
      }
    } catch (e) {
      if(e?.response?.status == 401){
        toast.error("Authentication failed! please Login again")
        navigate("/")
      } else{
        toast.error(e.message);
      }
    } finally {
      setLoading(false);
    }
  };
  const getImage = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/replicate/get-video`,
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
  return (
    <>
      <Sidebar handleLinkClick={handleLinkClick} showSidebar={showSidebar} />
      <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} setCredit={setCredit}
                credit={credit}/>
      <div className="col-lg-10 home-h order-lg-3 mt-5">
        <div className="mt-5">
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
              <div className="d-flex pt-3 justify-content-between px-4">
                <h4>Video Generation</h4>
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
                  class=" image-c-i mt-3 px-3"
                  type="search"
                  placeholder="Prompt"
                  aria-label="Search"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
                {error && !prompt && (
                  <span className="text-danger">fill the Input</span>
                )}
                <input
                  class=" image-c-i mt-3 px-2"
                  type="search"
                  placeholder=" Negative Prompt"
                  aria-label="Search"
                />
                <div className="mt-3 d-flex justify-content-end">
                  <button
                    className="generate-bnt"
                    onClick={handleGenerate}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          aria-hidden="true"
                        ></span>
                        <span role="status" className="ms-2">
                          Loading...
                        </span>
                      </>
                    ) : (
                      "Generate"
                    )}
                  </button>
                </div>
              </div>
              <div className="row">
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
                          <div
                            className="col-md-4 p-2 mb-2 mt-2"
                            key={index}
                          >
                            <div className="video-container">
                            
                              <video className="w-100" controls>
                                <source src={item.video} type="video/mp4" />
                              </video>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="d-flex justify-content-center pt-5 pb-5">
                        <span>Record Not Found</span>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            <div
              className={`py-2 px-2 order-lg-2 order-1 img-container-right-div col-lg-${
                active_div ? "3 d-block" : "3 d-none"
              }`}
            >
              <Scrollbars style={{ width: "100%", height: 610 }}>
                <div className="Main-div position-relative">
                    <div className="d-flex">
                      <div className="d-flex flex-column">
                      Select Model
                      </div>
                    </div>
                    <select
                      className="arrow-icon-btn p-1 mt-2"
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      <option
                        value="anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351"
                        checked
                      >
                        zeroscope-v2-xl
                      </option>
                    </select>
                </div>
                <div className="mt-3">
                Model
                  <select
                    className="arrow-icon-btn p-1 mt-2"
                    value={selectedValue}
                    onChange={handleSelectChangeModel}
                  >
                    <option value="xl">xl</option>
                    <option value="576w">576w</option>
                    <option value="potat1">potat1</option>
                    <option value="animov-512x">animov-512x</option>
                  </select>
                </div>
                {/* <div className="px-2 mt-3">
                  max_frames
                  <div>
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
                </div> */}
              </Scrollbars>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGeneration;
