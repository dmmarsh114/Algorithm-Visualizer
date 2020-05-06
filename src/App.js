import React from 'react';
import './App.css';
import './css/main.css'
import 'antd/dist/antd.css';

import SolarSystemPage from './components/SolarSystem/SolarSystemPage';
import LandingPage from './components/Landing/LandingPage';
import NextPage from './components/NextPage/NextPage';

import SolarSystemCard from './components/SolarSystem/SolarSystemCard';

function App() {

  const [planet, setPlanet] = React.useState('');

  return (
    <div>
      <LandingPage />
      <SolarSystemCard planet={planet} setPlanet={setPlanet} />
      <SolarSystemPage planet={planet} setPlanet={setPlanet} />
      <NextPage />
    </div>
  );
}

export default App;
