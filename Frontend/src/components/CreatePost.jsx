import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import URL from "../url.js";
import ProfilePic from "../assets/ProfilePic.png";
import { Oval } from "react-loader-spinner";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  const [secret, setSecret] = useState("");
  const [loading,setLoading]=useState(false);
  const postSecret = async () => {
    setLoading(true);

    if(!secret){
      toast.warn("Please Post Valid Secret", {
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
      await axios.post(
        URL + "/secrets",
        {
          secret: secret,
        },
        config
      );
      setLoading(false);

      toast.success("Secret Posted", {
        autoClose: 2000,
        theme: "dark",
      });
    } catch (error) {
      // console.log(error);
      toast.error(error.message||error.response.data.message, {
        autoClose: 2000,
        theme: "dark",
      });
      setLoading(false);

      return;
    }
  };
  return (
    <div className="create-container">
      <p className="creat-post-heading">Share your Secret Here</p>
      {/* <div className="create-img">
        <img src={ProfilePic} alt="" />
      </div> */}

      <div className="create-editor">
      <ReactQuill theme="snow" value={secret} onChange={setSecret} />
        {/* <textarea
          id="review-text"
          placeholder="Share your Secrets Anonymously"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          rows={1}
          cols={120}
        /> */}
      </div>
      <button onClick={postSecret}>{loading?<Oval
        visible={true}
        height="25px"
        width="25px"
        color="grey"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
  />:<p>Post</p>}</button>
    </div>
  );
};

export default CreatePost;
