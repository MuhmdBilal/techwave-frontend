import React, { useEffect, useState } from "react";
import { FaList } from "react-icons/fa6";
import "./EditImage.css";
import a from "../../Media/dalle.avif";
import { IoIosArrowDown } from "react-icons/io";
import Sidebar from "../../Layout/Sidebar";
import Navbar from "../../Layout/Navbar";
import { AiOutlinePlus } from "react-icons/ai";
import { TiMinus } from "react-icons/ti";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const EditImage = ({ handleLinkClick, showSidebar, toggleSidebar,setCredit,credit }) => {
  const [active_div, setActive_div] = useState(true);
  const navigate = useNavigate()
  const [dropActive, setDropActive] = useState(false);
  const [dropTwoActive, setDropTwoActive] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "rossjillian/controlnet:795433b19458d0f4fa172a7ccf93178d2adb1cb8ab2ad6c8fdc33fdbcd49f477"
  );
  const [structure, setStructure] = useState("canny");
  const [imageResolution, setImageResolution] = useState("512");
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(false);
  const [record, setRecord] = useState([]);
  const [recordLoading, setRecordLoading] = useState(true);
  const getToken = localStorage.getItem("token");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setError(false);
  };
  const handleStructureChange = (event) => {
    setStructure(event.target.value);
  };

  const handleResolutionChange = (event) => {
    setImageResolution(event.target.value);
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
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
  const toggle = () => {
    setActive_div(!active_div);
    console.log("Toggling active");
  };
  const dropdown = () => {
    setDropActive(!dropActive);
  };

  const handleImageEdit = async()=>{
    try{
      if (!prompt || !selectedFile) {
        setError(true);
        return;
      }
      const formData = new FormData();
      if (selectedFile) {
        formData.append('image', selectedFile);
      }
      formData.append('prompt', prompt);
      formData.append('count', count);
      formData.append('selectedOption', selectedOption);
      formData.append('structure', structure);
      formData.append('imageResolution', imageResolution);
      if (getToken) {
        if(credit.credit >0 ){
          setLoading(true);
        let response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/replicate/edit-image`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${getToken}`,
            },
          }
        );
        if (response?.status == 200) {
          toast.success("edit image Generate successfully.");
          let responseCredit = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/get-credit`,
            {
              headers: {
                Authorization: `Bearer ${getToken}`,
              },
            })
          setCredit(responseCredit?.data?.result)
          setPrompt("");
          setSelectedFile("")
          getImage();
        }
        } else{
          toast.error("Please make a purchase to add credit first.")
        }
      } else {
        toast.error("token is missing , please signIn again");
      }
    }catch (e) {
      if(e?.response?.status == 401){
        toast.error("Authentication failed! please Login again")
        navigate("/")
      } else{
        toast.error(e.message);
      }
    } finally{
      setLoading(false)
    }
  }
  const getImage = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/replicate/get-edit-image`,
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
                <h4>Edit / Upscale Image</h4>
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
                <div className="mt-3 d-flex justify-content-end">
                <button
                    className="generate-bnt"
                    onClick={handleImageEdit}
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
              className={` px-2 order-lg-2 order-1 img-container-right-div col-lg-${
                active_div ? "3 d-block" : "3 d-none"
              }`}
            >
              <div className="Main-div position-relative p-2">
                <div className="dropdown-head d-flex justify-content-between ">
                  <div className="d-flex">
                    <div className="d-flex flex-column">
                    Select Model
                    </div>
                  </div>
                </div>
                <select
                  className="arrow-icon-btn p-1 mt-2"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option
                    value="rossjillian/controlnet:795433b19458d0f4fa172a7ccf93178d2adb1cb8ab2ad6c8fdc33fdbcd49f477"
                    checked
                  >
                    controlnet
                  </option>
                </select>
              </div>
              <div className="px-2 mt-3">
              Image
                <div className="mt-2">
                  <input type="file" accept="image/*" onChange={handleImageChange}  />
                </div>
                {error && (
                  <span className="text-danger">fill the Input</span>
                )}
              </div>
              <div className="px-2 mt-5">
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
              <div className="mt-2">
                <label>Structure</label>
                <select
                  className="arrow-icon-btn p-1 mt-2"
                  value={structure}
                  onChange={handleStructureChange}
                >
                  <option value="canny">canny</option>
                  <option value="depth">depth</option>
                  <option value="hed">hed</option>
                  <option value="hough">hough</option>
                  <option value="normal">normal</option>
                  <option value="pose">pose</option>
                  <option value="scribble">scribble</option>
                  <option value="seg">seg</option>
                </select>
              </div>
              <div className="mt-2 mb-4">
                <label>Image Resolution</label>
                <select
                  className="arrow-icon-btn p-1 mt-2"
                  value={imageResolution}
                  onChange={handleResolutionChange}
                >
                  <option value="256">256</option>
                  <option value="512">512</option>
                  <option value="768">768</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditImage;
