import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Planets from './components/solarSystemPage/Planets';
import Tristan from './components/solarSystemPage/Tristan';

function App() {
  return (
    <div>
      <h1>Tristan</h1>
      <Tristan />
      <h1>Taylor</h1>
      <Planets />
    </div>
  );
}

export default App;
