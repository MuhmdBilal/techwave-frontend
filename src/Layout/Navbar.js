import React from "react";
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
// import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi";
// import styles from "../styles/Home.module.css";
// import { WagmiConfig } from "wagmi";
// import { arbitrum, mainnet } from "viem/chains";

// 1. Get projectId
const projectId = "57c3ed3f7633af987eda789d503edfee"
const chains = [
  {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com',
  },
  {
    chainId: 42161,
    name: 'Arbitrum',
    currency: 'ETH',
    explorerUrl: 'https://arbiscan.io',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
  },
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

// 3. Create modal
createWeb3Modal({
  ethersConfig,
  chains,
  projectId,
  enableAnalytics: true,
  themeMode: 'dark',
  // themeVariables: {
  //   '--w3m-color-mix': '#00BB7F',
  //   '--w3m-color-mix-strength': 40
  // }
});
const Navbar = ({ toggleSidebar, showSidebar }) => {
  // const projectId = "57c3ed3f7633af987eda789d503edfee";

  // // 2. Create wagmiConfig
  // const metadata = {
  //   name: "web3-modal-setup",
  //   description: "Web3 Modal Example",
  // };

  // const chains = [mainnet, arbitrum];
  // const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

  // // 3. Create modal
  // createWeb3Modal({ wagmiConfig, projectId, chains });

  // const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
  //   useState(false);
  // const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

  // const closeAll = () => {
  //   setIsNetworkSwitchHighlighted(false);
  //   setIsConnectHighlighted(false);
  // };
  return (
    <div className="col-lg-9 navbar-p order-lg-2 bg-black position-absolute order-1 ">
      <div className="row">
        <div className="col-11 mx-auto ">
          <nav class="navbar navbar-h navbar-expand-lg navbar-dark bg-black">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Connect-Wallet
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
                className={`collapse navbar-collapse${
                  showSidebar ? " show" : ""
                }`}
                id="navbarNav"
              >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                  </li>
                </ul>
                <w3m-button />
                {/* <WagmiConfig config={wagmiConfig}>
                  <header>
                    <div
                      className={styles.backdrop}
                      style={{
                        opacity:
                          isConnectHighlighted || isNetworkSwitchHighlighted
                            ? 1
                            : 0,
                      }}
                    />
                    <div className={styles.header}>
                      <div className={styles.buttons}>
                        <div
                          onClick={closeAll}
                          className={`${styles.highlight} ${
                            isNetworkSwitchHighlighted
                              ? styles.highlightSelected
                              : ``
                          }`}
                        >
                          <w3m-network-button />
                        </div>
                        <div
                          onClick={closeAll}
                          className={`${styles.highlight} ${
                            isConnectHighlighted ? styles.highlightSelected : ``
                          }`}
                        >
                          <w3m-button />
                        </div>
                      </div>
                    </div>
                  </header>
                </WagmiConfig> */}
                {/* <button className="connect-btn d-lg-block d-none px-3">
                Connect Wallet
              </button> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
