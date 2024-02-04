import React, { useEffect, useState } from "react";
import "../styles/Landing.css";
import Navbar from "../components/Navbar";
import Feeds from "../components/Feeds";
import CreatePost from "../components/CreatePost";

import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import URL from "../url.js";
import axios from "axios";

const Landing = () => {
  const navigate=useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      navigate('/');
    }
  }, [navigate]);
  const [secrets, setSecrets] = useState([]);

  useEffect(()=>{
      const fetchData = async()=>{
        try{
          const response=axios.get(URL+'/secrets');
          setSecrets((await response).data);

        }catch(error){
          console.log(error);
        }
      };
      fetchData();
  },[secrets]);
  console.log(secrets)
  return (
    <div className="container">
      <Navbar />
      <ToastContainer/>

      <div className="feed-portal">
        <div className="feed-side"></div>
        <div className="feed-mid">
          <CreatePost />
          {secrets.map((e, ind) => {
            return (
              <Feeds key={ind} name={e._id} time={e.updatedAt} secret={e.secret} />
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
