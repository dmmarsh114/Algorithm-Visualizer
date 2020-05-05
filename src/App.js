import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Planets from './planets/Planets';
import Tristan from './components/solarSystemPage/Tristan';

function App() {
  return (
    <div>
      <Planets />
      <h1>Planets App</h1>
      <Tristan />
      <h1>Develop</h1>
    </div>
  );
}

export default App;
