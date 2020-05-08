import React from 'react'
import Sitebar from './Sitebar';
import About from './About';

export default function LandingPage() {
    return (
        <div id="home" className="title-page">
            <Sitebar />
            <h1 className="title">The Solar</h1>
            <h1 className="title-two">System</h1>
            {/* <About /> */}
        </div>
    )
}
