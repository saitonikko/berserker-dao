import React from 'react';
import "../assets/style/component.scss"
import Close from "../assets/img/close.png"
import ProgressPending from "../component/progress-pending"
import Audit from "../assets/img/audit.png"
import WhitePaper from "../assets/img/whitepaper.png"
import Site from "../assets/img/site.png"
import Deck from "../assets/img/deck.png"
import Social from "../assets/img/social.png"


export default function ClosedProposals({ setOpenWindow }) {
  return (
    <div className='closedproposalwindow'>
      <div className='card-container'>

        <img className='close-icon' alt='' src={Close} onClick={() => { setOpenWindow(false) }}></img>
        <div className='title'>CLAIM YOUR TOKENS</div>
        <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.</div>

        <div className='card-box'>
          <div className='card-title'>PROPOSAL NAME OF THR PROJECT</div>
          <div className='card-content'>
            <div className='line'>
              <ProgressPending percent={80} content='APPROVE' />
              <div className='progress-text'>RESULT<span style={{ fontFamily: 'Roboto' }}>:</span> APPROVED</div>
            </div>
            <div className='line'>
              <ProgressPending percent={20} content='REJECT' />
              <div className='progress-text'>CLOSED DATE<span style={{ fontFamily: 'Roboto' }}>:</span> 070012022</div>
            </div>
            <div className='progress-text-mobile first'>RESULT<span style={{ fontFamily: 'Roboto' }}>:</span> APPROVED</div>
            <div className='progress-text-mobile'>CLOSED DATE<span style={{ fontFamily: 'Roboto' }}>:</span> 070012022</div>
          </div>

        </div>

        <div className='title'>Attached Documents</div>
        <div className='link-box'>
          <a className='link-item' href=''><img alt='' className='link-img' src={Audit}></img></a>
          <a className='link-item' href=''><img alt='' className='link-img' src={WhitePaper}></img></a>
          <a className='link-item' href=''><img alt='' className='link-img' src={Site}></img></a>
          <a className='link-item' href=''><img alt='' className='link-img' src={Deck}></img></a>
          <a className='link-item' href=''><img alt='' className='link-img' src={Social}></img></a>

        </div>

      </div>
    </div>
  )
}
