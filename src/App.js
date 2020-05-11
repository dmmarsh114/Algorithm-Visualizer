import React, { useState } from 'react';
import './App.css';
import './css/main.css'
import 'antd/dist/antd.css';

import SolarSystemPage from './components/SolarSystem/SolarSystemPage';
import LandingPage from './components/Landing/LandingPage';
import About from './components/Landing/About';
import Footer from './components/NextPage/Footer';

function App() {

  const [planetName, setPlanetName] = useState('');
  const [numberOfMoons, setNumberOfMoons] = useState('');
  const [moons, setMoons] = useState([]);
  const [sideralOrbit, setSideralOrbit] = useState('');
  const [sideralRotation, setSideralRotation] = useState('');
  const [planetVolValue, setPlanetVolValue] = useState(0);
  const [planetVolExponent, setPlanetVolExponent] = useState(0);
  const [planetGravity, setPlanetGravity] = useState(0);

  const fetchPlanetInfo = async (planet) => {
    await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`, {
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
        setPlanetGravity(planetData.gravity)
        // planetData.moons === null ? setNumberOfMoons('0') : setNumberOfMoons(planetData.moons.length);  
        if (planetData.moons === null) {
          setNumberOfMoons('0');
          setMoons('');
        } else {
          setNumberOfMoons(planetData.moons.length);
          setMoons(planetData.moons);
        }
      })
  }

  return (
    <div>
      <LandingPage />
      <SolarSystemPage
        fetchPlanetInfo={fetchPlanetInfo}
        planetName={planetName}
        numberOfMoons={numberOfMoons}
        moons={moons}
        sideralOrbit={sideralOrbit}
        sideralRotation={sideralRotation}
        planetVolValue={planetVolValue}
        planetVolExponent={planetVolExponent}
        planetGravity={planetGravity}
      />
      {/* <About />
      <Footer /> */}
    </div>
  );
}

export default App;
