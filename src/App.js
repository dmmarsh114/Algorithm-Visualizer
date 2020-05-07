import React, { useState } from 'react';
import './App.css';
import './css/main.css'
import 'antd/dist/antd.css';

import SolarSystemPage from './components/SolarSystem/SolarSystemPage';
import LandingPage from './components/Landing/LandingPage';
import NextPage from './components/NextPage/NextPage';

import SolarSystemCard from './components/SolarSystem/SolarSystemCard';

function App() {

  const [planetName, setPlanetName] = useState('');
  const [numberOfMoons, setNumberOfMoons] = useState('');
  const [planetMoons, setPlanetMoons] = useState([]);
  const [sideralOrbit, setSideralOrbit] = useState('');
  const [sideralRotation, setSideralRotation] = useState('');
  const [planetVolValue, setPlanetVolValue] = useState(0);
  const [planetVolExponent, setPlanetVolExponent] = useState(0);

  const fetchPlanetInfo = (planet) => {

    // clear previous values <-- this code may actually be unnecessary
    // setPlanetName('');
    // setNumberOfMoons('');
    // setSideralOrbit('');
    // setSideralRotation('');
    // setPlanetVolValue('');
    // setPlanetVolExponent('');

    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`, {
      headers: {
        'Accept': 'application/json'
      }
    }).then(res => res.json())
      .then(planetData => {
        setPlanetName(planetData.englishName);
        setSideralOrbit(planetData.sideralOrbit);
        setSideralRotation(planetData.sideralRotation);
        setPlanetVolValue(planetData.vol.volValue);
        setPlanetVolExponent(planetData.vol.volExponent);

        if (planetData.moons === null) {
          setNumberOfMoons('0')
        } else {
          setNumberOfMoons(planetData.moons.length);
        }
      })
  }

  return (
    <div>
      <LandingPage />
      <SolarSystemCard
        planetName={planetName}
        numberOfMoons={numberOfMoons}
        sideralOrbit={sideralOrbit}
        sideralRotation={sideralRotation}
        planetVolValue={planetVolValue}
        planetVolExponent={planetVolExponent}
      />
      <SolarSystemPage fetchPlanetInfo={fetchPlanetInfo} />
      <NextPage />
    </div>
  );
}

export default App;
