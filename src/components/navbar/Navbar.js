import React from 'react';
import './Navbar.css'
import p from './p.png'
import {IoIosArrowDropdown} from 'react-icons/io'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo"><img src={p}></img></div>
      <div className="buttons">
        <button className="nav-button"> <BsFillPatchCheckFill/>  XYZEnterprises Pvt.Ltd</button>
        <div className="dropdown">

          <button style={{marginRight:'2rem'}} className="nav-button"><IoIosArrowDropdown /></button>
         
        </div>
      </div>
    </div>
  );
}

export default Navbar;
