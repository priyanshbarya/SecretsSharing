import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logout from '../assets/Logout.png'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

const Navbar = () => {
    const [color,setColor]=useState(false);
    const changeColor=()=>{
      if(window.scrollY>=25){
        setColor(true);
      }
      else{
        setColor(false);
      }
    };
    window.addEventListener("scroll",changeColor);
    const navigate = useNavigate();
    const handleSubmit = () => {
      confirmAlert({
        message: 'Are you sure to Logout',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              localStorage.removeItem("userInfo");
              navigate("/");
            }
          },
          {
            label: 'No',
          }
        ]
      });
    };
  return (
    <div className={color? "nav-header nav-header-bg":"nav-header"}>
        <Link to={"/landing"}>
            <h1>Secrets Share</h1>
        </Link>
        <div onClick={handleSubmit} className='logout-icon'>
          <h3>Logout</h3>
          <img src={Logout} alt="logout" />
        </div>
    </div>
  )
}

export default Navbar;