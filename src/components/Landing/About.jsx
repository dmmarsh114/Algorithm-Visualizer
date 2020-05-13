import React from 'react';
import { Row, Col, Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

const { Meta } = Card;

export default function About() {
    return (
        <div id="about" className="about-page">
            <Link to="/">Back</Link>
            <Row justify="center" align="middle" gutter={[16, 16]}>
                <Col span={14}>
                    <h1 style={{ color: "white" }}>Our Mission</h1>
                    <p style={{ color: "white" }}>Our mission is to teach people about the Solar System in an interactive way. We wanted to create a fun, educational environment giving facts about the nine planets.</p>
                </Col>
            </Row>
            <br />
            <hr style={{ width: '57%' }} />
            <br />
            <Row justify="center" align="middle">
                <Card
                    style={{ width: 240, margin: '10px', backgroundColor: 'black' }}
                    cover={<img alt="Daniel" src={require('../../assets/DanielMarsh3.jpg')} />}
                    bordered={false}
                >
                    <Meta title="Daniel Marsh" description="I am a full-stack web developer who spends my free time making useless things with code. Feel free to connect with me on LinkedIn!" style={{ marginLeft: 5 }} />
                    <a href="https://www.linkedin.com/in/daniel-marsh-843aa5b7/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="about-icon-linked" size="2x" icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/dmmarsh114" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="about-icon-git" size="2x" icon={faGithubSquare} />
                    </a>
                </Card>

                <Card
                    style={{ width: 240, margin: '10px', backgroundColor: 'black' }}
                    cover={<img alt="Tristan" src={require('../../assets/TristanOshier.jpg')} />}
                    bordered={false}
                >
                    <Meta title="Tristan Oshier" description="I am currently a full-stack developer seeking a position in Software Development/Web Development that will challenge me and further my coding skills. I enjoy problem-solving, creative thinking, and am very adaptable to any team environment. Throughout past educational and work experiences, I have met strict project deadlines, developed unique floor plans, and have worked in many different team environments. Feel free to email me through the link below!" style={{ marginLeft: 5 }} />
                    <a href="https://www.linkedin.com/in/tristan-oshier-678420196/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="about-icon-linked" size="2x" icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/Tristanoshier" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="about-icon-git" size="2x" icon={faGithubSquare} />
                    </a>
                    <a href="mailto:tristan.oshier2000@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="about-icon-git" size="2x" icon={faEnvelopeSquare} />
                    </a>
                </Card>

                <Card
                    style={{ width: 240, margin: '10px', backgroundColor: 'black' }}
                    cover={<img alt="Taylor" src={require('../../css/assets/TaylorDickensSmaller.jpg')} />}
                    bordered={false}
                >
                    <Meta title="Taylor Dickens" description="I am an eager full stack developer who is exceptionally passionate and objective focused. Equipped with entry level programming skills and web development knowledge, I am fully committed to seeking further knowledge in technological fields. I am always willing to learn from past experiences and utilize them to enhance my performance with any project. I believe continuous learning drives and moves an organization forward." style={{ marginLeft: 5 }} />
                    <a href="https://www.linkedin.com/in/justintaylordickens/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="about-icon-linked" size="2x" icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/taylordickens17" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="about-icon-git" size="2x" icon={faGithubSquare} />
                    </a>
                    <a href="mailto:justindickens17@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="about-icon-git" size="2x" icon={faEnvelopeSquare} />
                    </a>
                </Card>
            </Row>
        </div>
    )
}