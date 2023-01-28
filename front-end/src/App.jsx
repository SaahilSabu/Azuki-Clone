import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./Home";
import MintPage from "./MintPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/mint" element={<MintPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
