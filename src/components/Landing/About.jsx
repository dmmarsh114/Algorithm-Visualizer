import React from 'react';
import { Container, Row, Col, Button } from 'antd';

export default function About() {
    return (
        <div id="about" className="about-page">
            <h1 style={{ color: "white" }}>About Us</h1>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <h2 style={{ color: "white" }}>Our Mission</h2>
                    <p style={{ color: "white" }}>Hello</p>
                    <Button className="about-bttn">Learn More</Button>
                </Col>
                <Col span={12}>
                    <h2 style={{ color: "white" }}>Exploring the Galaxy</h2>
                    <p style={{ color: "white" }}>Hello</p>
                    <Button className="about-bttn">Learn More</Button>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <h2 style={{ color: "white" }}>Further Learning</h2>
                    <p style={{ color: "white" }}>Hello</p>
                    <Button className="about-bttn">Learn More</Button>
                </Col>
                <Col span={12}>
                    <h2 style={{ color: "white" }}>Contact Us</h2>
                    <p style={{ color: "white" }}>Hello</p>
                    <Button className="about-bttn">Learn More</Button>
                </Col>
            </Row>
        </div>
    )
}