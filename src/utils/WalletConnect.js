import React, { useState, useEffect } from 'react';
// import { getUserBalance, getTokenBalance } from './contractFunctions';
import { connectWallet, getCurrentWalletConnected } from "./interact"

export default function WalletConnect({ account, setAccount}) {

    const [status, setStatus] = useState();

    useEffect(async () => {
        const { address, status } = await getCurrentWalletConnected();
        setAccount(address);
        setStatus(status);
        addWalletListener();
    }, []);

    // useEffect(async () => {
    //     const _tokens = await getTokens(account);
    //     setTokens(_tokens);
    //     const _balance = await getBalance(account);
    //     setBalance(_balance);
    // }, [account])

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    setStatus("👆🏽 Write a message in the text-field above.");
                } else {
                    setAccount("");
                    setStatus("🦊 Connect to Metamask using the top right button.");
                }
            });
        } else {
            setStatus(
                <p>
                    {" "}
                    🦊{" "}
                    <a target="_blank" href={`https://metamask.io/download.html`}>
                        You must install Metamask, a virtual Ethereum wallet, in your
                        browser.
                    </a>
                </p>
            );
        }
    }

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setAccount(walletResponse.address);
    };

    return (
        <div className='connectwallet-button' onClick={connectWalletPressed}>
            {account?.length > 0 ? (
                // "Connected: " +
                String(account).substring(0, 6) +
                "..." +
                String(account).substring(38)
            ) : (
                <span>Connect Wallet</span>
            )}
        </div>
    )
}
