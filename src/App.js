import React from 'react';
import Header from './components/Header';
import SellWaste from './components/SellWaste';
import { Outlet } from 'react-router-dom';
import FarmerDashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
    
  );
  
}

export default App;





