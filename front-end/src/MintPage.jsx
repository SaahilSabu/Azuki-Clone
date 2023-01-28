import React from "react";
import Mint from "./components/Mint";
import Install from "./components/Install";

const MintPage = () => {
  if (window.ethereum) {
    return <Mint />;
  } else {
    return <Install />;
  }
};

export default MintPage;
