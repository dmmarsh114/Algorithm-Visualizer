import React from 'react'
import { Tooltip } from 'antd';


export default function SolarSystemPage() {
    return (
        <div className="solar-system">
            {/* SUN */}
            <Tooltip placement="topRight" title="The Sun">
                <img 
                    src="https://img.icons8.com/color/96/000000/sun-star.png" 
                    onClick={() => console.log('sun')} 
                    className="sun" 
                />
            </Tooltip>
            
            {/* MERCURY */}
            <div className="spinner-1">
                <Tooltip placement="topRight" title="Mercury">
                    <img
                        src="https://img.icons8.com/color/48/000000/mercury-planet.png"
                        onClick={() => console.log('mercury')}
                        className="mercury"
                    />
                </Tooltip>
            </div>

            {/* VENUS */}
            <div className="spinner-2">
                <Tooltip placement="topRight" title="Venus">
                    <img 
                        src="https://img.icons8.com/color/48/000000/venus-planet.png" 
                        onClick={() => console.log('venus')} 
                        className="venus" 
                    />
                </Tooltip>
            </div>

            {/* EARTH */}
            <div className="spinner-3">
                <Tooltip placement="topRight" title="Earth">    
                    <img 
                        src="https://img.icons8.com/color/48/000000/earth-planet.png" 
                        onClick={() => console.log('earth')} 
                        className="earth" 
                    />
                </Tooltip>
            </div>

            {/* MARS */}
            <div className="spinner-4">
                <Tooltip placement="topRight" title="Mars">    
                    <img 
                        src="https://img.icons8.com/color/48/000000/mars-planet.png" 
                        onClick={() => console.log('mars')} 
                        className="mars" 
                    />
                </Tooltip>
            </div>
            
            {/* JUPITER */}
            <div className="spinner-5">
                <Tooltip placement="topRight" title="Jupiter">
                    <img 
                        src="https://img.icons8.com/color/96/000000/jupiter-planet.png" 
                        onClick={() => console.log('jupiter')} 
                        className="jupiter" 
                    />
                </Tooltip>
            </div>

            {/* SATURN */}
            <div className="spinner-6">
                <Tooltip placement="topRight" title="Saturn">
                    <img 
                        src="https://img.icons8.com/color/96/000000/saturn-planet.png" 
                        onClick={() => console.log('saturn')} 
                        className="saturn" 
                    />
                </Tooltip>
            </div>

            {/* URANUS */}
            <div className="spinner-7">
                <Tooltip placement="topRight" title="Uranus">
                    <img 
                        src="https://img.icons8.com/color/48/000000/uranus-planet.png" 
                        onClick={() => console.log('uranus')} 
                        className="uranus" 
                    />
                </Tooltip>
            </div>
            
            {/* NEPTUNE */}
            <div className="spinner-8">
                <Tooltip placement="topRight" title="Neptune">
                    <img 
                        src="https://img.icons8.com/color/48/000000/neptune-planet.png" 
                        onClick={() => console.log('neptune')} 
                        className="neptune" 
                    />
                </Tooltip>
            </div>

            {/* PLUTO */}
            <div className="spinner-9">
                <Tooltip placement="topRight" title="Pluto">
                    <img 
                        src="https://img.icons8.com/color/48/000000/pluto-dwarf-planet.png" 
                        onClick={() => console.log('pluto')} 
                        className="pluto" 
                    />
                </Tooltip>
            </div>
        </div>
    )
}
