
import React from 'react';
import { Spring } from 'react-spring/renderprops'
import { Row, Button } from 'antd';


export default function LandingPage() {
    return (
        <div id="home" className="title-page">
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 1000, duration: 1000 }}
            >
                {props => (
                    <div style={props}>
                        <h1 className="title">Solar System</h1>
                        <h1 className="title-two">Visualizer</h1>

                        <Row justify="center">
                            <a href="#solar-system"><Button className="landing-bttn" shape="round" size="large">Explore</Button></a>
                        </Row>
                    </div>
                )}
            </Spring>
        </div>
    )
}
