import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/claim.scss';
import Eargle from "../assets/img/eargle.png"
import Medium from "../assets/img/medium.png"
import Telegram from "../assets/img/telegram.png"
import Twitter from "../assets/img/twitter.png"
import BackButton from "../assets/img/backbutton.png"
import Boss from "../assets/img/boss.png"
import Avatar from "../assets/img/avatar.png"
import ClaimToken from "../assets/img/claim.png"
import ClaimTokenWindow from "../component/claimtokenwindow"


export default function Claim({account}) {

  const [openClaim, setOpenClaim] = useState(false);

  

  return (
    <div className='claim'>

      <div className='content'>

        <div className='left-box'>
          <img className='avatar' alt='' src={Avatar}></img>
          <div className='userinfo-box'>
            <div className='username-box'>
              <div className='username'>USERNAME 32</div>
              <div className='edit'>Edit Username</div>
            </div>
            <img alt='' src={ClaimToken} className='claimtoken' onClick={() => { setOpenClaim(true) }}></img>
          </div>
        </div>
        <div className='right-box'>
          <img className='boss' src={Boss} alt=''></img>
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

      {openClaim ? <ClaimTokenWindow setOpenClaim={setOpenClaim} account={account} />
        : null
      }

    </div>
  )
}
