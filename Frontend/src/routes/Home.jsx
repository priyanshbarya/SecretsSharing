import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Login from "../components/Login";
import Register from "../components/Register";
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom";
const Home = () => {

  const navigate=useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate('/landing');
    }
  }, [navigate]);

  const [login, setLogin]=useState(0);

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Secrets Share</h1>
        <h4>Share your secrets Anonymously</h4>
      </div>
      <div className="login-register">
        {
          !login?<Login setLogin={setLogin}/>:<Register setLogin={setLogin}/>
        }
      </div>
      <Footer/>

    </div>
  );
};

export default Home;
