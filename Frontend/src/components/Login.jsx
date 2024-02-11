import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import GoogleButton from "react-google-button";
import { Oval } from "react-loader-spinner";

const Login = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const URL = process.env.REACT_APP_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.warn("Please Fill All Fields", {
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

      const { data } = await axios.post(
        URL + "/api/user/login",
        { email, password },
        config
      );
      toast.success("Sucessfully Logged In", {
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

  const responseGoogle = () => {
    window.open(URL + "/auth/google", "_self");
  };

  return (
    <div className="login-part">
      <h2>Sign In</h2>
      <div className="not-a-member">
        <p>Not registered yet?</p>
        <p
          onClick={() => {
            setLogin(1);
          }}
        >
          Sign Up
        </p>
      </div>
      <form id="login" action="" onSubmit={handleSubmit}>
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
          placeholder="Your Password"
          name="password"
          id="password"
          autoComplete="off"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="btn-container">
          <button className="btn-login">
            {loading ? (
              <Oval
                visible={true}
                height="20px"
                width="20px"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass="loader"
              />
            ) : (
              <p>Sign in</p>
            )}
          </button>
        </div>
      </form>
      <div className="btn-container">
        <p>OR</p>
        <GoogleButton
          style={{
            backgroundColor: "rgb(59 31 60)",
            width: "100%",
            borderRadius: "5px",
          }}
          onClick={responseGoogle}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
