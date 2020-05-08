import React from 'react'
import Sitebar from './Sitebar';
import About from './About';

export default function LandingPage() {
    return (
        <div id="home" className="title-page">
            <Sitebar />
            <h1 className="title">Solar System</h1>
            <h1 className="title-two">Visualizer</h1>
            <About />
        </div>
    )
}
