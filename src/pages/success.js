import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/success.scss';
import Medium from "../assets/img/medium.png"
import Telegram from "../assets/img/telegram.png"
import Twitter from "../assets/img/twitter.png"
import BackButton from "../assets/img/backbutton.png"
import Bird from "../assets/img/bird.png"
import Berserkers from "../assets/img/berserkers.png"
import Approve from "../assets/img/approve.png"
import Circle from "../assets/img/circle.png"
import Eargle from "../assets/img/eargle.png"


export default function Success() {

  const [percent, setPercent] = useState(80)

  return (
    <div className='success'>

      <div className='content'>

        <div className='left-box'>
          <div className='success-proposal'>
            <div className='title'>tHE SUCCESS OF PROPOSAL</div>
            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.</div>
            <div className='text'>Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.</div>
            <input className='channel-input' defaultValue='Provide all channel linked with project.'></input>
            <input className='link-input' defaultValue='Provide link to audited token contract.'></input>

            <div className='token-percentage-box'>
              <div className='token-percentage-title'>Provide the percentage of the token.</div>
              <div className='token-percentage'>
                <div className='percentage-line' style={{ width: `${percent}%` }}>
                  <img className='circle' src={Circle} alt=''></img>
                </div>
              </div>
              <div className='percentage-number'>
                <div>0.25<span style={{ fontFamily: 'Roboto' }}>%</span></div>
                <div>0.5<span style={{ fontFamily: 'Roboto' }}>%</span></div>
                <div>1.0<span style={{ fontFamily: 'Roboto' }}>%</span></div>
              </div>

            </div>

            <div className='approve-box'><img className='approve' alt='' src={Approve}></img></div>
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
