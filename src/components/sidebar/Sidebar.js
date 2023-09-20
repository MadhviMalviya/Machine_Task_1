import React from 'react';
import './Sidebar.css';
import a from './avatar.jpg'
import {MdDashboard} from 'react-icons/md'
import {GiThreeLeaves} from 'react-icons/gi'
import {BiSolidAddToQueue} from 'react-icons/bi'
import {LuMessagesSquare} from 'react-icons/lu'
import {BiSupport} from 'react-icons/bi'
import {RiLogoutCircleRLine} from 'react-icons/ri'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-box">
        <img src={a} alt="Avatar" className="avatar" />
        <div className="user-info">
          <h3>Madhvi Malviya</h3>
          <p>madhvi@gmail.com</p>
        </div>
      </div>
      <ul className="menu">
       
        <li  style={{backgroundColor:'skyblue',color:'white'}} className="menu-item"> <MdDashboard color='blue' /> Dashboard</li>
        <li className="menu-item"><GiThreeLeaves color='blue'/> Perks</li>
        <li className="menu-item"> <BiSolidAddToQueue color='blue'/> Addons  </li>
        <li className="menu-item"> <LuMessagesSquare color='blue'/> FAQ  </li>
        <li className="menu-item"> <BiSupport color='blue'/>  Support  </li>
      </ul>
      <div className="logout">
        <button> <RiLogoutCircleRLine/>  Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
