import React from 'react';
import { Card } from 'antd';

const SolarSystemCard = (props) => {

    let planetImages = {
        Sun: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~orig.jpg',
        Mercury : 'https://images-assets.nasa.gov/image/PIA11245/PIA11245~orig.jpg',
        Venus: 'https://images-assets.nasa.gov/image/PIA00270/PIA00270~orig.jpg',
        Earth: 'https://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg',
        Mars: 'https://images-assets.nasa.gov/image/PIA03276/PIA03276~orig.jpg',
        Jupiter: 'https://images-assets.nasa.gov/image/PIA00343/PIA00343~orig.jpg',
        Saturn: 'https://images-assets.nasa.gov/image/PIA05380/PIA05380~orig.jpg',
        Uranus: 'https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg',
        Neptune: 'https://images-assets.nasa.gov/image/PIA01492/PIA01492~orig.jpg',
        Pluto: 'https://images-assets.nasa.gov/image/PIA19952/PIA19952~orig.jpg'
    }

    const chooseImg = (name) => {
       return planetImages[name]
    }


    const howManyEarths = (planet, value, exponent) => {
        let planetBaseVol = value;
        let planetExponent = Math.pow(10, exponent); 
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
                {/* planet image and description */}
                <div className="firstInfo">
                    <img className="planet-img" src={chooseImg(props.planetName)} alt="picture of planet" />
                    <p>description</p>
                </div>
                {
                props.planetName !== 'Sun' ?
                <div>
                    {/* number of moons */}
                    <p>Moons: {props.numberOfMoons} <br /> {props.numberOfMoons > 1 ? <a href="">See Moons</a> : props.numberOfMoons === 1 ? <a href="">See Moon</a> : ''}</p>
                    {/* sideral orbit and rotation */}
                    <p>Year length: {Math.round(props.sideralOrbit)} days</p>
                    <p>Day length: {Math.round(props.sideralRotation)} hours</p>
                </div>
                : ''
                }   
                <p>{howManyEarths(props.planetName, props.planetVolValue, props.planetVolExponent)}</p>
                <a href="">Click here to learn more about {props.planetName}!</a>
            </div>
        )
    }

    return (
        <Card
            className="solar-system-card"
            title={props.planetName === '' ? 'Click on a planet!' : props.planetName.toUpperCase()}
            style={{ width: 300 }}
        >
            {props.planetName !== '' ? cardContent() : null}
        </Card>
    )
}

export default SolarSystemCard;