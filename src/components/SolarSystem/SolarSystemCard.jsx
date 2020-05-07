import React from 'react';
import { Card } from 'antd';

const SolarSystemCard = (props) => {

    let planetImages = {
        Sun: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~orig.jpg',
        Mercury: 'https://images-assets.nasa.gov/image/PIA11245/PIA11245~orig.jpg',
        Venus: 'https://images-assets.nasa.gov/image/PIA00270/PIA00270~orig.jpg',
        Earth: 'https://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg',
        Mars: 'https://images-assets.nasa.gov/image/PIA03276/PIA03276~orig.jpg',
        Jupiter: 'https://images-assets.nasa.gov/image/PIA00343/PIA00343~orig.jpg',
        Saturn: 'https://images-assets.nasa.gov/image/PIA05380/PIA05380~orig.jpg',
        Uranus: 'https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg',
        Neptune: 'https://images-assets.nasa.gov/image/PIA01492/PIA01492~orig.jpg',
        Pluto: 'https://images-assets.nasa.gov/image/PIA19952/PIA19952~orig.jpg'
    }

    let planetDescription = {
        Sun: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma and is by far the most important source of energy for life on Earth.',
        Mercury: 'Mercury is the smallest and innermost planet in the Solar System.  It is named after the Roman deity Mercury, the messenger of the gods.',
        Venus: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and, rarely, is visible to the naked eye in broad daylight.',
        Earth: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other evidence, Earth formed over 4.5 billion years ago.',
        Mars: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
        Jupiter: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant named after the Roman god Jupiter. When viewed from Earth, Jupiter is on average the third-brightest natural object in the night sky after the Moon and Venus. ',
        Saturn: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. Saturn is named after the Roman god of wealth and agriculture.',
        Uranus: 'Uranus is the seventh planet from the Sun. It is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.',
        Neptune: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is named after the Roman god of the sea.',
        Pluto: 'Pluto is an icy dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first and the largest Kuiper belt object to be discovered.'
    }

    const chooseImg = (name) => {
        return planetImages[name]
    }

    const chooseDescription = name => {
        return planetDescription[name]
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

    const cardContent = () => {
        return (
            <div>
                {/* planet image and description */}
                <div className="firstInfo">
                    <img className="planet-img" src={chooseImg(props.planetName)} alt="picture of planet" />
                    <p className="planet-desc">{chooseDescription(props.planetName)} <br /> <a href={`https://en.wikipedia.org/wiki/${props.planetName}`} target="_blank">Read More</a></p>
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