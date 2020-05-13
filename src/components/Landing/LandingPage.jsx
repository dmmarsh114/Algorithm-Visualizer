import React from 'react'
import { Button } from 'antd'

export default function LandingPage() {
    return (
        <div id="home" className="title-page">
            <h1 className="title">Solar System</h1>
            <h1 className="title-two">Visualizer</h1>
           
            <a href="#solar-system"><Button type="primary" shape="round" size="large">Scroll down</Button></a>
           
        </div>
    )
}
