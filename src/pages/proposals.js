import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/proposals.scss';
import DaoButton from '../component/daobutton';
import Medium from "../assets/img/medium.png"
import Telegram from "../assets/img/telegram.png"
import Twitter from "../assets/img/twitter.png"
import BackButton from "../assets/img/backbutton.png"
import Bird from "../assets/img/bird.png"
import Berserkers from "../assets/img/berserkers.png"
import Eargle from "../assets/img/eargle.png"


export default function Proposals() {

  return (
    <div className='proposals'>

      <div className='content'>

        <div className='menu-box'>
          <Link to='/create'><DaoButton content='CREATE PROPOSALS' /></Link>
          <Link to='/pending'><DaoButton content='PENDING PROPOSALS' /></Link>
          <Link to='/closed'><DaoButton content='CLOSED PROPOSALS' /></Link>
        </div>

        <div className='pic-box'>
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

    </div >
  )
}
