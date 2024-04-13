import React from "react";
import "./Home.css";
import { LuImage } from "react-icons/lu";
import { FiVideo } from "react-icons/fi";
import { PiSpeakerHighBold } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/Navbar";

const Home = ({ handleLinkClick, showSidebar, toggleSidebar }) => {
  return (
    <>
      <Sidebar handleLinkClick={handleLinkClick} showSidebar={showSidebar} />
      <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />

      <div className="col-lg-9 home-h order-lg-3 mt-5">
        <div className="mt-5 bg-black px-5">
          <div className="pt-3">
            <div className="bg-img-div">
              <div className="mt-5 px-5">
                <h1 className="pt-4">WELCOME</h1>
                <div className="d-flex">
                  <h1>TO</h1> <h1 className="ms-3 bg-home-heading">TECHWAVE</h1>
                </div>
              </div>
            </div>
            <div className="px-2 mt-5 row">
              <div className="col-lg-9 ">
                <h2 className="text-center">Unleash Your Creativity with AI</h2>
                <div className="row">
                  <div className="col-lg-6 d-flex justify-content-center ">
                    <div className="home-card-div mt-3">
                      <div className="card-head d-flex justify-content-center ">
                        <div className="card-img-div mt-5 d-flex justify-content-center align-items-center">
                          <LuImage className="home-card-icon" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                        <h3>Image Generation</h3>
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
                        <button className="visit-btn">Visit Now</button>
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
                        <h3>Video Generation</h3>
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
                        <button className="visit-btn">Visit Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center ">
                    <div className="home-card-div mt-3">
                      <div className="card-head d-flex justify-content-center ">
                        <div className="card-img-div mt-5 d-flex justify-content-center align-items-center">
                          <PiSpeakerHighBold className="home-card-icon" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                        <h3>Audio Generation</h3>
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
                        <button className="visit-btn">Visit Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center ">
                    <div className="home-card-div mt-3">
                      <div className="card-head d-flex justify-content-center ">
                        <div className="card-img-div mt-5 d-flex justify-content-center align-items-center">
                          <IoChatbubbleEllipsesOutline className="home-card-icon" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                        <h3>Audio Generation</h3>
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
                        <button className="visit-btn">Visit Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className="right-home-div px-2 ps-4 pt-5 ">
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
