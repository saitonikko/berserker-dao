import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProposalContract, getNFTBalance } from '../utils/contractFunctions';
import { TOKEN_ADDR } from "../contracts/address";
import '../assets/style/create.scss';
import Medium from "../assets/img/medium.png"
import Telegram from "../assets/img/telegram.png"
import Twitter from "../assets/img/twitter.png"
import BackButton from "../assets/img/backbutton.png"
import Bird from "../assets/img/bird.png"
import Berserkers from "../assets/img/berserkers.png"
import Submit from "../assets/img/submit.png"
import Eargle from "../assets/img/eargle.png"


export default function Create({ account }) {

  const [NFTBalance, setNFTBalance] = useState(0);

  const [proposalName, setProposalName] = useState('')
  const [proposalDescription, setProposalDescription] = useState('')
  const [proposalValue, setProposalValue] = useState('')
  const [proposalTargetAddress, setProposlTargetAddress] = useState('')
  const [proposalTokenAddress, setProposalTokenAddress] = useState(null);

  const createProposal = async () => {
    if (!account) {
      alert('Please connect wallet!')
      return;
    }
    try {
      const contract = await getProposalContract();
      console.log(contract);
      await contract.methods.propose(proposalTokenAddress, proposalTargetAddress, `0x${(Number(proposalValue) * 1e6).toString(16)}`, proposalName, proposalDescription).send({ from: account });
      alert('Successfully submitted');
      window.location.href='/pending'
    } catch (err) {
      alert('Something went wrong!');
      console.log(err);
    }
  }

  useEffect(async () => {
    if (!account) return;
    const _NFTBalance = await getNFTBalance(account);
    console.log(_NFTBalance);
    setNFTBalance(_NFTBalance);
  }, [account])

  return (
    <div className='create'>

      {
        Number(NFTBalance) === 0
          ? <>
            <div className='content'>
              <div className='left-box'>
                <div className='avoid-proposal'>
                  <div className='title'>YOU HAVE NOT PERMISSION TO CREATE PROPOSAL!</div>
                </div>
              </div>

              <div className='right-box'>
                <img className='bird' src={Bird} alt=''></img>
                <img className='berserkers' src={Berserkers} alt=''></img>
              </div>
            </div>

            <div className='footer-avoid'>
              <Link to='/proposals'><img alt='' src={BackButton} className='backbutton'></img></Link>
              <img className='eargle' src={Eargle} alt=''></img>
              <div className='link-box'>
                <a><img alt='' src={Medium} className='link-icon'></img></a>
                <a><img alt='' src={Telegram} className='link-icon'></img></a>
                <a><img alt='' src={Twitter} className='link-icon'></img></a>
              </div>
            </div>
          </>
          : <>
            <div className='content'>
              <div className='left-box'>
                <div className='submit-proposal'>
                  <div className='title'>HOW TO SUBMIT A PROPOSAL</div>
                  <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.</div>
                  <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.</div>
                  <input className='name-input' placeholder='What is the name of the project?' onChange={(e) => setProposalName(e.target.value)}></input>
                  <textarea className='description-input' placeholder='Provide a short description of the project.' onChange={(e) => setProposalDescription(e.target.value)}></textarea>
                </div>
              </div>

              <div className='right-box'>
                <img className='bird' src={Bird} alt=''></img>
                <img className='berserkers' src={Berserkers} alt=''></img>
                <div className='right-absolute-box'>
                  <div className='create-proposal'>
                    <input className='proposal-value' placeholder='What is the value of the project?' onChange={(e) => setProposalValue(e.target.value)} ></input>
                    <input className='proposal-taget' placeholder='What is the address of the target?' onChange={(e) => setProposlTargetAddress(e.target.value)}></input>
                    <input className='token-address' placeholder='What is the address of the token?' onChange={(e) => setProposalTokenAddress(e.target.value)}></input>
                    <div className='submit-box' onClick={createProposal}><img className='submit' alt='' src={Submit}></img></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='footer'>
              <Link to='/proposals'><img alt='' src={BackButton} className='backbutton'></img></Link>
              <img className='eargle' src={Eargle} alt=''></img>
              <div className='link-box'>
                <a><img alt='' src={Medium} className='link-icon'></img></a>
                <a><img alt='' src={Telegram} className='link-icon'></img></a>
                <a><img alt='' src={Twitter} className='link-icon'></img></a>
              </div>
            </div>
          </>
      }

    </div>
  )
}
