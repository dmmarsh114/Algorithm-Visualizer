import React from 'react';
import './App.css';
import './css/main.css'
import 'antd/dist/antd.css';
// import Planets from './components/Taylor/Planets';
// import Tristan from './components/Tristan/Tristan';
import SolarSystemPage from './components/Tristan/SolarSystemPage';
import LandingPage from './components/Tristan/LandingPage';
import NextPage from './components/Tristan/NextPage';

function App() {
  return (
    <div>
      {/* <h1>Tristan</h1>
      <Tristan />
      <h1>Taylor</h1>
      <Planets /> */}
      <LandingPage />
      <SolarSystemPage />
      <NextPage />
    </div>
  );
}

export default App;
