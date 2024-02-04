import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import URL from "../url.js";
import ProfilePic from "../assets/ProfilePic.png";

const CreatePost = () => {
  const [secret, setSecret] = useState("");

  const postSecret = async () => {

    if(!secret){
      toast.warn("Please Post Valid Secret", {
        autoClose: 2000,
        theme: "dark",
      });
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
      toast.success("Secret Posted", {
        autoClose: 2000,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        autoClose: 2000,
        theme: "dark",
      });
      return;
    }
  };
  return (
    <div className="create-container">
      <div className="create-img">
        <img src={ProfilePic} alt="" />
      </div>
      <div className="create-editor">
        <textarea
          id="review-text"
          placeholder="Share your Secrets Anonymously"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          rows={1}
          cols={120}
        />
      </div>
      <button onClick={postSecret}>Post</button>
    </div>
  );
};

export default CreatePost;
