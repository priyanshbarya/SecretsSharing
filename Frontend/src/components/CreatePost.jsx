import React from 'react';
import ProfilePic from "../assets/ProfilePic.png"

const CreatePost = () => {


  return (
    <div className='create-container'>
        <div className='create-img'>
            <img src={ProfilePic} alt="" />
        </div>
        <div className='create-editor'>
        <textarea
            id="review-text"
            placeholder="Share your Secrets Anonymously"
            rows={1}
            cols={120}
        
        />
        </div>
        <button>Post</button>
    </div>
  )
}

export default CreatePost;