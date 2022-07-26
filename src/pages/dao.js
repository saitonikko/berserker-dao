import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/dao.scss';
import DaoButton from '../component/daobutton';
import Medium from "../assets/img/medium.png"
import Telegram from "../assets/img/telegram.png"
import Twitter from "../assets/img/twitter.png"
import BackButton from "../assets/img/backbutton.png"
import Bird from "../assets/img/bird.png"
import Berserkers from "../assets/img/berserkers.png"
import Eargle from "../assets/img/eargle.png"


export default function Dao() {

  return (
    <div className='dao'>

      <div className='content'>

        <div className='menu-box'>
          <a href='https://telegram.org/'><DaoButton content='BERSERKER HATI' /></a>
          <Link to='/proposals'><DaoButton content='PROPOSALS' /></Link>
          <a href='http://Ribeswap.org'><DaoButton content='CENTRE OF TRADE' /></a>
          <Link to='/claim'><DaoButton content='CLAIM TOKENS' /></Link>
          <Link to='/stake'><DaoButton content='STAKING' /></Link>
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
