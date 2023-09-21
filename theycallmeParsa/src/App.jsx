import React from "react";
import { Routes, Route } from "react-router-dom";
import Pass from "./components/log_in_page/Pass";
import NewPass from "./components/log_in_page/NewPass";
import ComfirmEmail from "./components/log_in_page/ComfirmEmail";
import SignUp from "./components/log_in_page/SignUp";
import Pannel from "./components/pannel/Pannel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pass />} />
        <Route path="/change" element={<ComfirmEmail />} />
        <Route path="/new-pass" element={<NewPass />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Pannel />} />
      </Routes>
    </div>
  );
}

export default App;
