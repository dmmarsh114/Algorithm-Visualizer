import React, { useState } from 'react';
import { Card } from 'antd';

const SolarSystemCard = (props) => {

    const howManyEarths = (planet, value, exponent) => {

        let planetBaseVol = value; //volValue from data
        let planetExponent = Math.pow(10, exponent); //15 = volExponent from data

        let earthsBaseVol = 1.08321;
        let earthsExponent = Math.pow(10, 12);
        let earthsVol = earthsExponent * earthsBaseVol;
        let planetVol = planetExponent * planetBaseVol;

        return planetVol > earthsVol
            ? `You could fit ${Math.round(planetVol / earthsVol)} earths inside of ${planet}.`
            : ''
            ;
    }

    const cardContent = () => {
        return (
            <div>
                <p> {props.planetName} has {Math.round(props.sideralOrbit)} days in a year...</p>
                <p>and {Math.round(props.sideralRotation)} hours in a day!</p>
                {
                    props.numberOfMoons > 0 ?
                        <a href="">
                            <p>{props.planetName} has {props.numberOfMoons} {props.numberOfMoons === 1 ? 'moon' : 'moons'}.</p>
                        </a>
                        : <p>{props.planetName} doesn't have any moons.</p>
                }
                <p>{howManyEarths(props.planetName, props.planetVolValue, props.planetVolExponent)}</p>
                <a href="">Click here to learn more about {props.planetName}!</a>
            </div>
        )
    }

    return (
        <Card
            title={props.planetName === '' ? 'Click on a planet!' : props.planetName.toUpperCase()}
            style={{ width: 300 }}
        >
            {props.planetName !== '' ? cardContent() : null}
        </Card>
    )
}

export default SolarSystemCard;