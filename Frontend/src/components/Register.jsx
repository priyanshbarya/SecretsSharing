import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import URL from "../url.js";
import GoogleButton from 'react-google-button'
import { Oval } from "react-loader-spinner";




const Register = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password || !confirmPassword) {
      toast.warn("Please Fill All Fields", {
        autoClose: 2000,
        theme: "dark",
      });
      setLoading(false);

      return;
    }

    if (password !== confirmPassword) {
      toast.warn("Password Do Not Match", {
        autoClose: 2000,
        theme: "dark",
      });
      setLoading(false);

      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(URL+
        "/api/user",
        { email, password },
        config
      );
      toast.success("User Registered", {
        autoClose: 2000,
        theme: "dark",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);

      navigate("/landing");
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 2000,
        theme: "dark",
      });
      setLoading(false);

      return;
    }
  };

  return (
    <div className="login-part">
      <h2>Sign Up</h2>
      <div className="not-a-member">
        <p>Already registered?</p>
        <p
          onClick={() => {
            setLogin(0);
          }}
        >
          Sign In
        </p>
      </div>
      <form id="register" action="" onSubmit={saveUser}>
        <label htmlFor="email" className="e-label">
          Email
        </label>
        <input
          placeholder="Your Email"
          name="email"
          id="email"
          autoComplete="off"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="e-label">
          Password
        </label>
        <input
          placeholder="New Password"
          name="password"
          id="password"
          autoComplete="off"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password" className="e-label">
          Confirm Password
        </label>
        <input
          placeholder="Confirm New Password"
          name="confirmPassword"
          id="confirmPassword"
          autoComplete="off"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="btn-container">
          <button className="btn-login">{loading?<Oval
              visible={true}
              height="20px"
              width="20px"
              
              color="#4fa94d"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass="loader"
              />:
            <p>Sign Up</p>
            }</button>
        </div>
      </form>
      <div className="btn-container">
        <p>OR</p>
        <GoogleButton
            label='Sign up with Google'
            style={{backgroundColor: "rgb(59 31 60)",width: "100%"}}
            onClick={() => { console.log('Google button clicked') }}
          />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
