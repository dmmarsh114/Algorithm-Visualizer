import React, { useState } from 'react';

const Moons = (props) => {

    const [moonName, setMoonName] = useState('');
    const [discoveredBy, setDiscoveredBy] = useState('');
    const [discoveryDate, setDiscoveryDate] = useState('');

    const fetchMoonData = (moon) => {
        fetch(`${moon}`, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(jsonData => {
                console.log('MOON DATA', jsonData);
                setMoonName(jsonData.name);
                setDiscoveredBy(jsonData.discoveredBy);
                setDiscoveredBy(jsonData.discoveryDate);
            })
    }

    const moonMapper = (moonsArray) => {
        console.log(moonsArray);
        return moonsArray.map((moon, index) => {
            return (
                <li key={index}>
                    <button
                        style={{ backgroundColor: 'black', border: 'none' }}
                        onClick={() => fetchMoonData(moon.rel)}
                    >
                        {moon.moon}
                    </button>
                </li>
            )
        });
    }

    return (
        <ol>
            {moonMapper(props.moons)}
        </ol>
    )
}

export default Moons;