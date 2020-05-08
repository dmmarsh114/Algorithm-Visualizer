import React from 'react'
import { Tooltip } from 'antd';
import SolarSystemCard from './SolarSystemCard'

export default function SolarSystemPage(props) {
    return (
        <div className="solar-system">
            <SolarSystemCard
                planetName={props.planetName}
                numberOfMoons={props.numberOfMoons}
                sideralOrbit={props.sideralOrbit}
                sideralRotation={props.sideralRotation}
                planetVolValue={props.planetVolValue}
                planetVolExponent={props.planetVolExponent}
                planetGravity={props.planetGravity}
            />
            {/* SUN */}
            <Tooltip placement="topRight" title="The Sun">
                <img
                    src="https://img.icons8.com/color/96/000000/sun-star.png"
                    onClick={() => props.fetchPlanetInfo('sun')}
                    className="sun"
                    alt="the sun"
                />
            </Tooltip>

            {/* MERCURY */}
            <div className="spinner-1" onClick={() => props.fetchPlanetInfo('mercury')}>
                <Tooltip placement="topRight" title="Mercury">
                    <img
                        src="https://img.icons8.com/color/48/000000/mercury-planet.png"
                        onClick={() => props.fetchPlanetInfo('mercury')}
                        className="mercury"
                        alt="mercury"
                    />
                </Tooltip>
            </div>

            {/* VENUS */}
            <div className="spinner-2" onClick={() => props.fetchPlanetInfo('venus')}>
                <Tooltip placement="topRight" title="Venus">
                    <img
                        src="https://img.icons8.com/color/48/000000/venus-planet.png"
                        onClick={() => props.fetchPlanetInfo('venus')}
                        className="venus"
                        alt="venus"
                    />
                </Tooltip>
            </div>

            {/* EARTH */}
            <div className="spinner-3" onClick={() => props.fetchPlanetInfo('earth')}>
                <Tooltip placement="topRight" title="Earth">
                    <img
                        src="https://img.icons8.com/color/48/000000/earth-planet.png"
                        onClick={() => props.fetchPlanetInfo('earth')}
                        className="earth"
                        alt="earth"
                    />
                </Tooltip>
            </div>

            {/* MARS */}
            <div className="spinner-4" onClick={() => props.fetchPlanetInfo('mars')}>
                <Tooltip placement="topRight" title="Mars">
                    <img
                        src="https://img.icons8.com/color/48/000000/mars-planet.png"
                        onClick={() => props.fetchPlanetInfo('mars')}
                        className="mars"
                        alt="mars"
                    />
                </Tooltip>
            </div>

            {/* JUPITER */}
            <div className="spinner-5" onClick={() => props.fetchPlanetInfo('jupiter')}>
                <Tooltip placement="topRight" title="Jupiter">
                    <img
                        src="https://img.icons8.com/color/96/000000/jupiter-planet.png"
                        onClick={() => props.fetchPlanetInfo('jupiter')}
                        className="jupiter"
                        alt="jupiter"
                    />
                </Tooltip>
            </div>

            {/* SATURN */}
            <div className="spinner-6" onClick={() => props.fetchPlanetInfo('saturn')}>
                <Tooltip placement="topRight" title="Saturn">
                    <img
                        src="https://img.icons8.com/color/96/000000/saturn-planet.png"
                        onClick={() => props.fetchPlanetInfo('saturn')}
                        className="saturn"
                        alt="saturn"
                    />
                </Tooltip>
            </div>

            {/* URANUS */}
            <div className="spinner-7" onClick={() => props.fetchPlanetInfo('uranus')}>
                <Tooltip placement="topRight" title="Uranus">
                    <img
                        src="https://img.icons8.com/color/48/000000/uranus-planet.png"
                        onClick={() => props.fetchPlanetInfo('uranus')}
                        className="uranus"
                        alt="uranus"
                    />
                </Tooltip>
            </div>

            {/* NEPTUNE */}
            <div className="spinner-8" onClick={() => props.fetchPlanetInfo('neptune')}>
                <Tooltip placement="topRight" title="Neptune">
                    <img
                        src="https://img.icons8.com/color/48/000000/neptune-planet.png"
                        onClick={() => props.fetchPlanetInfo('neptune')}
                        className="neptune"
                        alt="neptune"
                    />
                </Tooltip>
            </div>

            {/* PLUTO */}
            <div className="spinner-9" onClick={() => props.fetchPlanetInfo('pluto')}>
                <Tooltip placement="topRight" title="Pluto">
                    <img
                        src="https://img.icons8.com/color/48/000000/pluto-dwarf-planet.png"
                        onClick={() => props.fetchPlanetInfo('pluto')}
                        className="pluto"
                        alt="pluto"
                    />
                </Tooltip>
            </div>
        </div>
    )
}
