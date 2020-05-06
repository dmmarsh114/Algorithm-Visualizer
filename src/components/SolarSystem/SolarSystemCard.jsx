import React, { useState } from 'react';
import { Card } from 'antd';

const SolarSystemCard = (props) => {

    const [planetMass, setPlanetMass] = useState([]);
    const [planetMoons, setPlanetMoons] = useState([]);
    const [sideralOrbit, setSideralOrbit] = useState('');
    const [sideralRotation, setSideralRotation] = useState('');
    const [planetName, setPlanetName] = useState('');
    const [planetVolValue, setPlanetVolValue] = useState(0);
    const [planetVolExponent, setPlanetVolExponent] = useState(0);

    const fetchPlanetInfo = (planet) => {
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json())
            .then(planetData => {
                setPlanetName(planetData.englishName);
                setPlanetMass(planetData.mass.massValue);
                setSideralOrbit(planetData.sideralOrbit);
                setSideralRotation(planetData.sideralRotation);
                setPlanetVolValue(planetData.vol.volValue)
                setPlanetVolExponent(planetData.vol.volExponent)
                if (planetData.moons === null) {
                    setPlanetMoons('0')
                } else {
                    setPlanetMoons(planetData.moons.length);
                }
                props.setPlanet('');
            })
    }

    const howManyEarths = (planet, value, exponent) => {
        
        let planetBaseVol = value; //volValue from data
        let planetExponent = Math.pow(10, exponent); //15 = volExponent from data
        
        let earthsBaseVol = 1.08321;
        let earthsExponent = Math.pow(10, 12);
        let earthsVol = earthsExponent * earthsBaseVol;
        let planetVol = planetExponent * planetBaseVol;
        
        return planetVol > earthsVol 
        ? `There are ${Math.round(planetVol / earthsVol)} earth's inside of ${planet}.`
        : ''
        ;
    }




    return (
        <Card title='facts' style={{ width: 300 }}>
            {props.planet !== '' ? fetchPlanetInfo(props.planet) : null}
            <h4>{planetName === '' ? 'click a planet pls' : planetName.toUpperCase()}</h4>
            <p>Mass: {planetMass}</p>
            <p>Days in a year: {sideralOrbit}</p>
            <p>Hours in a day: {sideralRotation}</p>
            <p>Moons: {planetMoons}</p>
            <p>{howManyEarths(planetName, planetVolValue, planetVolExponent)}</p>
        </Card>
    )
}

export default SolarSystemCard;