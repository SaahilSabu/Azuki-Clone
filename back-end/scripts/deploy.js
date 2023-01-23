const hre = require("hardhat");

async function main() {
  const Azuki = await hre.ethers.getContractFactory("Azuki");
  const azuki = await Azuki.deploy();

  await azuki.deployed();

  console.log("Azuki contact deployed to: ", azuki.address);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
