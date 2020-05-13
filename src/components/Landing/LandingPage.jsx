
import React from 'react';
import { Row, Col, Button } from 'antd';


export default function LandingPage() {
    return (
        <div id="home" className="title-page">
            <h1 className="title">Solar System</h1>
            <h1 className="title-two">Visualizer</h1>
        
            <Row justify="center">
                <a href="#solar-system"><Button className="landing-bttn" shape="round" size="large">Explore</Button></a>
            </Row>
        </div>
    )
}
