import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/stake.scss';
import Medium from "../assets/img/medium.png"
import Telegram from "../assets/img/telegram.png"
import Twitter from "../assets/img/twitter.png"
import BackButton from "../assets/img/backbutton.png"
import Bird from "../assets/img/bird.png"
import Berserkers from "../assets/img/berserkers.png"
import Eargle from "../assets/img/eargle.png"
import Approve from "../assets/img/stake-approve.png"
import WithDraw from "../assets/img/withdraw.png"


export default function Stake() {

  return (
    <div className='stake'>

      <div className='content'>

        <div className='left-box'>
          <div className='stake-hati'>
            <div className='title'>STAKE HATI</div>
            <div className='text'>Balance: 1000</div>
            <div className='balance-box'>
              <input className='balance-box-input'></input>
              <div className='max-number'>1000</div>
            </div>
            <div className='stake-picbox'><img className='stake-pic' src={Approve} alt=''></img></div>

            <div className='text'>HATI Balance: 1000 HATI</div>
            <input className='balance-input' ></input>
            <div className='stake-picbox'><img className='stake-pic' src={WithDraw} alt=''></img></div>
          </div>
        </div>

        <div className='right-box'>
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
