import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/pending.scss';
import DaoButton from '../component/daobutton';
import Medium from "../assets/img/medium.png"
import Telegram from "../assets/img/telegram.png"
import Twitter from "../assets/img/twitter.png"
import BackButton from "../assets/img/backbutton.png"
import Bird from "../assets/img/bird.png"
import Berserkers from "../assets/img/berserkers.png"
import Progress from "../component/progress"


export default function Pending() {

  return (
    <div className='pending'>

      <div className='content'>

        <div className='left-box'>
          <div className='pending-proposal'>
            <div className='title'>PENDING PROPOSAL</div>
            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.</div>

            <div className='scroll'>

              <div className='card-container'>
                <div className='card-title'>PROPOSAL NAME OF THR PROJECT</div>
                <div className='card-content'>
                  <div className='line'>
                    <Progress percent={80} content='APPROVE' />
                    <div className='progress-text'>RESULT<span style={{ fontFamily: 'Roboto' }}>:</span> APPROVED</div>
                  </div>
                  <div className='line'>
                    <Progress percent={20} content='REJECT' />
                    <div className='progress-text'>CLOSED DATE<span style={{ fontFamily: 'Roboto' }}>:</span> 070012022</div>
                  </div>
                  <div className='progress-text-mobile first'>RESULT<span style={{ fontFamily: 'Roboto' }}>:</span> APPROVED</div>
                  <div className='progress-text-mobile'>CLOSED DATE<span style={{ fontFamily: 'Roboto' }}>:</span> 070012022</div>
                </div>

              </div>

              <div className='card-container'>
                <div className='card-title'>PROPOSAL NAME OF THR PROJECT</div>
                <div className='card-content'>
                  <div className='line'>
                    <Progress percent={80} content='APPROVE' />
                    <div className='progress-text'>RESULT<span style={{ fontFamily: 'Roboto' }}>:</span> APPROVED</div>
                  </div>
                  <div className='line'>
                    <Progress percent={20} content='REJECT' />
                    <div className='progress-text'>CLOSED DATE<span style={{ fontFamily: 'Roboto' }}>:</span> 070012022</div>
                  </div>
                  <div className='progress-text-mobile first'>RESULT<span style={{ fontFamily: 'Roboto' }}>:</span> APPROVED</div>
                  <div className='progress-text-mobile'>CLOSED DATE<span style={{ fontFamily: 'Roboto' }}>:</span> 070012022</div>
                </div>
              </div>

              <div className='card-container'>
                <div className='card-title'>PROPOSAL NAME OF THR PROJECT</div>
                <div className='card-content'>
                  <div className='line'>
                    <Progress percent={80} content='APPROVE' />
                    <div className='progress-text'>RESULT<span style={{ fontFamily: 'Roboto' }}>:</span> APPROVED</div>
                  </div>
                  <div className='line'>
                    <Progress percent={20} content='REJECT' />
                    <div className='progress-text'>CLOSED DATE<span style={{ fontFamily: 'Roboto' }}>:</span> 070012022</div>
                  </div>
                  <div className='progress-text-mobile first'>RESULT<span style={{ fontFamily: 'Roboto' }}>:</span> APPROVED</div>
                  <div className='progress-text-mobile'>CLOSED DATE<span style={{ fontFamily: 'Roboto' }}>:</span> 070012022</div>
                </div>
              </div>

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
        <div className='link-box'>
          <a><img alt='' src={Medium} className='link-icon'></img></a>
          <a><img alt='' src={Telegram} className='link-icon'></img></a>
          <a><img alt='' src={Twitter} className='link-icon'></img></a>
        </div>
      </div>

    </div>
  )
}
