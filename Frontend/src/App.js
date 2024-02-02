import React from "react";
import "./index.css";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Landing from "./routes/Landing";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/landing" element={<Landing/>}/>
      </Routes>
    </>
  );
}

export default App;
