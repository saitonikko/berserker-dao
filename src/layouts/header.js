import React from 'react';
import { Link } from 'react-router-dom';
import WalletConnect from '../utils/WalletConnect';
import Logo from "../assets/img/logo.png"
import "../assets/style/header.scss"


export default function Header({account, setAccount}) {
    return (
        <div className='header'>
            <div className='flex-box'>
                <img alt='' src={Logo} className='dao-logo'></img>
                <div className='logo-title'>BERSERKER DAO</div>
            </div>
            {/* <div className='connectwallet-button'>Connect Wallet</div> */}
            <WalletConnect account={account} setAccount={setAccount} />
        </div>
    )
}
