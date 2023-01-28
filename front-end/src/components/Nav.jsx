import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const Nav = () => {
  const [account, setAccount] = useState();

  useEffect(() => {
    const { ethereum } = window;
    ethereum.on("accountsChanged", (accounts) => {
      setAccount(accounts[0]);
    });
  }, []);

  const connect = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(account);
  };

  return (
    <div className="nav w-full top-0 p-4 max-w-7xl m-auto">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            className="p-2 bg-red-600 h-7 rounded"
            src="img/Azuki Logo White.svg"
            alt="Logo"
          />
        </div>
        <div>
          <ul className=" list-none flex uppercase opacity-80 text-xs font-Inconsolata">
            <li className="px-3 flex items-center rounded hover:bg-opacity-40 hover:bg-[#CE8600] cursor-pointer">
              world
            </li>
            <li className="px-3 rounded flex items-center hover:bg-opacity-40 hover:bg-[#CE8600] cursor-pointer">
              gallery
            </li>
            <li
              className="px-3 rounded flex items-center hover:bg-opacity-40 hover:bg-[#CE8600] cursor-pointer"
              onClick={() => connect()}
            >
              {account ? account.slice(0, 6) + "..." : "Connect"}
            </li>
            <li className="px-3 rounded flex items-center  cursor-pointer">
              <button className="btn font-extrabold btn-outline hover:bg-opacity-90 text-red-600 hover:text-white border-none label-text-alt tracking-widest hover:bg-red-600 hover:border-none transition-colors px-8 py-1 border-red-600">
              mint
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
