export default class Planet {
    constructor(distance, radius, color, orbitalSpeed, angle = 0) {
        this.distance = distance;
        this.radius = radius;
        this.color = color;
        this.angle = angle;
        this.orbitalSpeed = orbitalSpeed;
    }

    show(p5) {
        p5.push();
        p5.rotate(this.angle);
        p5.translate(this.distance, 0);
        p5.noStroke();
        p5.fill(this.color);
        p5.ellipse(0, 0, this.radius * 2);
        p5.pop();
    }

    orbit(p5) {
        // draw orbital plane
        p5.stroke('white');
        p5.noFill();
        p5.ellipse(0, 0, this.distance * 2);

        // animate orbit
        this.angle = this.angle + this.orbitalSpeed
    }

    displayData(url) {
        // fetch
        // toggle modal
    }
}