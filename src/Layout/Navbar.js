import React, { useEffect } from "react";
import { useState } from "react";
import "./Navbar.css";
import {
  createWeb3Modal,
  defaultConfig,
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
  useWeb3ModalTheme,
} from '@web3modal/ethers5/react';
import axios from "axios";
import { toast } from "react-toastify";

const projectId = "57c3ed3f7633af987eda789d503edfee"
const chains = [
  {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com',
  },
  // {
  //   chainId: 42161,
  //   name: 'Arbitrum',
  //   currency: 'ETH',
  //   explorerUrl: 'https://arbiscan.io',
  //   rpcUrl: 'https://arb1.arbitrum.io/rpc',
  // },
  // {
  //   chainId: 97,
  //   name: 'BSC Testnet',
  //   currency: 'BNB',
  //   explorerUrl: 'https://explorer.binance.org/smart-testnet',
  //   rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  // },
];

const ethersConfig = defaultConfig({
  metadata: {
    name: 'Web3Modal',
    description: 'Web3Modal Laboratory',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  },
  defaultChainId: 1,
  rpcUrl: 'https://cloudflare-eth.com',
});
createWeb3Modal({
  ethersConfig,
  chains,
  projectId,
  enableAnalytics: true,
  themeMode: 'dark',
});
const Navbar = ({ toggleSidebar, showSidebar,setCredit,credit }) => {
  const { loading, address } = useWeb3ModalState();
  const getToken = localStorage.getItem("token");
  const getCredit = async()=>{
    try{
      if(getToken){
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/get-credit`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        })
        setCredit(response?.data?.result)
      }else {
        // toast.error("token is missing , please signIn again");
      }
    }catch(e){
      console.log("e", e);
    }
  }
  useEffect(()=>{
    getCredit()
  },[])
  return (
    <div className="col-lg-10 navbar-p order-lg-2 position-absolute order-1" >
      <div className="row" >
        <div className="col-11 mx-auto">
          <nav class="navbar navbar-h navbar-expand-lg navbar-dark" >
            <div class="container-fluid">
              <a class="navbar-brand mt-3 mb-3" href="#">
                {/* Connect-Wallet */}
              </a>
              <button
                onClick={toggleSidebar}
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse mt-3 mb-3 ${
                  showSidebar ? " show" : ""
                }`}
                id="navbarNav"
              >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                     {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                  </li>
                </ul>
                <div className="me-2 box-style">
                  <span className="text-white"> Credit: {credit?.credit}</span>
                </div>
                <w3m-button />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
