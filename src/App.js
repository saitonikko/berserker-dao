import { Routes, Route } from 'react-router-dom';
import Dao from './pages/dao';
import Layout from './layouts';
import Claim from './pages/claim'
import Pending from './pages/pending';
import Create from './pages/create';
import Success from './pages/success';
import Closed from './pages/closed';
import Delegate from './pages/delegate';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Dao />} />
          <Route path='claim' element={<Claim />} />
          <Route path='pending' element={<Pending />} />
          <Route path='create' element={<Create />} />
          <Route path='success' element={<Success />} />
          <Route path='closed' element={<Closed />} />
          <Route path='delegate' element={<Delegate />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
