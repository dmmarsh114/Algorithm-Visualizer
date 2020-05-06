import React, { useState } from 'react';
import { Card } from 'antd';

const SolarSystemCard = (props) => {

    const [planetMass, setPlanetMass] = useState([]);
    const [planetMoons, setPlanetMoons] = useState([]);
    const [sideralOrbit, setSideralOrbit] = useState('');
    const [sideralRotation, setSideralRotation] = useState('');

    const fetchPlanetInfo = () => {
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${props.planet}`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json())
            .then(planetData => {
                console.log(planetData);
                setPlanetMass(planetData.mass.massValue);
                setSideralOrbit(planetData.sideralOrbit);
                setSideralRotation(planetData.sideralRotation);
                if (planetData.moons === null) {
                    setPlanetMoons('this planet does not have any moons :(')
                } else {
                    setPlanetMoons(planetData.moons[0].moon);
                }
            })
    }


    return (
        <Card title='facts' style={{ width: 300 }}>
            {props.planet !== '' ? fetchPlanetInfo(props.planet) : null}
            <h4>{props.planet === '' ? 'click a planet pls' : props.planet.toUpperCase()}</h4>
            <p>Mass: {planetMass}</p>
            <p>Days in a year: {sideralOrbit}</p>
            <p>Hours in a day: {sideralRotation}</p>
            <p>Moons: {planetMoons}</p>
        </Card>
    )
}

export default SolarSystemCard;