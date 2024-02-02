import React, { useEffect } from "react";
import "../styles/Landing.css";
import Navbar from "../components/Navbar";
import Feeds from "../components/Feeds";
import CreatePost from "../components/CreatePost";
import appded from "./ara.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";


const Landing = () => {
  const navigate=useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      navigate('/');
    }
  }, [navigate]);
  
  return (
    <div className="container">
      <Navbar />
      <div className="feed-portal">
        <div className="feed-side"></div>
        <div className="feed-mid">
          <CreatePost />
          {appded.map((e, ind) => {
            return (
              <Feeds key={ind} name={e.name} time={e.time} secret={e.secret} />
            );
          })}
        </div>
        <div className="feed-side"></div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Landing;
