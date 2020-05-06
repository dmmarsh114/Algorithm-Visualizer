import React from 'react'
import { Tooltip } from 'antd';

export default function SolarSystemPage(props) {
    return (
        <div className="solar-system">
            {/* SUN */}
            <Tooltip placement="topRight" title="The Sun">
                <img
                    src="https://img.icons8.com/color/96/000000/sun-star.png"
                    onClick={() => props.setPlanet('sun')}
                    className="sun"
                />
            </Tooltip>

            {/* MERCURY */}
            <div className="spinner-1" onClick={() => props.setPlanet('mercury')}>
                <Tooltip placement="topRight" title="Mercury">
                    <img
                        src="https://img.icons8.com/color/48/000000/mercury-planet.png"
                        onClick={() => props.setPlanet('mercury')}
                        className="mercury"
                    />
                </Tooltip>
            </div>

            {/* VENUS */}
            <div className="spinner-2" onClick={() => props.setPlanet('venus')}>
                <Tooltip placement="topRight" title="Venus">
                    <img
                        src="https://img.icons8.com/color/48/000000/venus-planet.png"
                        onClick={() => props.setPlanet('venus')}
                        className="venus"
                    />
                </Tooltip>
            </div>

            {/* EARTH */}
            <div className="spinner-3" onClick={() => props.setPlanet('earth')}>
                <Tooltip placement="topRight" title="Earth">
                    <img
                        src="https://img.icons8.com/color/48/000000/earth-planet.png"
                        onClick={() => props.setPlanet('earth')}
                        className="earth"
                    />
                </Tooltip>
            </div>

            {/* MARS */}
            <div className="spinner-4" onClick={() => props.setPlanet('mars')}>
                <Tooltip placement="topRight" title="Mars">
                    <img
                        src="https://img.icons8.com/color/48/000000/mars-planet.png"
                        onClick={() => props.setPlanet('mars')}
                        className="mars"
                    />
                </Tooltip>
            </div>

            {/* JUPITER */}
            <div className="spinner-5" onClick={() => props.setPlanet('jupiter')}>
                <Tooltip placement="topRight" title="Jupiter">
                    <img
                        src="https://img.icons8.com/color/96/000000/jupiter-planet.png"
                        onClick={() => props.setPlanet('jupiter')}
                        className="jupiter"
                    />
                </Tooltip>
            </div>

            {/* SATURN */}
            <div className="spinner-6" onClick={() => props.setPlanet('saturn')}>
                <Tooltip placement="topRight" title="Saturn">
                    <img
                        src="https://img.icons8.com/color/96/000000/saturn-planet.png"
                        onClick={() => props.setPlanet('saturn')}
                        className="saturn"
                    />
                </Tooltip>
            </div>

            {/* URANUS */}
            <div className="spinner-7" onClick={() => props.setPlanet('uranus')}>
                <Tooltip placement="topRight" title="Uranus">
                    <img
                        src="https://img.icons8.com/color/48/000000/uranus-planet.png"
                        onClick={() => props.setPlanet('uranus')}
                        className="uranus"
                    />
                </Tooltip>
            </div>

            {/* NEPTUNE */}
            <div className="spinner-8" onClick={() => props.setPlanet('neptune')}>
                <Tooltip placement="topRight" title="Neptune">
                    <img
                        src="https://img.icons8.com/color/48/000000/neptune-planet.png"
                        onClick={() => props.setPlanet('neptune')}
                        className="neptune"
                    />
                </Tooltip>
            </div>

            {/* PLUTO */}
            <div className="spinner-9" onClick={() => props.setPlanet('pluto')}>
                <Tooltip placement="topRight" title="Pluto">
                    <img
                        src="https://img.icons8.com/color/48/000000/pluto-dwarf-planet.png"
                        onClick={() => props.setPlanet('pluto')}
                        className="pluto"
                    />
                </Tooltip>
            </div>
        </div>
    )
}
