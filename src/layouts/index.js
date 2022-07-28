import React from 'react';
import Header from "./header";


export default function Layout({children, account, setAccount}) {
  return (
    <>
        <Header account={account} setAccount={setAccount} />
        {children}
    </>
  )
}
