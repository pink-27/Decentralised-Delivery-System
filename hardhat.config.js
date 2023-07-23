// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const GANACHE_PRIV_KEY="0xd1399086713f53139afd2670fdca79d58a32814d12f9dfbaf33ebc441d612788"
module.exports = {
  solidity: {
    version:  "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
        details: {
          yul: true,
          yulDetails: {
            stackAllocation: true,
            optimizerSteps: "dhfoDgvulfnTUtnIf"
          }
        }
      }
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [
        `0xd1399086713f53139afd2670fdca79d58a32814d12f9dfbaf33ebc441d612788`,
      ],
    }

  },
};