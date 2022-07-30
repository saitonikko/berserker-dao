import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProposalContract } from '../utils/contractFunctions';
import moment from 'moment';
import ProgressVoting from '../component/progress-voting';
import '../assets/style/closed.scss';
import Medium from "../assets/img/medium.png"
import Telegram from "../assets/img/telegram.png"
import Twitter from "../assets/img/twitter.png"
import BackButton from "../assets/img/backbutton.png"
import Bird from "../assets/img/bird.png"
import Berserkers from "../assets/img/berserkers.png"
import ProgressPending from "../component/progress-pending"
import ClosedProposals from '../component/closedproposals';
import Eargle from "../assets/img/eargle.png"


export default function Closed({ account }) {

  const [openwindow, setOpenWindow] = useState(false)
  const [closedProposalData, setClosedProposalData] = useState(null);
  const [proposalStateData, setProposalStateData] = useState([]);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [openDetail, setOpenDetail] = useState(true);
  const [admin, setAdmin] = useState(null)

  const loadProposalData = async () => {
    try {
      let temp1 = [];
      let temp2 = [];
      const contract = await getProposalContract();
      const _admin = await contract.methods.admin().call();
      setAdmin(_admin);
      console.log(contract);
      const proposalCount = await contract.methods.proposalCount().call();
      for (let i = 1; i <= proposalCount; i++) {
        const proposal = await contract.methods.proposals(i).call();
        const state = await contract.methods.state(i).call();
        if (state === "2" || state === "3" || state === "5") {
          temp1.push(proposal);
          if (state === "2") temp2.push("Canceled");
          if (state === "3") temp2.push("Defeated");
          if (state === "5") temp2.push("Executed");
        }
      }
      setClosedProposalData(temp1);
      setProposalStateData(temp2);
      console.log(temp1);
      console.log(temp2);
    } catch (err) {
      alert('Something went wrong!');
      console.log(err);
    }
    console.log(account, admin);
  }

  useEffect(() => {
    loadProposalData();
  }, [account])


  return (
    <div className='closed'>

      {openwindow ? <ClosedProposals setOpenWindow={setOpenWindow} />
        :
        <>
          <div className='content'>

            <div className='left-box'>
              {
                openDetail ?
                  <div className='closed-proposal'>
                    <div className='title' onClick={() => { setOpenWindow(true) }} style={{ color: 'red' }}>CLOSED PROPOSAL</div>
                    <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.</div>

                    <div className='scroll'>

                      {
                        closedProposalData?.map((data, index) =>
                          <div className='card-container' key={index} onClick={() => { setOpenDetail(false); setSelectedProposal(index) }}>
                            <div className='card-title'>{data.name}</div>
                            <div className='card-content'>
                              <div className='line'>
                                {
                                  Number(data.forVotes) + Number(data.againstVotes) === 0
                                    ? <ProgressPending percent={0} content='APPROVE' />
                                    : <ProgressPending percent={Number(data.forVotes) / (Number(data.againstVotes) + Number(data.forVotes))} content='APPROVE' />
                                }

                                <div className='progress-text'>state&nbsp;<span style={{ fontFamily: 'Roboto' }}>:</span>&nbsp;{proposalStateData[index]}</div>
                              </div>
                              <div className='line'>
                                {
                                  Number(data.forVotes) + Number(data.againstVotes) === 0
                                    ? <ProgressPending percent={0} content='REJECT' />
                                    : <ProgressPending percent={Number(data.againstVotes) / (Number(data.againstVotes) + Number(data.forVotes))} content='REJECT' />
                                }
                                {
                                  proposalStateData[index] === "Pending"
                                    ? <div className='progress-text'>START DATE&nbsp;<span style={{ fontFamily: 'Roboto' }}>:</span>{moment(data.startTime, "X").format("MM DD YYYY")}</div>
                                    : <div className='progress-text'>CLOSE DATE&nbsp;<span style={{ fontFamily: 'Roboto' }}>:</span>{moment(data.endTime, "X").format("MM DD YYYY")}</div>
                                }

                              </div>
                              <div className='progress-text-mobile first'>state&nbsp;<span style={{ fontFamily: 'Roboto' }}>:</span>&nbsp;{proposalStateData[index]}</div>
                              {
                                proposalStateData[index] === "Pending"
                                  ? <div className='progress-text-mobile'>START DATE&nbsp;<span style={{ fontFamily: 'Roboto' }}>:</span>{moment(data.startTime, "X").format("MM DD YYYY")}</div>
                                  : <div className='progress-text-mobile'>CLOSE DATE&nbsp;<span style={{ fontFamily: 'Roboto' }}>:</span>{moment(data.endTime, "X").format("MM DD YYYY")}</div>
                              }
                            </div>
                          </div>
                        )
                      }


                    </div>

                  </div>
                  :
                  <div className='vote-proposal'>
                    <div className='title'>VOTING PROPOSAL</div>
                    <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.</div>

                    <div className='card-container'>
                      <div className='proposal-name'>{closedProposalData[selectedProposal].name}</div>
                      <div className='proposal-description'>{closedProposalData[selectedProposal].description}</div>
                      {
                        (Number(closedProposalData[selectedProposal].forVotes) + Number(closedProposalData[selectedProposal].againstVotes) === 0)
                          ? <>
                            <ProgressVoting percent={0} content='APPROVE' />
                            <ProgressVoting percent={0} content='REJECT' />
                          </>
                          : <>
                            <ProgressVoting percent={Number(closedProposalData[selectedProposal].forVotes) / (Number(closedProposalData[selectedProposal].againstVotes) + Number(closedProposalData[selectedProposal].againstVote))} content='APPROVE' />
                            <ProgressVoting percent={Number(closedProposalData[selectedProposal].againstVotes) / (Number(closedProposalData[selectedProposal].againstVotes) + Number(closedProposalData[selectedProposal].againstVote))} content='REJECT' />
                          </>
                      }
                    </div>
                  </div>
              }
            </div>

            <div className='right-box'>

              <div className='text-card-container'>

                <div className='text-card'>
                  <div className='card-title'>Viewing Proposals</div>
                  <div className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus. </div>
                </div>

                <div className='text-card'>
                  <div className='card-title'>Viewing Proposals</div>
                  <div className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus. </div>
                </div>
              </div>

              <img className='bird' src={Bird} alt=''></img>
              <img className='berserkers' src={Berserkers} alt=''></img>

            </div>
          </div>

          <div className='footer'>
            {
              openDetail ?
                <Link to='/proposals'><img alt='' src={BackButton} className='backbutton'></img></Link>
                :
                <a><img alt='' src={BackButton} className='backbutton' onClick={() => setOpenDetail(true)}></img></a>
            }
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
