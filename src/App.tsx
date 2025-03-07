import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoinList from './components/CoinList';
import CoinDetail from './components/CoinDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-center font-bold mb-8">Crypto Tracker</h1>
        <Routes>
          <Route path="/" element={<CoinList />} />
          <Route path="/coin/:id" element={<CoinDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
