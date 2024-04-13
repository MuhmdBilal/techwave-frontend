import React from "react";
import "./Pricing.css";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/Sidebar";

const Pricing = ({ handleLinkClick, showSidebar, toggleSidebar }) => {
  const [iconone, setIconone] = useState(true);
  const [icontwo, setIcontwo] = useState(true);
  const [iconthree, setIconthree] = useState(true);
  const [iconfour, setIconfour] = useState(true);
  const [iconfive, setIconfive] = useState(true);
  const [iconsix, setIconsix] = useState(true);
  const [iconseven, setIconseven] = useState(true);
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
        <div className="pt-4">
          <div className=" text-center">
            <h1 className="mt-5">Simple Pricing, Unbeatable Value</h1>
            <h6>
              Usage-based payment. Pay as you go with your wallet. Take control
              of everything.
            </h6>
          </div>
          <div className="row">
            <div className="col-11 px-3 mx-auto">
              <div className="row">
                <div className="col-lg-3 mt-2">
                  <div className="price-card  pt-4 text-center card">
                    <h3>Personal</h3>
                    <h1>$15</h1>
                    <p>150 Tokens</p>
                    <div>
                      <button className="buy-btn-price">BUY</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3  mt-2">
                  <div className="price-card  pt-4 text-center card">
                    <h3>Premium</h3>
                    <h1>$20</h1>
                    <p>150 Tokens</p>
                    <div>
                      <button className="buy-btn-price">BUY</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3  mt-2">
                  <div className="price-card  pt-4 text-center card">
                    <h3>Enterprice</h3>
                    <h1>$30</h1>
                    <p>150 Tokens</p>
                    <div>
                      <button className="buy-btn-price">BUY</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3  mt-2">
                  <div className="price-card  pt-4 text-center card">
                    <h3>Diamond</h3>
                    <h1>$40</h1>
                    <p>150 Tokens</p>
                    <div>
                      <button className="buy-btn-price">BUY</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row py-5">

                <div className="col-12 pt-5  px-2 text-center mx-auto">
                  <h1>Frequently Asked Questions</h1>
                  <h6 className="mb-5">Many support queries and technical questions will already be answered</h6>
                  <button
                    onClick={() => {
                      setIconone(!iconone);
                    }}
                    className="faq-main-div d-flex justify-content-between  align-items-center  px-2"
                  >
                    <p className="mt-3">How does it work?</p>
                    {iconone ? (
                      <FaPlus className="plus-icon" />
                    ) : (
                      <FaMinus className="plus-icon" />
                    )}
                  </button>
                  {!iconone && (
                    <div className="faq-inner-div px-3 py-3 d-flex justify-content-center flex-column  align-items-center ">
                      <p>
                        TECH-AI is an AI-powered content production suite that
                        empowers creators with a powerful, customisable, and
                        user-friendly platform for bringing their ideas to life.
                      </p>

                      <p>
                        With a focus on granular control at every step of
                        content creation, we put creators at the centre of the
                        creative process by offering granular control at every
                        stage of generation, ensuring that AI enhances, rather
                        than replaces, human creative potential.
                      </p>
                      <p>
                        Our custom back-end delivers advancements in model fine
                        tuning, prompt adherence, training and inference speed,
                        and multi-image prompting functionality. We also address
                        common issues around image degradation and have
                        implemented a custom upscaling, with much more on the
                        way!
                      </p>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setIcontwo(!icontwo);
                    }}
                    className="faq-main-div d-flex justify-content-between  align-items-center  px-2"
                  >
                    <p className="mt-3">
                      How long does it take to download updates?
                    </p>
                    {icontwo ? (
                      <FaPlus className="plus-icon" />
                    ) : (
                      <FaMinus className="plus-icon" />
                    )}
                  </button>
                  {!icontwo && (
                    <div className="faq-inner-div px-3 py-3 d-flex  flex-column justify-content-center  align-items-center ">
                      <p>
                        TECH-AI is an AI-powered content production suite that
                        empowers creators with a powerful, customisable, and
                        user-friendly platform for bringing their ideas to life.
                      </p>
                      <p>
                        With a focus on granular control at every step of
                        content creation, we put creators at the centre of the
                        creative process by offering granular control at every
                        stage of generation, ensuring that AI enhances, rather
                        than replaces, human creative potential.
                      </p>
                      <p>
                        Our custom back-end delivers advancements in model fine
                        tuning, prompt adherence, training and inference speed,
                        and multi-image prompting functionality. We also address
                        common issues around image degradation and have
                        implemented a custom upscaling, with much more on the
                        way!
                      </p>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setIconthree(!iconthree);
                    }}
                    className="faq-main-div d-flex justify-content-between  align-items-center  px-2"
                  >
                    <p className="mt-3">
                      Do I need a designer to use this Admin Theme?
                    </p>
                    {iconthree ? (
                      <FaPlus className="plus-icon" />
                    ) : (
                      <FaMinus className="plus-icon" />
                    )}
                  </button>
                  {!iconthree && (
                    <div className="faq-inner-div px-3 py-3 d-flex justify-content-center flex-column  align-items-center ">
                      <p>
                        TECH-AI is an AI-powered content production suite that
                        empowers creators with a powerful, customisable, and
                        user-friendly platform for bringing their ideas to life.
                      </p>
                      <p>
                        With a focus on granular control at every step of
                        content creation, we put creators at the centre of the
                        creative process by offering granular control at every
                        stage of generation, ensuring that AI enhances, rather
                        than replaces, human creative potential.
                      </p>
                      <p>
                        Our custom back-end delivers advancements in model fine
                        tuning, prompt adherence, training and inference speed,
                        and multi-image prompting functionality. We also address
                        common issues around image degradation and have
                        implemented a custom upscaling, with much more on the
                        way!
                      </p>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setIconfour(!iconfour);
                    }}
                    className="faq-main-div d-flex justify-content-between  align-items-center  px-2"
                  >
                    <p className="mt-3">
                      What do I need to do to start selling?
                    </p>
                    {iconfour ? (
                      <FaPlus className="plus-icon" />
                    ) : (
                      <FaMinus className="plus-icon" />
                    )}
                  </button>
                  {!iconfour && (
                    <div className="faq-inner-div flex-column px-3 py-3 d-flex justify-content-center  align-items-center ">
                      <p>
                        TECH-AI is an AI-powered content production suite that
                        empowers creators with a powerful, customisable, and
                        user-friendly platform for bringing their ideas to life.
                      </p>
                      <p>
                        With a focus on granular control at every step of
                        content creation, we put creators at the centre of the
                        creative process by offering granular control at every
                        stage of generation, ensuring that AI enhances, rather
                        than replaces, human creative potential.
                      </p>
                      <p>
                        Our custom back-end delivers advancements in model fine
                        tuning, prompt adherence, training and inference speed,
                        and multi-image prompting functionality. We also address
                        common issues around image degradation and have
                        implemented a custom upscaling, with much more on the
                        way!
                      </p>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setIconfive(!iconfive);
                    }}
                    className="faq-main-div d-flex justify-content-between  align-items-center  px-2"
                  >
                    <p className="mt-3">How much does Extended license cost?</p>
                    {iconfive ? (
                      <FaPlus className="plus-icon" />
                    ) : (
                      <FaMinus className="plus-icon" />
                    )}
                  </button>
                  {!iconfive && (
                    <div className="faq-inner-div px-3 py-3 d-flex justify-content-center flex-column  align-items-center ">
                      <p>
                        TECH-AI is an AI-powered content production suite that
                        empowers creators with a powerful, customisable, and
                        user-friendly platform for bringing their ideas to life.
                      </p>
                      <p>
                        With a focus on granular control at every step of
                        content creation, we put creators at the centre of the
                        creative process by offering granular control at every
                        stage of generation, ensuring that AI enhances, rather
                        than replaces, human creative potential.
                      </p>
                      <p>
                        Our custom back-end delivers advancements in model fine
                        tuning, prompt adherence, training and inference speed,
                        and multi-image prompting functionality. We also address
                        common issues around image degradation and have
                        implemented a custom upscaling, with much more on the
                        way!
                      </p>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setIconsix(!iconsix);
                    }}
                    className="faq-main-div d-flex justify-content-between  align-items-center  px-2"
                  >
                    <p className="mt-3">What platforms are compatible?</p>
                    {iconsix ? (
                      <FaPlus className="plus-icon" />
                    ) : (
                      <FaMinus className="plus-icon" />
                    )}
                  </button>
                  {!iconsix && (
                    <div className="faq-inner-div px-3 py-3 d-flex flex-column  justify-content-center  align-items-center ">
                      <p>
                        TECH-AI is an AI-powered content production suite that
                        empowers creators with a powerful, customisable, and
                        user-friendly platform for bringing their ideas to life.
                      </p>
                      <p>
                        With a focus on granular control at every step of
                        content creation, we put creators at the centre of the
                        creative process by offering granular control at every
                        stage of generation, ensuring that AI enhances, rather
                        than replaces, human creative potential.
                      </p>
                      <p>
                        Our custom back-end delivers advancements in model fine
                        tuning, prompt adherence, training and inference speed,
                        and multi-image prompting functionality. We also address
                        common issues around image degradation and have
                        implemented a custom upscaling, with much more on the
                        way!
                      </p>
                    </div>
                  )}
                  
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

export default Pricing;
