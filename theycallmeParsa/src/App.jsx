import React from "react";
import { Routes, Route } from "react-router-dom";
import Pass from "./components/password&user/Pass";
import NewPass from "./components/setnewdata/NewPass";
import Pannel from "./components/pannel/Pannel";
import SignUp from "./components/signup/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pass />} />
        <Route path="/change" element={<NewPass />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Pannel />} />
      </Routes>
    </div>
  );
}

export default App;
