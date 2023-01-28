import WalletBalance from "./WalletBalance";
import { useEffect, useState } from "react";

import { ethers } from "ethers";
import Azuki from "../artifacts/contracts/Azuki.sol/Azuki.json";
import ReactDOM from "react-dom";
import Nav from "./Nav";

const contractAddress = "0x6578aeC3A11fbcFDC3C21B64CbD15487AcA3ac50";

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();
// get the smart contract
const contract = new ethers.Contract(contractAddress, Azuki.abi, signer);

function Mint() {
  const [totalMinted, setTotalMinted] = useState(1);
  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    console.log(parseInt(count));
    setTotalMinted(parseInt(count));
  };

  return (
    <div>
      <Nav />
      <div className="flex justify-between">
        <div className="w-3/4">
          <h1 className="mx-4 px-3 mt-10 text-4xl lg:text-5xl xl:text-7xl 2xl:text-7xl font-extrabold max-w-7xl">
            ALREADY MINTED AZUKI'S
            <span className="text-[#CE8600] opacity-20 ">//</span>
          </h1>
          <div className="w-3/4 flex justify-start items-center mx-20 my-2 flex-wrap">
            {Array(totalMinted + 1)
              .fill(0)
              .map((_, i) => (
                <div key={i}>
                  <NFTImage tokenId={i} getCount={getCount} />
                </div>
              ))}
          </div>
        </div>
        {/* <div className="lg:mr-20 3xl:mr-80">
          <NFTImage tokenId={totalMinted + 1} getCount={getCount} />
        </div> */}
      </div>
    </div>
  );
}

function NFTImage({ tokenId, getCount }) {
  console.log(tokenId);
  const contentId = "QmXeCdMmyXigBDtGjrHG1ni8pPyqAW1mNLfDweATTXmpnV";
  const metadataURI = `${contentId}/${tokenId}.json`;
  const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;
  const [isMinted, setIsMinted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    console.log(result);
    setIsMinted(result);
  };

  const mintToken = async () => {
    const connection = contract.connect(signer);
    const addr = connection.address;
    const result = await contract.payToMint(addr, metadataURI, {
      value: ethers.utils.parseEther("0.05"),
    });

    setLoading(true);
    await result.wait();
    setLoading(false);
    getMintedStatus();
    getCount();
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
    alert(uri);
  }
  return (
    <div className="mt-20">
      {isMinted ? (
        <div className="mx-2">
          <img className="mask mask-squircle w-36 rounded" src={imageURI}></img>
        </div>
      ) : (
        <div className="flex justify-center mx-20 items-center">
          <div className="card card-compact w-64 bg-base-100 shadow-xl">
            <figure>
              <img src="/img/azuki-mintnft.gif" alt="mint-img" />
            </figure>
            <div className="card-body">
              <p>Mint your very own Azuki</p>
              <div className="card-actions justify-end">
                <button
                  onClick={mintToken}
                  className={`${
                    loading && "loading disabled:"
                  } btn font-extrabold btn-outline hover:bg-opacity-90 text-red-600 hover:text-white label-text-alt tracking-widest hover:bg-red-600 hover:border-none transition-colors px-8 py-1 border-red-600`}
                >
                  Mint
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mint;
