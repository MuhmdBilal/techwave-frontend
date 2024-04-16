import React from "react";
import "./Pricing.css";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/Sidebar";
import { useWeb3ModalState } from "@web3modal/ethers5/react";
import { USDTAbi, USDTaddress } from "../../utils/usdtContract";
import Web3 from "web3";
import { toast } from "react-toastify";
import axios from "axios";
const Pricing = ({
  handleLinkClick,
  showSidebar,
  toggleSidebar,
  setCredit,
  credit,
}) => {
  // const provider = "https://data-seed-prebsc-1-s1.binance.org:8545";
  const web3 = new Web3(window.ethereum);
  const [iconone, setIconone] = useState(true);
  const [icontwo, setIcontwo] = useState(true);
  const [iconthree, setIconthree] = useState(true);
  const [iconfour, setIconfour] = useState(true);
  const [iconfive, setIconfive] = useState(true);
  const [iconsix, setIconsix] = useState(true);
  const [iconseven, setIconseven] = useState(true);
  const [paymentMethod15, setPaymentMethod15] = useState("");
  const [paymentMethodError15, setPaymentMethodError15] = useState(false);
  const [paymentMethodLoading15, setPaymentMethodLoading15] = useState(false);
  const [paymentMethod20, setPaymentMethod20] = useState("");
  const [paymentMethodError20, setPaymentMethodError20] = useState(false);
  const [paymentMethodLoading20, setPaymentMethodLoading20] = useState(false);
  const [paymentMethod30, setPaymentMethod30] = useState("");
  const [paymentMethodError30, setPaymentMethodError30] = useState(false);
  const [paymentMethodLoading30, setPaymentMethodLoading30] = useState(false);
  const [paymentMethod40, setPaymentMethod40] = useState("");
  const [paymentMethodError40, setPaymentMethodError40] = useState(false);
  const [paymentMethodLoading40, setPaymentMethodLoading40] = useState(false);
  const getToken = localStorage.getItem("token");
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
  const integrateContract = () => {
    const minting_Contract = new web3.eth.Contract(USDTAbi, USDTaddress);
    return minting_Contract;
  };
  function getBNBRate() {
    return fetch("https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT")
      .then((response) => response.json())
      .then((data) => parseFloat(data.price));
  }

  function calculateBNBAmount(packageAmount, bnbRate) {
    return packageAmount / bnbRate;
  }
  async function checkBNBBalance() {
    const accounts = await web3.eth.getAccounts();
    const userAddress = accounts[0];
    const balance = await web3.eth.getBalance(userAddress);
    return web3.utils.fromWei(balance, "ether");
  }
  async function transferBNB(amount, recipientAddress) {
    const accounts = await web3.eth.getAccounts();
    const userAddress = accounts[0];
    const txData = {
      from: userAddress,
      to: recipientAddress,
      value: web3.utils.toWei(amount.toString(), "ether"),
    };
    return web3.eth.sendTransaction(txData);
  }


  const handleBuy15 = async (num) => {
    try {
      if (!paymentMethod15) {
        setPaymentMethodError15(true);
        return;
      }
      const accounts = await web3.eth.getAccounts();
      let userAddress = accounts[0];
      if (paymentMethod15 == "usdt") {
        setPaymentMethodLoading15(true);
        if (userAddress) {
          let contract = integrateContract();
          let price = web3.utils.toWei(num.toString(), "ether");
          let recipient = "0x6A35f74Bc3785a1cb9E729f9a16D2840b2Dc18Ac";
          let transfer = await contract.methods
            .transfer(recipient, price)
            .send({
              from: userAddress,
            });
          if (transfer) {
            const object = {
              payment_method: paymentMethod15,
              payment: num,
              fromAddress: transfer?.from,
              transactionHash: transfer?.transactionHash,
              token: 50,
            };
            const response = await axios.post(
              `${process.env.REACT_APP_API_URL}/api/auth/pricing`,
              object,
              {
                headers: {
                  Authorization: `Bearer ${getToken}`,
                },
              }
            );
            if (response) {
              let responseCredit = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/auth/get-credit`,
                {
                  headers: {
                    Authorization: `Bearer ${getToken}`,
                  },
                }
              );
              setCredit(responseCredit?.data?.result);
              toast.success("Transaction successful!");
              setPaymentMethodLoading15(false);
            }
          }
        } else {
          toast.error("Please Wallet connect first!");
          setPaymentMethodLoading15(false);
        }
      } else if (paymentMethod15 == "ethereum") {
        setPaymentMethodLoading15(true);
        if (userAddress) {
          const bnbRate = await getBNBRate();
          const bnbAmount = calculateBNBAmount(num, bnbRate);
          const userBalance = await checkBNBBalance();
          if (userBalance >= bnbAmount) {
            const recipientAddress =
              "0x6A35f74Bc3785a1cb9E729f9a16D2840b2Dc18Ac";
            let transfers = await transferBNB(bnbAmount, recipientAddress);
            if (transfers) {
              const object = {
                payment_method: paymentMethod15,
                payment: num,
                fromAddress: transfers?.from,
                transactionHash: transfers?.transactionHash,
                token: 50,
              };
              const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/auth/pricing`,
                object,
                {
                  headers: {
                    Authorization: `Bearer ${getToken}`,
                  },
                }
              );
              if (response) {
                let responseCredit = await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/auth/get-credit`,
                  {
                    headers: {
                      Authorization: `Bearer ${getToken}`,
                    },
                  }
                );
                setCredit(responseCredit?.data?.result);
                toast.success("Transaction successful!");
                setPaymentMethodLoading15(false);
              }
            }
          } else {
            toast.error("Insufficient BNB balance.");
            setPaymentMethodLoading15(false);
          }
        } else {
          toast.error("Please Wallet connect first!");
          setPaymentMethodLoading15(false);
        }
      }
    } catch (e) {
      console.log("e", e);
      setPaymentMethodLoading15(false);
    }
  };
  const handleBuy20 = async (num) => {
    try {
      if (!paymentMethod20) {
        setPaymentMethodError20(true);
        return;
      }
      const accounts = await web3.eth.getAccounts();
      let userAddress = accounts[0];
      if (paymentMethod20 == "usdt") {
        setPaymentMethodLoading20(true);
        if (userAddress) {
          let contract = integrateContract();
          let price = web3.utils.toWei(num.toString(), "ether");
          let recipient = "0x6A35f74Bc3785a1cb9E729f9a16D2840b2Dc18Ac";
          let transfer = await contract.methods
            .transfer(recipient, price)
            .send({
              from: userAddress,
            });
          if (transfer) {
            const object = {
              payment_method: paymentMethod20,
              payment: num,
              fromAddress: transfer?.from,
              transactionHash: transfer?.transactionHash,
              token: 100,
            };
            const response = await axios.post(
              `${process.env.REACT_APP_API_URL}/api/auth/pricing`,
              object,
              {
                headers: {
                  Authorization: `Bearer ${getToken}`,
                },
              }
            );
            if (response) {
              let responseCredit = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/auth/get-credit`,
                {
                  headers: {
                    Authorization: `Bearer ${getToken}`,
                  },
                }
              );
              setCredit(responseCredit?.data?.result);
              toast.success("Transaction successful!");
              setPaymentMethodLoading20(false);
            }
          }
        } else {
          toast.error("Please Wallet connect first!");
          setPaymentMethodLoading20(false);
        }
      } else if (paymentMethod20 == "ethereum") {
        setPaymentMethodLoading20(true);
        if (userAddress) {
          const bnbRate = await getBNBRate();
          const bnbAmount = calculateBNBAmount(num, bnbRate);
          const userBalance = await checkBNBBalance();
          if (userBalance >= bnbAmount) {
            const recipientAddress =
              "0x6A35f74Bc3785a1cb9E729f9a16D2840b2Dc18Ac";
            let transfers = await transferBNB(bnbAmount, recipientAddress);
            if (transfers) {
              const object = {
                payment_method: paymentMethod20,
                payment: num,
                fromAddress: transfers?.from,
                transactionHash: transfers?.transactionHash,
                token: 100,
              };
              const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/auth/pricing`,
                object,
                {
                  headers: {
                    Authorization: `Bearer ${getToken}`,
                  },
                }
              );
              if (response) {
                let responseCredit = await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/auth/get-credit`,
                  {
                    headers: {
                      Authorization: `Bearer ${getToken}`,
                    },
                  }
                );
                setCredit(responseCredit?.data?.result);
                toast.success("Transaction successful!");
                setPaymentMethodLoading20(false);
              }
            }
          } else {
            toast.error("Insufficient BNB balance.");
            setPaymentMethodLoading20(false);
          }
        } else {
          toast.error("Please Wallet connect first!");
          setPaymentMethodLoading20(false);
        }
      }
    } catch (e) {
      console.log("e", e);
      setPaymentMethodLoading20(true);
    }
  };
  const handleBuy30 = async (num) => {
    try {
      if (!paymentMethod30) {
        setPaymentMethodError30(true);
        return;
      }
      const accounts = await web3.eth.getAccounts();
      let userAddress = accounts[0];
      if (paymentMethod30 == "usdt") {
        setPaymentMethodLoading30(true)
        if (userAddress) {
          let contract = integrateContract();
          let price = web3.utils.toWei(num.toString(), "ether");
          let recipient = "0x6A35f74Bc3785a1cb9E729f9a16D2840b2Dc18Ac";
          let transfer = await contract.methods
            .transfer(recipient, price)
            .send({
              from: userAddress,
            });
          if (transfer) {
            const object = {
              payment_method: paymentMethod30,
              payment: num,
              fromAddress: transfer?.from,
              transactionHash: transfer?.transactionHash,
              token: 150,
            };
            const response = await axios.post(
              `${process.env.REACT_APP_API_URL}/api/auth/pricing`,
              object,
              {
                headers: {
                  Authorization: `Bearer ${getToken}`,
                },
              }
            );
            if (response) {
              let responseCredit = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/auth/get-credit`,
                {
                  headers: {
                    Authorization: `Bearer ${getToken}`,
                  },
                }
              );
              setCredit(responseCredit?.data?.result);
              toast.success("Transaction successful!");
              setPaymentMethodLoading30(false);
            }
          }
        } else {
          toast.error("Please Wallet connect first!");
          setPaymentMethodLoading30(false);
        }
      } else if (paymentMethod30 == "ethereum") {
        setPaymentMethodLoading30(true);
        if (userAddress) {
          const bnbRate = await getBNBRate();
          const bnbAmount = calculateBNBAmount(num, bnbRate);
          const userBalance = await checkBNBBalance();
          if (userBalance >= bnbAmount) {
            const recipientAddress =
              "0x6A35f74Bc3785a1cb9E729f9a16D2840b2Dc18Ac";
            let transfers = await transferBNB(bnbAmount, recipientAddress);
            if (transfers) {
              const object = {
                payment_method: paymentMethod30,
                payment: num,
                fromAddress: transfers?.from,
                transactionHash: transfers?.transactionHash,
                token: 150,
              };
              const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/auth/pricing`,
                object,
                {
                  headers: {
                    Authorization: `Bearer ${getToken}`,
                  },
                }
              );
              if (response) {
                let responseCredit = await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/auth/get-credit`,
                  {
                    headers: {
                      Authorization: `Bearer ${getToken}`,
                    },
                  }
                );
                setCredit(responseCredit?.data?.result);
                toast.success("Transaction successful!");
                setPaymentMethodLoading30(false);
              }
            }
          } else {
            toast.error("Insufficient BNB balance.");
            setPaymentMethodLoading30(false);
          }
        } else {
          toast.error("Please Wallet connect first!");
          setPaymentMethodLoading30(false);
        }
      }
    } catch (e) {
      console.log("e", e);
      setPaymentMethodLoading30(false)
    }
  };
  const handleBuy40 = async (num) => {
    try {
      if (!paymentMethod40) {
        setPaymentMethodError40(true);
        return;
      }
      const accounts = await web3.eth.getAccounts();
      let userAddress = accounts[0];
      if (paymentMethod40 == "usdt") {
        setPaymentMethodLoading40(true)
        if (userAddress) {
          let contract = integrateContract();
          let price = web3.utils.toWei(num.toString(), "ether");
          let recipient = "0x6A35f74Bc3785a1cb9E729f9a16D2840b2Dc18Ac";
          let transfer = await contract.methods
            .transfer(recipient, price)
            .send({
              from: userAddress,
            });
          if (transfer) {
            const object = {
              payment_method: paymentMethod40,
              payment: num,
              fromAddress: transfer?.from,
              transactionHash: transfer?.transactionHash,
              token: 200,
            };
            const response = await axios.post(
              `${process.env.REACT_APP_API_URL}/api/auth/pricing`,
              object,
              {
                headers: {
                  Authorization: `Bearer ${getToken}`,
                },
              }
            );
            if (response) {
              let responseCredit = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/auth/get-credit`,
                {
                  headers: {
                    Authorization: `Bearer ${getToken}`,
                  },
                }
              );
              setCredit(responseCredit?.data?.result);
              toast.success("Transaction successful!");
              setPaymentMethodLoading40(false);
            }
          }
        } else {
          toast.error("Please Wallet connect first!");
          setPaymentMethodLoading40(false);
        }
      } else if (paymentMethod40 == "ethereum") {
        setPaymentMethodLoading40(true)
        if (userAddress) {
          const bnbRate = await getBNBRate();
          const bnbAmount = calculateBNBAmount(num, bnbRate);
          const userBalance = await checkBNBBalance();
          if (userBalance >= bnbAmount) {
            const recipientAddress =
              "0x6A35f74Bc3785a1cb9E729f9a16D2840b2Dc18Ac";
            let transfers = await transferBNB(bnbAmount, recipientAddress);
            if (transfers) {
              const object = {
                payment_method: paymentMethod40,
                payment: num,
                fromAddress: transfers?.from,
                transactionHash: transfers?.transactionHash,
                token: 200,
              };
              const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/auth/pricing`,
                object,
                {
                  headers: {
                    Authorization: `Bearer ${getToken}`,
                  },
                }
              );
              if (response) {
                let responseCredit = await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/auth/get-credit`,
                  {
                    headers: {
                      Authorization: `Bearer ${getToken}`,
                    },
                  }
                );
                setCredit(responseCredit?.data?.result);
                toast.success("Transaction successful!");
                setPaymentMethodLoading40(false);
              }
            }
          } else {
            toast.error("Insufficient BNB balance.");
            setPaymentMethodLoading40(false);
          }
        } else {
          toast.error("Please Wallet connect first!");
          setPaymentMethodLoading40(false);
        }
      }
    } catch (e) {
      console.log("e", e);
      setPaymentMethodLoading40(false)
    }
  };
  return (
    <>
      <Sidebar handleLinkClick={handleLinkClick} showSidebar={showSidebar} />
      <Navbar
        toggleSidebar={toggleSidebar}
        showSidebar={showSidebar}
        setCredit={setCredit}
        credit={credit}
      />
      <div className="col-lg-10 home-h order-lg-3 mt-5">
        <div className="mt-5 bg-black">
          <div className="p-4">
            <div className="bg-img-div">
              <div className="mt-5 px-5">
                <h2 className="pt-4">WELCOME</h2>
                <div className="d-flex">
                  <h2>TO</h2> <h2 className="ms-3 bg-home-heading">TECHWAVE</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className=" text-center">
              <h3 className="mt-3">Simple Pricing, Unbeatable Value</h3>
              <h6>
                Usage-based payment. Pay as you go with your wallet. Take
                control of everything.
              </h6>
            </div>
            <div className="row mt-4">
              <div className="col-11 px-3 mx-auto">
                <div className="row">
                  <div className="col-lg-3 mt-2">
                    <div className="price-card  pt-4 m-2 text-center card">
                      <h3>Personal</h3>
                      <h1>$15</h1>
                      <p>50 Tokens</p>
                      <select
                        className="arrow-icon-btn-price p-1 ms-3 me-3"
                        onChange={handlePaymentMethodChange15}
                        value={paymentMethod15}
                      >
                        <option defaultChecked>Select payment method</option>
                        <option value="usdt">USDT</option>
                        <option value="ethereum">Ethereum</option>
                      </select>
                      {paymentMethodError15 && !paymentMethod15 && (
                        <span className="text-danger">
                          Please select payment method
                        </span>
                      )}
                      <div>
                        <button
                          className="buy-btn-price mb-3 mt-3"
                          onClick={() => handleBuy15(15)}
                          disabled={paymentMethodLoading15}
                        >
                          {paymentMethodLoading15 ? (
                            <>
                              <span
                                class="spinner-border spinner-border-sm"
                                aria-hidden="true"
                              ></span>
                              <span class="ms-2" role="status">
                                Loading...
                              </span>
                            </>
                          ) : (
                            "BUY"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3  mt-2">
                    <div className="price-card m-2 pt-4 text-center card">
                      <h3>Premium</h3>
                      <h1>$20</h1>
                      <p>100 Tokens</p>
                      <select
                        className="arrow-icon-btn-price p-1 mb-3 ms-3 me-3"
                        onChange={handlePaymentMethodChange20}
                        value={paymentMethod20}
                      >
                        <option defaultChecked>Select payment method</option>
                        <option value="usdt">USDT</option>
                        <option value="ethereum">Ethereum</option>
                      </select>
                      {paymentMethodError20 && !paymentMethod20 && (
                        <span className="text-danger">
                          Please select payment method
                        </span>
                      )}
                      <div>
                        <button
                          className="buy-btn-price mb-2 mt-2"
                          onClick={() => handleBuy20(20)}
                          disabled={paymentMethodLoading20}
                        >
                          {paymentMethodLoading20 ? (
                            <>
                              <span
                                class="spinner-border spinner-border-sm"
                                aria-hidden="true"
                              ></span>
                              <span class="ms-2" role="status">
                                Loading...
                              </span>
                            </>
                          ) : (
                            "BUY"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3  mt-2">
                    <div className="price-card m-2 pt-4 text-center card">
                      <h3>Enterprice</h3>
                      <h1>$30</h1>
                      <p>150 Tokens</p>
                      <select
                        className="arrow-icon-btn-price p-1 mb-3 ms-3 me-3"
                        onChange={handlePaymentMethodChange30}
                        value={paymentMethod30}
                      >
                        <option defaultChecked>Select payment method</option>
                        <option value="usdt">USDT</option>
                        <option value="ethereum">Ethereum</option>
                      </select>
                      {paymentMethodError30 && !paymentMethod30 && (
                        <span className="text-danger">
                          Please select payment method
                        </span>
                      )}
                      <div>
                        <button
                          className="buy-btn-price mb-2 mt-2"
                          onClick={() => handleBuy30(30)}
                          disabled={paymentMethodLoading30}
                        >
                          {paymentMethodLoading30 ? (
                            <>
                              <span
                                class="spinner-border spinner-border-sm"
                                aria-hidden="true"
                              ></span>
                              <span class="ms-2" role="status">
                                Loading...
                              </span>
                            </>
                          ) : (
                            "BUY"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3  mt-2">
                    <div className="price-card m-2  pt-4 text-center card">
                      <h3>Diamond</h3>
                      <h1>$40</h1>
                      <p>200 Tokens</p>
                      <select
                        className="arrow-icon-btn-price p-1 mb-3 ms-3 me-3"
                        onChange={handlePaymentMethodChange40}
                        value={paymentMethod40}
                      >
                        <option defaultChecked>Select payment method</option>
                        <option value="usdt">USDT</option>
                        <option value="ethereum">Ethereum</option>
                      </select>
                      {paymentMethodError40 && !paymentMethod40 && (
                        <span className="text-danger">
                          Please select payment method
                        </span>
                      )}
                      <div>
                        <button
                          className="buy-btn-price mb-2 mt-2"
                          onClick={() => handleBuy40(40)}
                          disabled={paymentMethodLoading40}
                        >
                          {paymentMethodLoading40 ? (
                            <>
                              <span
                                class="spinner-border spinner-border-sm"
                                aria-hidden="true"
                              ></span>
                              <span class="ms-2" role="status">
                                Loading...
                              </span>
                            </>
                          ) : (
                            "BUY"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row py-5">
                  <div className="col-12 pt-5  px-2 text-center mx-auto">
                    <h1>Frequently Asked Questions</h1>
                    <h6 className="mb-5">
                      Many support queries and technical questions will already
                      be answered
                    </h6>
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
                          user-friendly platform for bringing their ideas to
                          life.
                        </p>

                        <p>
                          With a focus on granular control at every step of
                          content creation, we put creators at the centre of the
                          creative process by offering granular control at every
                          stage of generation, ensuring that AI enhances, rather
                          than replaces, human creative potential.
                        </p>
                        <p>
                          Our custom back-end delivers advancements in model
                          fine tuning, prompt adherence, training and inference
                          speed, and multi-image prompting functionality. We
                          also address common issues around image degradation
                          and have implemented a custom upscaling, with much
                          more on the way!
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
                          user-friendly platform for bringing their ideas to
                          life.
                        </p>
                        <p>
                          With a focus on granular control at every step of
                          content creation, we put creators at the centre of the
                          creative process by offering granular control at every
                          stage of generation, ensuring that AI enhances, rather
                          than replaces, human creative potential.
                        </p>
                        <p>
                          Our custom back-end delivers advancements in model
                          fine tuning, prompt adherence, training and inference
                          speed, and multi-image prompting functionality. We
                          also address common issues around image degradation
                          and have implemented a custom upscaling, with much
                          more on the way!
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
                          user-friendly platform for bringing their ideas to
                          life.
                        </p>
                        <p>
                          With a focus on granular control at every step of
                          content creation, we put creators at the centre of the
                          creative process by offering granular control at every
                          stage of generation, ensuring that AI enhances, rather
                          than replaces, human creative potential.
                        </p>
                        <p>
                          Our custom back-end delivers advancements in model
                          fine tuning, prompt adherence, training and inference
                          speed, and multi-image prompting functionality. We
                          also address common issues around image degradation
                          and have implemented a custom upscaling, with much
                          more on the way!
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
                          user-friendly platform for bringing their ideas to
                          life.
                        </p>
                        <p>
                          With a focus on granular control at every step of
                          content creation, we put creators at the centre of the
                          creative process by offering granular control at every
                          stage of generation, ensuring that AI enhances, rather
                          than replaces, human creative potential.
                        </p>
                        <p>
                          Our custom back-end delivers advancements in model
                          fine tuning, prompt adherence, training and inference
                          speed, and multi-image prompting functionality. We
                          also address common issues around image degradation
                          and have implemented a custom upscaling, with much
                          more on the way!
                        </p>
                      </div>
                    )}
                    <button
                      onClick={() => {
                        setIconfive(!iconfive);
                      }}
                      className="faq-main-div d-flex justify-content-between  align-items-center  px-2"
                    >
                      <p className="mt-3">
                        How much does Extended license cost?
                      </p>
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
                          user-friendly platform for bringing their ideas to
                          life.
                        </p>
                        <p>
                          With a focus on granular control at every step of
                          content creation, we put creators at the centre of the
                          creative process by offering granular control at every
                          stage of generation, ensuring that AI enhances, rather
                          than replaces, human creative potential.
                        </p>
                        <p>
                          Our custom back-end delivers advancements in model
                          fine tuning, prompt adherence, training and inference
                          speed, and multi-image prompting functionality. We
                          also address common issues around image degradation
                          and have implemented a custom upscaling, with much
                          more on the way!
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
                          user-friendly platform for bringing their ideas to
                          life.
                        </p>
                        <p>
                          With a focus on granular control at every step of
                          content creation, we put creators at the centre of the
                          creative process by offering granular control at every
                          stage of generation, ensuring that AI enhances, rather
                          than replaces, human creative potential.
                        </p>
                        <p>
                          Our custom back-end delivers advancements in model
                          fine tuning, prompt adherence, training and inference
                          speed, and multi-image prompting functionality. We
                          also address common issues around image degradation
                          and have implemented a custom upscaling, with much
                          more on the way!
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
