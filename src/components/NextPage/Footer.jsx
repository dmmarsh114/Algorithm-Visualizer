import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div id="footer" className="footer">
            <Link to="/about"><Button className="about-bttn" shape="round" >About Us</Button></Link>
            <br />
            <br />
            <p className="footer-copy-r">&copy;Taylor Dickens, Tristan Oshier, Daniel Marsh 2020</p>
        </div>
    )
}
