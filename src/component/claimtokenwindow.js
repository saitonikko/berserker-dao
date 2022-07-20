import React from 'react';
import "../assets/style/component.scss"
import Close from "../assets/img/close.png"
import RightArrow from "../assets/img/right-arrow.png"
import LeftArrow from "../assets/img/left-arrow.png"
import TokenImg from "../assets/img/token-img.png"
import ClaimToken from "../assets/img/claim-token.png"
import WholeBoss from "../assets/img/whole.png"


export default function ClaimTokenWindow({ setOpenClaim }) {
  return (
    <div className='claimtokenwinodw'>
      <div className='token-container'>

        <img className='close-icon' alt='' src={Close} onClick={() => { setOpenClaim(false) }}></img>
        <div className='title'>CLAIM YOUR TOKENS</div>
        <div className='toggle-token'>
          <img alt='' className='token-img' src={TokenImg}></img>
          <img alt='' src={LeftArrow} className='left-arrow'></img>
          <img alt='' src={RightArrow} className='right-arrow'></img>
        </div>
        <div className='user-name'>USERNAME 32</div>
        <div className='edit'>Edit Username</div>
        <img src={ClaimToken} alt='' className='claim-token'></img>
        <img src={WholeBoss} alt='' className='whole-boss'></img>
        
      </div>
    </div>
  )
}
