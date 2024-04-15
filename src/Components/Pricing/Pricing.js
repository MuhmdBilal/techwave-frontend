import React from "react";
import "./Pricing.css";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/Sidebar";

const Pricing = ({ handleLinkClick, showSidebar, toggleSidebar, setCredit, credit }) => {
  const [iconone, setIconone] = useState(true);
  const [icontwo, setIcontwo] = useState(true);
  const [iconthree, setIconthree] = useState(true);
  const [iconfour, setIconfour] = useState(true);
  const [iconfive, setIconfive] = useState(true);
  const [iconsix, setIconsix] = useState(true);
  const [iconseven, setIconseven] = useState(true);
  const [paymentMethod15, setPaymentMethod15] = useState('');
  const [paymentMethodError15, setPaymentMethodError15] = useState(false);
  const [paymentMethod20, setPaymentMethod20] = useState('');
  const [paymentMethodError20, setPaymentMethodError20] = useState(false);
  const [paymentMethod30, setPaymentMethod30] = useState('');
  const [paymentMethodError30, setPaymentMethodError30] = useState(false);
  const [paymentMethod40, setPaymentMethod40] = useState('');
  const [paymentMethodError40, setPaymentMethodError40] = useState(false);
  const handlePaymentMethodChange15 = (event) => {
    setPaymentMethod15(event.target.value);
  };
  const handlePaymentMethodChange20 = (event) => {
    setPaymentMethod20(event.target.value);
  };
  const handlePaymentMethodChange30 = (event) => {
    setPaymentMethod30(event.target.value);
  };
  const handlePaymentMethodChange40 = (event) => {
    setPaymentMethod40(event.target.value);
  };

  const handleBuy15 = (value) => {
    try {
      if (!paymentMethod15) {
        setPaymentMethodError15(true)
        return
      }
      if (paymentMethod15 == "usdt") {
        console.log("1111111111", paymentMethod15, value);

      } else if (paymentMethod15 == "ethereum") {
        console.log("222222222222", paymentMethod15, value);
      }
    } catch (e) {
      console.log("e", e);
    }
  }
  const handleBuy20 = (value) => {
    try {
      if (!paymentMethod20) {
        setPaymentMethodError20(true)
        return
      }
      if (paymentMethod15 == "usdt") {
        console.log("1111111111", paymentMethod15, value);

      } else if (paymentMethod15 == "ethereum") {
        console.log("222222222222", paymentMethod15, value);
      }
    } catch (e) {
      console.log("e", e);
    }
  }
  const handleBuy30 = (value) => {
    try {
      if (!paymentMethod30) {
        setPaymentMethodError30(true)
        return
      }
      if (paymentMethod15 == "usdt") {
        console.log("1111111111", paymentMethod15, value);

      } else if (paymentMethod15 == "ethereum") {
        console.log("222222222222", paymentMethod15, value);
      }
    } catch (e) {
      console.log("e", e);
    }
  }
  const handleBuy40 = (value) => {
    try {
      if (!paymentMethod40) {
        setPaymentMethodError40(true)
        return
      }
      if (paymentMethod15 == "usdt") {
        console.log("1111111111", paymentMethod15, value);

      } else if (paymentMethod15 == "ethereum") {
        console.log("222222222222", paymentMethod15, value);
      }
    } catch (e) {
      console.log("e", e);
    }
  }
  return (
    <>
      <Sidebar handleLinkClick={handleLinkClick} showSidebar={showSidebar} />
      <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} setCredit={setCredit}
        credit={credit} />
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
                      <select className="arrow-icon-btn-price p-1 ms-3 me-3"
                        onChange={handlePaymentMethodChange15}
                        value={paymentMethod15}
                      >
                        <option defaultChecked >Select payment method</option>
                        <option value="usdt">USDT</option>
                        <option value="ethereum">Ethereum</option>
                      </select>
                      {
                        paymentMethodError15 && !paymentMethod15 && (
                          <span className="text-danger">Please select payment method</span>
                        )
                      }
                      <div>
                        <button className="buy-btn-price mb-3 mt-3" onClick={() => handleBuy15(15)}>BUY</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3  mt-2">
                    <div className="price-card  pt-4 text-center card">
                      <h3>Premium</h3>
                      <h1>$20</h1>
                      <p>150 Tokens</p>
                      <select className="arrow-icon-btn-price p-1 mb-3 ms-3 me-3"
                        onChange={handlePaymentMethodChange20}
                        value={paymentMethod20}
                      >
                        <option defaultChecked >Select payment method</option>
                        <option value="usdt">USDT</option>
                        <option value="ethereum">Ethereum</option>
                      </select>
                      {
                        paymentMethodError20 && !paymentMethod20 && (
                          <span className="text-danger">Please select payment method</span>
                        )
                      }
                      <div>
                        <button className="buy-btn-price" onClick={() => handleBuy30(20)}>BUY</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3  mt-2">
                    <div className="price-card  pt-4 text-center card">
                      <h3>Enterprice</h3>
                      <h1>$30</h1>
                      <p>150 Tokens</p>
                      <select className="arrow-icon-btn-price p-1 mb-3 ms-3 me-3"
                        onChange={handlePaymentMethodChange30}
                        value={paymentMethod30}
                      >
                        <option defaultChecked >Select payment method</option>
                        <option value="usdt">USDT</option>
                        <option value="ethereum">Ethereum</option>
                      </select>
                      {
                        paymentMethodError30 && !paymentMethod30 && (
                          <span className="text-danger">Please select payment method</span>
                        )
                      }
                      <div>
                        <button className="buy-btn-price" onClick={() => handleBuy30(30)}>BUY</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3  mt-2">
                    <div className="price-card  pt-4 text-center card">
                      <h3>Diamond</h3>
                      <h1>$40</h1>
                      <p>150 Tokens</p>
                      <select className="arrow-icon-btn-price p-1 mb-3 ms-3 me-3"
                        onChange={handlePaymentMethodChange40}
                        value={paymentMethod40}
                      >
                        <option defaultChecked >Select payment method</option>
                        <option value="usdt">USDT</option>
                        <option value="ethereum">Ethereum</option>
                      </select>
                      {
                        paymentMethodError40 && !paymentMethod40 && (
                          <span className="text-danger">Please select payment method</span>
                        )
                      }
                      <div>
                        <button className="buy-btn-price" onClick={() => handleBuy40(40)}>BUY</button>
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
