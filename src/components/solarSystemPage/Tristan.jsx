import React, {useState} from 'react'

export default function Tristan() {
    const [ weight, setWeight ] = useState(0);

    fetch('https://api.le-systeme-solaire.net/rest/bodies/terre')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

    const coolEarthFact = () => {
        let jupitersBaseVol = 1.43128; //volValue from data
        let jupitersExponenet = Math.pow(10, 15); //15 = volExponent from data
        let earthsBaseVol = 1.08321;
        let earthsExponent = Math.pow(10, 12);
        let earthsVol = earthsExponent * earthsBaseVol;
        let jupitersVol = jupitersExponenet * jupitersBaseVol;
        return `There are ${Math.round(jupitersVol / earthsVol)} earth's inside of Jupiter.`;
    }

    const weightConverter = () => {
        let jupitersGravity = 24.79;
        let earthsGravity = 9.8;
        let gravityDiff = (jupitersGravity / earthsGravity).toFixed(1);
        return gravityDiff * weight;
    }

    return (
        <div>
            <p>{coolEarthFact()}</p>
            <label>How much do you weigh?</label>
            <br />
            <input onChange={e => setWeight(e.target.value)} placeholder="Enter weight in lbs"></input>
            <p>you weigh {weightConverter()}lbs on Jupiter!</p>
        </div>
    )
}
