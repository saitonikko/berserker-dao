import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/vote.scss';
import Medium from "../assets/img/medium.png"
import Telegram from "../assets/img/telegram.png"
import Twitter from "../assets/img/twitter.png"
import BackButton from "../assets/img/backbutton.png"
import Bird from "../assets/img/bird.png"
import Berserkers from "../assets/img/berserkers.png"
import Eargle from "../assets/img/eargle.png"
import Accept from "../assets/img/accept.png"
import Reject from "../assets/img/reject.png"
import ProgressVoting from '../component/progress-voting';
import Cancel from "../assets/img/cancel.png"


export default function Vote({account}) {

  const [state, setState] = useState('active')
  const visitWebsite = () => {
    window.location.href = '/vote'
  }

  return (
    <div className='vote'>

      <div className='content'>

        <div className='left-box'>
          <div className='vote-proposal'>
            <div className='title'>VOTING PROPOSAL</div>
            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.</div>

            <div className='card-container'>
              <div className='proposal-name'>PROPOSAL NAME OF THR PROJECT</div>
              <div className='proposal-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sit augue cursus nam nisl amet amet venenatis purus.</div>
              <ProgressVoting percent={80} content='APPROVE' />
              <ProgressVoting percent={20} content='REJECT' />
            </div>
            <div className='vote-box'>
              <img src={Accept} className='vote' alt=''></img>
              <img src={Reject} className='vote' alt=''></img>
            </div>

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
