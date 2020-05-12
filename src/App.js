import React, { useState } from 'react';
import './App.css';
import './css/main.css'
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import SolarSystemPage from './components/SolarSystem/SolarSystemPage';
import LandingPage from './components/Landing/LandingPage';
import Footer from './components/NextPage/Footer';
import About from './components/Landing/About';

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
      <Router>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/home">
            <LandingPage />
            <SolarSystemPage
              fetchPlanetInfo={fetchPlanetInfo}
              planetName={planetName}
              numberOfMoons={numberOfMoons}
              sideralOrbit={sideralOrbit}
              sideralRotation={sideralRotation}
              planetVolValue={planetVolValue}
              planetVolExponent={planetVolExponent}
              planetGravity={planetGravity}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
