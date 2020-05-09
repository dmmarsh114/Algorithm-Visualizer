import React, { useState }from 'react';
import { Card } from 'antd';
import planets from './Planets';


const SolarSystemCard = (props) => {

    const [weight, setWeight] = useState(0);

    const chooseImg = (name) => {
        return planets[name].image
    }

    const chooseDescription = name => {
        return planets[name].description
    }

    const howManyEarths = (planet, value, exponent) => {
        let planetBaseVol = value;
        let planetExponent = Math.pow(10, exponent);
        let earthsBaseVol = 1.08321;
        let earthsExponent = Math.pow(10, 12);
        let earthsVol = earthsExponent * earthsBaseVol;
        let planetVol = planetExponent * planetBaseVol;

        return planetVol > earthsVol
            ? `You could fit ${Math.round(planetVol / earthsVol)} Earths inside of ${planet}.`
            : ''
            ;
    }

    const weightConverter = (gravity) => {
        let earthsGravity = 9.8;
        let differenceInGravity = (gravity / earthsGravity);
        return Math.round(differenceInGravity * weight);
    }

    const defaultCardContent = () => {
        return (
            <div>
                {/* solar system image and description */}
                <img className="solar-system-img" src={chooseImg('SolarSystem')} alt="picture of solar system" />
                <p className="solar-system-desc">
                    {chooseDescription('SolarSystem')} <br />
                </p>       
                <a href={`https://en.wikipedia.org/wiki/Solar_System`} target="_blank">Read More</a>
            </div>

        )
    }

    const cardContent = () => {
        return (
            <div>
                {/* planet image and description */}
                <div className="firstInfo">
                    <img className="planet-img" src={chooseImg(props.planetName)} alt="picture of planet" />
                    <p className="planet-desc">
                        {chooseDescription(props.planetName)} <br />
                        {props.planetName === "Mercury" ?
                            <a href={`https://en.wikipedia.org/wiki/${props.planetName}_(planet)`} target="_blank">Read More</a>
                            : <a href={`https://en.wikipedia.org/wiki/${props.planetName}`} target="_blank">Read More</a>}
                    </p>
                </div>
                {
                    props.planetName !== 'Sun' ?
                        <div>
                            {/* number of moons */}
                            <p>Moons: {props.numberOfMoons} <br /> {props.numberOfMoons > 1 ? <a href="">See Moons</a> : props.numberOfMoons === 1 ? <a href="">See Moon</a> : ''}</p>
                            {/* sideral orbit and rotation */}
                            <p>Year length: {Math.round(props.sideralOrbit)} days</p>
                            <p>Day length: {Math.round(Math.abs(props.sideralRotation))} hours</p>
                        </div>
                        : ''
                }
                {/* cool earth fact */}
                <p>{howManyEarths(props.planetName, props.planetVolValue, props.planetVolExponent)}</p>

                {/* weight fact */}
                {
                    props.planetName !== 'Earth' && props.planetName !== 'Sun' ?
                        <div>
                            <label>Find out how much you weigh on {props.planetName}</label>
                            <br />
                            <input className="weight-input" onChange={e => setWeight(e.target.value)} placeholder="Enter weight in lbs"></input>
                            <p>You weigh {weightConverter(props.planetGravity)}lbs on {props.planetName}!</p>
                        </div>
                    : ''
                }
                
                <a href="">Click here to learn more about {props.planetName}!</a>
            </div>
        )
    }


    return (
        <Card
            className="solar-system-card"
            title={props.planetName === '' ? 'click on a planet to start your journey!' : props.planetName.toUpperCase()}
            style={{ width: 300 }}
        >
            {props.planetName !== '' ? cardContent(): defaultCardContent()}
            
        </Card>
    )
        
    
}

export default SolarSystemCard;