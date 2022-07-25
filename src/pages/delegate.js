import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/delegate.scss';
import Medium from "../assets/img/medium.png"
import Telegram from "../assets/img/telegram.png"
import Twitter from "../assets/img/twitter.png"
import BackButton from "../assets/img/backbutton.png"
import Bird from "../assets/img/bird.png"
import Berserkers from "../assets/img/berserkers.png"
import Eargle from "../assets/img/eargle.png"
import DelegateVote from "../assets/img/delegate.png"


export default function Delegate() {

  return (
    <div className='delegate'>

      <div className='content'>

        <div className='left-box'>
          <div className='delegate-vote'>

            <div className='title'>PENDING PROPOSAL</div>
            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus. </div>
            <input className='name-input' defaultValue='What is the name of the project?'></input>
            <div className='delegate-box'><img className='delegate' src={DelegateVote} alt=''></img></div>
            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus. </div>
            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus. </div>

          </div>
        </div>

        <div className='right-box'>

          <div className='text-card-container'>
            <div className='text-card'>
              <div className='card-title'>Delegate your vote</div>
              <div className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus. </div>
            </div>
          </div>

          <img className='bird' src={Bird} alt=''></img>
          <img className='berserkers' src={Berserkers} alt=''></img>

        </div>
      </div>

      <div className='footer'>
        <Link to='/'><img alt='' src={BackButton} className='backbutton'></img></Link>
        <img className='eargle' src={Eargle} alt=''></img>
        <div className='link-box'>
          <a><img alt='' src={Medium} className='link-icon'></img></a>
          <a><img alt='' src={Telegram} className='link-icon'></img></a>
          <a><img alt='' src={Twitter} className='link-icon'></img></a>
        </div>
      </div>

    </div>
  )
}
