import React, { useState } from 'react';
import { Card } from 'antd';

const SolarSystemCard = (props) => {

    const [planetName, setPlanetName] = useState('');

    const [numberOfMoons, setNumberOfMoons] = useState('');
    const [planetMoons, setPlanetMoons] = useState([]);

    const [sideralOrbit, setSideralOrbit] = useState('');
    const [sideralRotation, setSideralRotation] = useState('');

    const fetchPlanetInfo = (planet) => {
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json())
            .then(planetData => {
                setPlanetName(planetData.englishName);
                setSideralOrbit(Math.round(planetData.sideralOrbit));
                setSideralRotation(Math.round(planetData.sideralRotation));
                if (planetData.moons === null) {
                    setNumberOfMoons('0')
                } else {
                    setNumberOfMoons(planetData.moons.length);
                }
                props.setPlanet('');
            })

    }

    const cardContent = () => {
        return (
            <div>
                <p> {planetName} has {sideralOrbit} days in a year...</p>
                <p>and {sideralRotation} hours in a day!</p>
                {
                    numberOfMoons > 0 ?
                        <a href="">
                            <p>{planetName} has {numberOfMoons} {numberOfMoons === 1 ? 'moon' : 'moons'}.</p>
                        </a>
                        : <p>{planetName} doesn't have any moons.</p>
                }
                <a href="">Click here to learn more about {planetName}!</a>
            </div>
        )
    }

    return (
        <Card
            title={planetName === '' ? 'Click on a planet to learn more about it!' : planetName.toUpperCase()}
            style={{ width: 300 }}
        >
            {props.planet !== '' ? fetchPlanetInfo(props.planet) : null}
            {planetName !== '' ? cardContent() : null}
        </Card>
    )
}

export default SolarSystemCard;