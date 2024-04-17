import React, { useEffect, useState } from "react";
import { FaList } from "react-icons/fa6";
import "./Imagegeneration.css";
import a from "../../Media/dalle.avif";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { TiMinus } from "react-icons/ti";
import { Scrollbars } from "react-custom-scrollbars-2";
import Sidebar from "../../Layout/Sidebar";
import Navbar from "../../Layout/Navbar";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  useWeb3ModalState,
} from '@web3modal/ethers5/react';
const ImageGeneration = ({ handleLinkClick, showSidebar, toggleSidebar, setCredit, credit }) => {
  const { address } = useWeb3ModalState();
  console.log("address", address);
  const navigate = useNavigate()
  const [active_div, setActive_div] = useState(true);
  const [dropActive, setDropActive] = useState(false);
  const [dropTwoActive, setDropTwoActive] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState([]);
  const [recordLoading, setRecordLoading] = useState(true);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(1);
  const [selectedOption, setSelectedOption] = useState(
    "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4"
  );
  const [selectedWidth, setSelectedWidth] = useState("1024");
  const [selectedHeight, setSelectedHeight] = useState("1024");
  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handlePlus = () => {
    if (count < 4) {
      setCount(count + 1);
    }
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleWidthChange = (event) => {
    setSelectedWidth(event.target.value);
  };
  const handleHeightChange = (event) => {
    setSelectedHeight(event.target.value);
  };
  const getToken = localStorage.getItem("token");
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
        selectedWidth,
        selectedHeight,
        count
      }
      if (getToken) {
        if (credit.credit > 0) {
          setLoading(true);
          let response = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/replicate/image-generate`,
            object,
            {
              headers: {
                Authorization: `Bearer ${getToken}`,
              },
            }
          );
          if (response.status == 200) {
            toast.success(response?.data?.message);
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
        } else {
          toast.error("Please make a purchase to add credit first.")
        }
      } else {
        toast.error("token is missing , please signIn again");
      }
    } catch (e) {
      if (e?.response?.status == 401) {
        toast.error("Authentication failed! please Login again")
        navigate("/")
      } else {
        toast.error(e.message);
      }
    } finally {
      setLoading(false);
    }
  };
  const getImage = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/replicate/get-image`,
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
        credit={credit} />
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

          <div className="row mt-2">
            <div
              className={` order-lg-1 order-2 col-lg-${active_div ? "9" : "12"
                }`}
            >
              <div className="d-flex pt-3 justify-content-between px-4">
                <h4>Image Generation</h4>
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
                {/* <input
                  class=" image-c-i mt-3 px-3"
                  type="search"
                  placeholder=" Negative Prompt"
                  aria-label="Search"
                /> */}
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
                          <div className="col-md-4 p-2 mb-2 mt-2" key={index}>
                            <img
                              src={item?.image}
                              alt="image"
                              className="img-fluid"
                            />
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
              className={` px-2 order-lg-2 order-1 img-container-right-div col-lg-${active_div ? "3 d-block" : "3 d-none"
                }`}
            >
              <Scrollbars style={{ width: "100%", height: 500 }}>
                <div className="Main-div position-relative p-2">
                  {/* <div className="dropdown-head d-flex justify-content-between "> */}
                  <div className="d-flex">
                    <div className=" d-flex flex-column mb-2">
                    Select Model
                      {/* <span> DALL.E 3</span> */}
                    </div>
                  </div>
                  <select
                    className="arrow-icon-btn p-1"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option
                      value="stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4"
                      checked
                    >
                      stable-diffusion
                    </option>
                    <option value="stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b">
                      sdxl
                    </option>
                  </select>
                </div>

                <div className="px-2 mt-4">
                  Number of images:
                  <div className="counting-div mt-2 d-flex">
                    <button
                      className="ms-1 d-flex justify-content-center align-items-center"
                      onClick={handleMinus}
                    >
                      <TiMinus />
                    </button>
                    <div className="count-input-div d-flex justify-content-center">
                      <span>{count}</span>
                    </div>
                    <button
                      className="d-flex justify-content-center align-items-center"
                      onClick={handlePlus}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
                <div className="px-2 mt-3">
                  Image Dimensions
                  <div>
                    <label className="mt-3 mb-2">Width</label>
                    <select
                      className="arrow-icon-btn p-1"
                      value={selectedWidth}
                      onChange={handleWidthChange}
                    >
                      <option value="1024">1024</option>
                      <option value="960">960</option>
                      <option value="896">896</option>
                      <option value="832">832</option>
                      <option value="768">768</option>
                    </select>
                  </div>
                  <div>
                    <label className="mt-3 mb-2">Height</label>
                    <select
                      className="arrow-icon-btn p-1"
                      value={selectedHeight}
                      onChange={handleHeightChange}
                    >
                      <option value="1024">1024</option>
                      <option value="960">960</option>
                      <option value="896">896</option>
                      <option value="832">832</option>
                      <option value="768">768</option>
                    </select>
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

export default ImageGeneration;
