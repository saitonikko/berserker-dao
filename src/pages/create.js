import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/create.scss';
import Medium from "../assets/img/medium.png"
import Telegram from "../assets/img/telegram.png"
import Twitter from "../assets/img/twitter.png"
import BackButton from "../assets/img/backbutton.png"
import Bird from "../assets/img/bird.png"
import Berserkers from "../assets/img/berserkers.png"
import Upload from "../assets/img/upload.png"
import Submit from "../assets/img/submit.png"
import Eargle from "../assets/img/eargle.png"


export default function Create() {

  return (
    <div className='create'>

      <div className='content'>

        <div className='left-box'>
          <div className='submit-proposal'>
            <div className='title'>HOW TO SUBMIT A PROPOSAL</div>
            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.</div>
            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.</div>
            <input className='name-input' defaultValue='What is the name of the project?'></input>
            <textarea className='description-input' defaultValue='Provide a short description of the project.'></textarea>
            <div className='provide-box'>
              <div>Please provide an investment deck or white paper.</div>
              <input type='file' id='fileupload' style={{ display: 'none' }}></input>
              <label htmlFor='fileupload' className='upload' ><img alt='' src={Upload}></img></label>
            </div>
            <div className='submit-box'><Link to='/success'><img className='submit' alt='' src={Submit}></img></Link></div>
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
