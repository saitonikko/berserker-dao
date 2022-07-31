import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProposalContract } from '../utils/contractFunctions';
import moment from 'moment';
import '../assets/style/pending.scss';
import Medium from "../assets/img/medium.png"
import Telegram from "../assets/img/telegram.png"
import Twitter from "../assets/img/twitter.png"
import BackButton from "../assets/img/backbutton.png"
import Bird from "../assets/img/bird.png"
import Berserkers from "../assets/img/berserkers.png"
import ProgressPending from "../component/progress-pending"
import Eargle from "../assets/img/eargle.png"
import Accept from "../assets/img/accept.png"
import Reject from "../assets/img/reject.png"
import ProgressVoting from '../component/progress-voting';
import Cancel from "../assets/img/cancel.png"
import Excute from "../assets/img/excute.png"


export default function Pending({ account }) {

  const [contract, setContract] = useState(null);

  const [pendingProposalData, setPendingProposalData] = useState(null);
  const [proposalStateData, setProposalStateData] = useState([]);

  const [selectedProposal, setSelectedProposal] = useState(null);
  const [canVote, setCanVote] = useState(false);

  const [openDetail, setOpenDetail] = useState(true);

  const [admin, setAdmin] = useState(null)

  const loadProposalData = async () => {
    if (!contract) return;
    try {
      let temp1 = [];
      let temp2 = [];
      const _admin = await contract.methods.admin().call();
      setAdmin(_admin);
      console.log(contract);
      const proposalCount = await contract.methods.proposalCount().call();
      for (let i = 1; i <= proposalCount; i++) {
        const proposal = await contract.methods.proposals(i).call();
        const state = await contract.methods.state(i).call();
        if (state === "0" || state === "1" || state === "4") {
          temp1.push(proposal);
          if (state === "0") temp2.push("Pending");
          if (state === "1") temp2.push("Active");
          if (state === "4") temp2.push("Queued");
        }
      }
      setPendingProposalData(temp1);
      setProposalStateData(temp2);
      console.log(temp1);
      console.log(temp2);
    } catch (err) {
      alert('Something went wrong!');
      console.log(err);
    }
    console.log(account, admin);
  }

  const acceptVote = async () => {
    try {
      await contract.methods.castVote(pendingProposalData[selectedProposal].id, 1).send({ from: account });
      console.log("You have accepted!")
    } catch (err) {
      alert("Something went wrong!");
      console.log(err);
    }
    loadProposalData();
  }

  const rejectVote = async () => {
    try {
      await contract.methods.castVote(pendingProposalData[selectedProposal].id, 0).send({ from: account });
      alert("You have rejected!")
    } catch (err) {
      alert("Something went wrong!");
      console.log(err);
    }
    loadProposalData();
  }

  const cancelVote = async () => {
    try {
      await contract.methods.cancel(pendingProposalData[selectedProposal].id).send({ from: account });
      alert("You have canceled!")
    } catch (err) {
      alert("Something went wrong!");
      console.log(err);
    }
    loadProposalData();
  }

  const execute = async () => {
    try {
      await contract.methods.execute(pendingProposalData[selectedProposal].id).send({ from: account });
      alert("You have canceled!")
    } catch (err) {
      alert("Something went wrong!");
      console.log(err);
    }
    loadProposalData();
  }

  useEffect(async () => {
    const _contract = await getProposalContract();
    setContract(_contract);
  }, [account])

  useEffect(() => {
    loadProposalData();
  }, [contract])

  useEffect(async () => {
    console.log(proposalStateData[selectedProposal])
    if (selectedProposal === null) return;
    const proposalId = pendingProposalData[selectedProposal].id;
    const _canVote = await contract.methods.canVote(account, proposalId).call();
    console.log(_canVote, proposalStateData[selectedProposal])
    setCanVote(_canVote);
  }, [selectedProposal])

  return (

    <div className='pending'>

      <div className='content'>

        <div className='left-box'>

          {
            openDetail ?
              <div className='pending-proposal'>
                <div className='title'>PENDING PROPOSAL</div>
                <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit ultrices ut consectetur at est adipiscing blandit. Mi sit augue cursus nam nisl amet amet venenatis purus.</div>

                <div className='scroll'>

                  {
                    pendingProposalData?.map((data, index) =>
                      <div className='card-container' key={index} onClick={() => { setOpenDetail(false); setSelectedProposal(index); }}>
                        <div className='card-title'>{data.name}</div>
                        <div className='card-content'>
                          <div className='line'>

                            {
                              (proposalStateData[index] === "Pending" || Number(data.forVotes) + Number(data.againstVotes) === 0)
                                ? <ProgressPending percent={0} content='APPROVE' />
                                : <ProgressPending percent={(Number(data.forVotes) / (Number(data.forVotes) + Number(data.againstVotes)))} content='APPROVE' />
                            }

                            <div className='progress-text'>state&nbsp;<span style={{ fontFamily: 'Roboto' }}>:</span>&nbsp;{proposalStateData[index]}</div>
                          </div>
                          <div className='line'>
                            {
                              (proposalStateData[index] === "Pending" || Number(data.forVotes) + Number(data.againstVotes) === 0)
                                ? <ProgressPending percent={0} content='REJECT' />
                                : <ProgressPending percent={Number(data.againstVotes) / (Number(data.forVotes) + Number(data.againstVotes))} content='REJECT' />
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
                  <div className='proposal-name'>{pendingProposalData[selectedProposal].name}</div>
                  <div className='proposal-description'>{pendingProposalData[selectedProposal].description}</div>
                  {
                    (proposalStateData[selectedProposal] === "Pending" || Number(pendingProposalData[selectedProposal].forVotes) + Number(pendingProposalData[selectedProposal].againstVotes) === 0)
                      ? <>
                        <ProgressVoting percent={0} content='APPROVE' />
                        <ProgressVoting percent={0} content='REJECT' />
                      </>
                      : <>
                        <ProgressVoting percent={Number(pendingProposalData[selectedProposal].forVotes) / (Number(pendingProposalData[selectedProposal].againstVotes) + Number(pendingProposalData[selectedProposal].forVotes))} content='APPROVE' />
                        <ProgressVoting percent={Number(pendingProposalData[selectedProposal].againstVotes) / (Number(pendingProposalData[selectedProposal].againstVotes) + Number(pendingProposalData[selectedProposal].forVotes))} content='REJECT' />
                      </>
                  }
                </div>
                <div className='vote-box'>
                  {
                    (proposalStateData[selectedProposal] === "Active" && canVote) &&
                    <img src={Accept} onClick={acceptVote} className='vote' alt=''></img>
                  }

                  {

                    (account === admin.toLowerCase() || account === pendingProposalData[selectedProposal].proposer?.toLowerCase()) &&
                    <img src={Cancel} onClick={cancelVote} className='vote' alt=''></img>
                  }

                  {
                    (account === admin.toLowerCase() && proposalStateData[selectedProposal] === "Queued") &&
                    <img src={Excute} onClick={execute} className='vote' alt=''></img>
                  }

                  {
                    (proposalStateData[selectedProposal] === "Active" && canVote) &&
                    <img src={Reject} onClick={rejectVote} className='vote' alt=''></img>
                  }

                </div>
              </div>
          }

        </div>

        <div className='right-box'>
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

    </div>
  )
}
