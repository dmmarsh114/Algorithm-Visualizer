import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Planets from './components/solarSystemPage/Planets';
import Tristan from './components/solarSystemPage/Tristan';
// import Planet from './components/p5/Planet';

function App() {
  return (
    <div>
      <h1>Tristan</h1>
      <Tristan />
      <h1>Taylor</h1>
      <Planets />
      {/* <Planet /> */}
    </div>
  );
}

export default App;
