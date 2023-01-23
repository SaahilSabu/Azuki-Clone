const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Azuki", () => {
  it("should mint and transfer an NFT to someone", async () => {
    const Azuki = await ethers.getContractFactory("Azuki");
    const azuki = await Azuki.deploy();

    await azuki.deployed();

    const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const metadataURI = "cid/test.png";

    let balance = await azuki.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newMintToken = await azuki.payToMint(recipient, metadataURI, {
      value: ethers.utils.parseEther("0.01"),
    });
    await newMintToken.wait();
    balance = await azuki.balanceOf(recipient);
    expected(balance).to.equal(1);
    expect(await azuki.isContentOwned(metadataURI).to.equal(true));
  });
});
