import React, { useEffect, useState } from "react";
import "../styles/Landing.css";
import Navbar from "../components/Navbar";
import Feeds from "../components/Feeds";
import CreatePost from "../components/CreatePost";
import { ThreeDots } from "react-loader-spinner";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const Landing = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  const URL = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [navigate]);

  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const response = axios.get(URL + "/secrets", {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        });
        setSecrets((await response).data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setLoader(false);
  }, [secrets, URL]);

  return (
    <div className="container">
      <Navbar />
      <ToastContainer />

      <div className="feed-portal">
        <div className="feed-side"></div>
        <div className="feed-mid">
          <CreatePost userData={userData} />
          {loader ? (
            <ThreeDots
              visible={true}
              height="200px"
              width="200px"
              color="#4fa94d"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            secrets.map((e, ind) => {
              return (
                <Feeds
                  key={ind}
                  name={e._id}
                  time={e.updatedAt}
                  secret={e.secret}
                />
              );
            })
          )}
        </div>
        <div className="feed-side"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
