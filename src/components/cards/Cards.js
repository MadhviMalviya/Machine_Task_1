import React from 'react';
import './Cards.css';
import Rectangle from '../rectanglebox/Rectangle';
import {BsArrowRight} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import { TiCloudStorageOutline} from 'react-icons/ti'
import {AiOutlineMail   } from 'react-icons/ai'

function Cards() {
  return (
    <div className="heading">
    
      <h1>Choose a plan that's just right for you!</h1>
      <div className='btn-right'>
      <div  className='roundbtn' > <span className='bg-blue' > Monthly</span><span>  Annualy</span></div></div>
      <div className="cardContainer">
        <div className="card">
          <div className="underline">
            <h2> Basic</h2>
            <p style={{ fontSize: 'larger' }}> $9.99/mo</p>
            <button className="btn1">Get Started <BsArrowRight/> </button>
          </div>
          <p>What you'll get</p>
          <ul>
            <li> <BiUser/>Upto 25 users</li>
            <li><TiCloudStorageOutline/> Upto 25 gb Storage</li>
            <li> <AiOutlineMail/> Email support</li>
          </ul>
          <h6>EXPLORE FEATURES</h6>
        </div>

        <div className="card">
          <div className="underline">
            <h2>Standard </h2>
            <p style={{ fontSize: 'larger' }}> $99.99/mo</p>
            <button className="btn2">Get Started <BsArrowRight/></button>
          </div>
          <p>What you'll get</p>
          <ul>
            <li> <BiUser/> Upto 50 users</li>
            <li> <TiCloudStorageOutline/> Upto 60gb Storage</li>
            <li> <AiOutlineMail/> Email+chat support</li>
          </ul>
          <h6>EXPLORE FEATURES</h6>
        </div>

        <div className="card">
          <div className="underline">
            <h2> Premium</h2>
            <p style={{ fontSize: 'larger' }}> $199.99/mo</p>
            <button className="btn3">Get Started <BsArrowRight/></button>
          </div>
          <p>What you'll get</p>
          <ul>
            <li>  <BiUser/> Upto 75 users</li>
            <li><TiCloudStorageOutline/> Upto 100gb Storage</li>
            <li><AiOutlineMail/> Email+chat+WhatsApp support</li>
          </ul>
          <h6>EXPLORE FEATURES</h6>
        </div>
      </div>
      <Rectangle/>
      <p style={{color:' #007acc', textAlign:'end'}} >Some unique features are provided as add-ons with individual plans for each feature</p>
    </div>
    
  );
}

export default Cards;
