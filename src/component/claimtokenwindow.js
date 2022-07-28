import React, { useState, useEffect } from 'react';
import { getClaimContract } from "../utils/contractFunctions";
import "../assets/style/component.scss"
import Close from "../assets/img/close.png"
import RightArrow from "../assets/img/right-arrow.png"
import LeftArrow from "../assets/img/left-arrow.png"
import TokenImg from "../assets/img/token-img.png"
import ClaimToken from "../assets/img/claim-token.png"
import WholeBoss from "../assets/img/whole.png"


export default function ClaimTokenWindow({ setOpenClaim, account }) {

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const claimTokens = async () => {
    if (!account) {
      alert("Please connect wallet!")
      return;
    }
    setIsBtnDisabled(true);
    try {
      const contract = await getClaimContract();
      console.log(contract);
      await contract.methods.claimUSDC().send({ from: account });
      alert("Successfully claimed!");
    } catch (err) {
      alert("Something went wrong!");
      console.log(err);
    }
    setIsBtnDisabled(false);
  }

  // useEffect(() => {
  //   if (account) {
  //     setIsBtnDisabled(false);
  //   } else {
  //     setIsBtnDisabled(true);
  //   }
  // }, [account])

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
        <button className="claim-btn" onClick={claimTokens} disabled={isBtnDisabled}>
          <img src={ClaimToken} alt='' className='claim-token'></img>
        </button>
        <img src={WholeBoss} alt='' className='whole-boss'></img>
      </div>
    </div>
  )
}
