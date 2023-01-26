require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/pyUd298A5XjfEkzMfchQcHqMaZf9QFar",
      accounts: [
        "a6f826b988c6012146dabfc5b43f5b3e6baac048c82b4f7cc35152a27d43ef5e",
      ],
    },
  },
};
