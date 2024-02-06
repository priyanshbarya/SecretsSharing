import React from 'react'
import ProfilePic from "../assets/ProfilePic.png"
import Moment from 'react-moment';
import 'moment-timezone';

const Feeds = (props) => {
  const date = new Date(props.time);
  const data= props.secret;
  return (
    <div className='feeds-container'>
        <div className='feed-profile'>
            <img src={ProfilePic} alt="" />
            <p>{"Secret"+props.name.substr(19)} </p>
            <p><Moment fromNow>{date}</Moment></p>

        </div>
        <div className='secret-container'>
            <div dangerouslySetInnerHTML={{__html:data}}/>
        </div>
    </div>
  )
}

export default Feeds