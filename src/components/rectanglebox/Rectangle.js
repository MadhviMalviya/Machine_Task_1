import React from 'react';
import './Rectangle.css';
import { BsArrowRight } from 'react-icons/bs'
import { BsCheck2All } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { TiCloudStorageOutline } from 'react-icons/ti'
import { AiOutlineMail } from 'react-icons/ai'

function Rectangle() {
  return (
    <div className="rectangleBoxMain">
      <div className="flexbox_1">
        <div>
          <button className="btn_1_1">Free Forever</button>
          <h2>Free Starter</h2>
          <p>The quickest and easiest way to try Protocols with basic functionalities</p>
          <button className="btn_1_2">Get Started <BsArrowRight /></button>
        </div>
        <div>
          <p>What you'll get:</p>
          <ul>
            <li> <BiUser /> Upto 8 Users</li>
            <li> <TiCloudStorageOutline /> Upto 3gb Storage</li>
            <li> <AiOutlineMail /> Email Support</li>
            <li> <BsCheck2All />Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director, and Team Management included</li>
          </ul>
        </div>
      </div>
      <div className="flexbox_2">
        <div className="flex1">
          <button className="btn_2_1">Let's Connect</button>
          <h2>Enterprise Plan</h2>
          <p>Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success</p>
          <button className="btn_2_2">Contact Us <BsArrowRight /></button>
        </div>
        <div className="flex1">
          <p>What you'll get:</p>
          <ul>
            <li>  <BiUser />More than 75 Users</li>
            <li> <TiCloudStorageOutline />Customization of all other features</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Rectangle;
