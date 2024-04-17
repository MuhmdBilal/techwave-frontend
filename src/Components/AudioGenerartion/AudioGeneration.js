import React, { useEffect, useState } from "react";
import { FaList } from "react-icons/fa6";
import "./AudioGeneration.css";
import a from "../../Media/dalle.avif";
import { IoIosArrowDown } from "react-icons/io";
import { Scrollbars } from "react-custom-scrollbars-2";
import Sidebar from "../../Layout/Sidebar";
import Navbar from "../../Layout/Navbar";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AudioGeneration = ({ handleLinkClick, showSidebar, toggleSidebar, setCredit,credit }) => {
  const navigate = useNavigate();
  const [active_div, setActive_div] = useState(true);
  const [dropActive, setDropActive] = useState(false);
  const [dropTwoActive, setDropTwoActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("stereo-melody-large");
  const [selectedOptionStrategy, setSelectedOptionStrategy] = useState("loudness");
  const [duration,setDuration] = useState(8)
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState([]);
  const [recordLoading, setRecordLoading] = useState(true);
  const [error, setError] = useState(false);
  const getToken = localStorage.getItem("token");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSelectChangeStrategy = (event) => {
    setSelectedOptionStrategy(event.target.value);
  };
  const toggle = () => {
    setActive_div(!active_div);
    console.log("Toggling active");
  };
  const dropdown = () => {
    setDropActive(!dropActive);
  };
  const handleGenerate = async()=>{
    try{
      if (!prompt) {
        setError(true);
        return;
      }
      const object = {
        prompt, 
        duration,
        selectedOption,
        selectedOptionStrategy
      }
      if (getToken) {
        if(credit.credit > 0 ){
          setLoading(true);
        let response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/replicate/audio-generate`,
          object,
          {
            headers: {
              Authorization: `Bearer ${getToken}`,
            },
          }
        );
        if (response.status == 200) {
          toast.success("Audio Generate successfully.");
          let responseCredit = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/get-credit`,
            {
              headers: {
                Authorization: `Bearer ${getToken}`,
              },
            })
          setCredit(responseCredit?.data?.result)
          setPrompt("");
          setError(false)
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
  }
  const getImage = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/replicate/get-audio`,
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
                <h4>Audio Generation</h4>
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
                {/* <input class=" image-c-i mt-3" type="search" placeholder=" Negative Prompt" aria-label="Search"/> */}
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
                                <source src={item.audio} type="audio/mp3" />
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
              className={` px-2 order-lg-2 order-1 img-container-right-div col-lg-${
                active_div ? "3 d-block" : "3 d-none"
              }`}
            >
              <Scrollbars style={{ width: "100%", height: 610 }}>
                <div className="Main-div position-relative p-2">
                  <div className="dropdown-head d-flex justify-content-between ">
                    <div className="d-flex">
                      <div className="d-flex flex-column">
                      Model Version
                      </div>
                    </div>
                  </div>
                  <select
                    className="arrow-icon-btn p-1 mt-2"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option value="stereo-melody-large">
                      stereo-melody-large
                    </option>
                    <option value="stereo-large">stereo-large</option>
                    <option value="melody-large">melody-large</option>
                    <option value="large">large</option>
                  </select>
                </div>

                <div className="px-2 mt-3">
                <label>Duration</label>
                <input 
                className="arrow-icon-btn p-1 mt-2"
                type="number"
                min={1}
                value={duration}
                onChange={(e)=>setDuration(e.target.value)}
                />
                  {/* <div className="dimension-dropdown-h mt-1 px-2 d-flex justify-content-between align-items-center ">
                    <p className="mt-3">announcer</p>
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
                        1024 x 1792px
                      </butotn>
                      <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                        1024 x 1792px
                      </butotn>
                      <butotn className="drop-content-btn d-flex justify-content-center align-items-center">
                        1792 x 1024px
                      </butotn>
                    </div>
                  )} */}
                </div>
                <div className="px-2 mt-3">
                  <span>Normalization Strategy</span>
                  <select
                    className="arrow-icon-btn p-1 mt-2"
                    value={selectedOptionStrategy}
                    onChange={handleSelectChangeStrategy}
                  >
                    <option value="loudness">loudness</option>
                    <option value="clip">clip</option>
                    <option value="peak">peak</option>
                    <option value="rms">rms</option>
                  </select>
                </div>
                {/* <div className="px-2 mt-3">
                  text_temp
                  <div>
                    <input className="n-input mt-2" type="number" />
                  </div>
                </div>
                <div className="px-2 mt-3">
                  waveform_temp
                  <div>
                    <input className="n-input mt-2" type="number" />
                  </div>
                </div>
                <div className="px-2 mt-5">
                  output_full
                  <div class="form-check form-switch mt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked
                    />
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

export default AudioGeneration;
