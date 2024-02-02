import React from 'react'
import ProfilePic from "../assets/ProfilePic.png"

const Feeds = (props) => {

  return (
    <div className='feeds-container'>
        <div className='feed-profile'>
            <img src={ProfilePic} alt="" />
            <p>{props.name} </p>
            <p>{props.time}</p>

        </div>
        <div className='secret-container'>
            <p>{props.secret}</p>
        </div>
    </div>
  )
}

export default Feeds