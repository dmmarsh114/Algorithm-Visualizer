import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Planets from './components/solarSystemPage/Planets';
import Tristan from './components/solarSystemPage/Tristan';

import SolarSystem from './components/p5/SolarSystem';

function App() {
  return (
    <div>
      <h1>Tristan</h1>
      <Tristan />
      <h1>Taylor</h1>
      <Planets />
      <SolarSystem />
    </div>
  );
}

export default App;
