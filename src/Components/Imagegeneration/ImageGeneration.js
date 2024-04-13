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

const ImageGeneration = ({ handleLinkClick, showSidebar, toggleSidebar }) => {
  const [active_div, setActive_div] = useState(true);
  const [dropActive, setDropActive] = useState(false);
  const [dropTwoActive, setDropTwoActive] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState([]);
  const [recordLoading, setRecordLoading] = useState(true);
  const [error, setError] = useState(false);
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
      if (getToken) {
        setLoading(true);
        let response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/replicate/image-generate`,
          prompt,
          {
            headers: {
              Authorization: `Bearer ${getToken}`,
            },
          }
        );
        if (response.status == 200) {
          toast.success(response?.data?.message);
          setPrompt("");
          getImage()
        }
      } else {
        toast.error("token is missing , please signIn again");
      }
    } catch (e) {
      toast.error(e.message);
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
      toast.error(e.message);
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

          <div className="row mt-2">
            <div
              className={` order-lg-1 order-2 col-lg-${
                active_div ? "9" : "12"
              }`}
            >
              <div className="d-flex pt-3 justify-content-between px-5">
                <h3>Image Generation</h3>
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
                  class=" image-c-i mt-3 px-3"
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
                        return <div className="col-md-4 p-2 mb-2 mt-2" key={index}>
                          <img  src={item?.image} alt="image" className="img-fluid" />
                        </div>;
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
              <Scrollbars style={{ width: "100%", height: 500 }}>
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
                    <Scrollbars style={{ width: "100%", height: 300 }}>
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
                    </Scrollbars>
                  )}
                </div>

                <div className="px-2 mt-5">
                  Number of images:
                  <div className="counting-div mt-2 d-flex">
                    <button className=" ms-1 d-flex justify-content-center align-items-center">
                      <TiMinus />
                    </button>
                    <div className="count-input-div d-flex justify-content-center">
                      2 {/* <input className="" type="number" value="1" /> */}
                    </div>
                    <button className="d-flex justify-content-center align-items-center">
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
                <div className="px-2 mt-3">
                  Image Dimensions
                  <div className="dimension-dropdown-h mt-1 px-2 d-flex justify-content-between align-items-center ">
                    <p className="mt-3">1024 x 1024px</p>
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
                  )}
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
