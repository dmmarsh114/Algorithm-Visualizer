import React from 'react';
import Sketch from 'react-p5';

import Planet from './Planet';
// import RingedPlanet from './RingedPlanet';

const SolarSystem = (props) => {

    let planets = [];

    let sun;
    let mercury, venus, earth, mars;
    let jupiter, saturn, neptune, uranus;
    let pluto;

    const setup = (p5) => {
        let canvas = p5.createCanvas(800, 450);
        // canvas.parent(document.getElementById('spaceContainer'));

        sun = new Planet(0, 20, 'yellow');

        mercury = new Planet(40, 3, 'gray', 0.02);
        venus = new Planet(55, 3, 'orange', 0.01);
        earth = new Planet(75, 7, 'blue', 0.012);
        mars = new Planet(105, 7, 'red', 0.01);
        jupiter = new Planet(150, 12, 'coral', 0.005);
        saturn = new Planet(200, 9, 'tan', 0.004);
        uranus = new Planet(300, 9, 'lightblue', 0.003);
        neptune = new Planet(250, 9, 'indigo', 0.0025);
        pluto = new Planet(350, 2, 'white', 0.0025);

        planets.push(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto);
    }

    const draw = (p5) => {
        // config draw
        p5.background(0);
        p5.noStroke();
        p5.ellipseMode(p5.CENTER);
        p5.translate(p5.width / 2, p5.height / 2);

        sun.show(p5);

        for (let i of planets) {
            i.orbit(p5);
            i.show(p5);
        }
    }

    return (
        <div>
            <Sketch setup={setup} draw={draw} />
        </div>
    )
}

export default SolarSystem;