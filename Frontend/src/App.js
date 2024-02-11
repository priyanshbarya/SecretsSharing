import React from "react";
import "./index.css";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Landing from "./routes/Landing";
import StoreProfile from "./routes/StoreProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/store-profile/:userData" element={<StoreProfile />} />
      </Routes>
    </>
  );
}

export default App;
