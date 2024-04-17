import React from "react";
import "./Home.css";
import { LuImage } from "react-icons/lu";
import { FiVideo } from "react-icons/fi";
import { PiSpeakerHighBold } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/Navbar";
import { useNavigate } from "react-router-dom";

const Home = ({ handleLinkClick, showSidebar, toggleSidebar,setCredit,credit }) => {
  const navigate = useNavigate()
  return (
    <>
      <Sidebar handleLinkClick={handleLinkClick} showSidebar={showSidebar} />
      <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} 
      setCredit={setCredit}
                credit={credit}
                />

      <div className="col-lg-10 home-h order-lg-3 mt-5">
        <div className="mt-5  px-5">
          <div className="pt-3">
            <div className="bg-img-div">
              <div className="mt-5 px-5">
                <h2 className="pt-4">WELCOME</h2>
                <div className="d-flex">
                  <h2>TO</h2> <h2 className="ms-3 bg-home-heading">TECHWAVE</h2>
                </div>
              </div>
            </div>
            <div className="px-2 mt-5 row">
              <div className="col-lg-9 ">
                <h3 className="text-start">Unleash Your Creativity with AI</h3>
                <div className="row">
                  <div className="col-lg-6 d-flex justify-content-center ">
                    <div className="home-card-div mt-3">
                      <div className="card-head d-flex justify-content-center ">
                        <div className="card-img-div mt-5 d-flex justify-content-center align-items-center">
                          <LuImage className="home-card-icon" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                        <h5>Image Generation</h5>
                      </div>
                      <div className="text-center px-2">
                        <p className="mt-2">
                          This filed of AI combines deep learning algorithms and
                          geenrative models to create new images that resemble
                          real-worlds photographs or exhibit creative ad
                          imaginitive qualities
                        </p>
                      </div>
                      <div className="d-flex justify-content-center ">
                        <button className="visit-btn" onClick={()=>navigate("/imagegeneration")}>Visit Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center ">
                    <div className="home-card-div mt-3">
                      <div className="card-head d-flex justify-content-center ">
                        <div className="card-img-div mt-5 d-flex justify-content-center align-items-center">
                          <FiVideo className="home-card-icon" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                        <h5>Video Generation</h5>
                      </div>
                      <div className="text-center px-2">
                        <p className="mt-2">
                          This filed of AI combines deep learning algorithms and
                          geenrative models to create new video that resemble
                          real-worlds videos or exhibit creative ad imaginitive
                          qualities
                        </p>
                      </div>
                      <div className="d-flex justify-content-center ">
                        <button className="visit-btn" onClick={()=>navigate("/videogeneration")}>Visit Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center mb-3">
                    <div className="home-card-div mt-3">
                      <div className="card-head d-flex justify-content-center ">
                        <div className="card-img-div mt-5 d-flex justify-content-center align-items-center">
                          <PiSpeakerHighBold className="home-card-icon" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                        <h5>Audio Generation</h5>
                      </div>
                      <div className="text-center px-2">
                        <p className="mt-2">
                          This filed of AI combines deep learning algorithms and
                          geenrative models to create new audio that resemble
                          real human speech or exhibit creative ad imaginitive
                          tone
                        </p>
                      </div>
                      <div className="d-flex justify-content-center ">
                        <button className="visit-btn" onClick={()=>navigate("/audiogeneration")}>Visit Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center mb-3">
                    <div className="home-card-div mt-3">
                      <div className="card-head d-flex justify-content-center ">
                        <div className="card-img-div mt-5 d-flex justify-content-center align-items-center">
                          <IoChatbubbleEllipsesOutline className="home-card-icon" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                        <h5>Chat Box</h5>
                      </div>
                      <div className="text-center px-2">
                        <p className="mt-2">
                          This filed of AI combines deep learning algorithms and
                          geenrative models to create new audio that resemble
                          real human speech or exhibit creative ad imaginitive
                          tone
                        </p>
                      </div>
                      <div className="d-flex justify-content-center ">
                        <button className="visit-btn" onClick={()=>navigate("/aichatbot")}>Visit Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className="right-home-div px-2 ps-4 ">
                  <h3 className="mt-lg-5 ">TechWave</h3>
                  <p>
                    The official server of Samurai, an all-in-one AI where your
                    imagination is the only limit. We’re building market-leading
                    features that will give you greater control over your
                    generations.
                  </p>
                  <div className="d-flex">
                    <div className="green-dot mt-1"></div>
                    <p className="ms-2">1,154,694 Online</p>
                  </div>
                  <div className="d-flex">
                    <div className="grey-dot mt-1"></div>
                    <p className="ms-2">77,345,912 Members</p>
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

export default Home;
