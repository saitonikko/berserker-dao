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


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Dao />} />
          <Route path='claim' element={<Claim />} />
          <Route path='proposals' element={<Proposals />} />
          <Route path='pending' element={<Pending />} />
          <Route path='create' element={<Create />} />
          <Route path='success' element={<Success />} />
          <Route path='closed' element={<Closed />} />
          <Route path='delegate' element={<Delegate />} />
          <Route path='stake' element={<Stake />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
