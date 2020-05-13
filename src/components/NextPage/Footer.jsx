import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div id="footer" className="footer">
            <Row justify="space-between" align="middle">
                <Col span={12} className="footer-col-about">
                    <Link to="/about"><Button className="about-bttn" shape="round" >About Us</Button></Link>
                </Col>
                <Col span={12}>
                    <p className="footer-copy-r">&copy;2020 Taylor Dickens, Tristan Oshier, Daniel Marsh</p>
                </Col>
            </Row>
        </div>
    )
}
