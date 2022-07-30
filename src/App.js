import { Routes, Route } from 'react-router-dom';
import Dao from './pages/dao';
import Layout from './layouts';
import Claim from './pages/claim'
import Pending from './pages/pending';
import Create from './pages/create';
import Success from './pages/success';
import Closed from './pages/closed';
import Delegate from './pages/delegate';
import Stake from './pages/stake';
import Proposals from './pages/proposals';
import { useEffect, useState } from 'react';


function App() {

  const [account, setAccount] = useState(null);

  return (
    <>
      <Layout account={account} setAccount={setAccount}>
        <Routes>
          <Route index element={<Dao />} />
          <Route path='claim' element={<Claim account={account} />} />
          <Route path='proposals' element={<Proposals />} />
          <Route path='pending' element={<Pending account={account} />} />
          <Route path='create' element={<Create account={account} />} />
          <Route path='success' element={<Success />} />
          <Route path='closed' element={<Closed account={account}/>} />
          <Route path='delegate' element={<Delegate />} />
          <Route path='stake' element={<Stake />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
