export default class RingedPlanet extends Planet {

    show(p5) {
        p5.push();
        p5.stroke('white');
        p5.rotate(this.angle);
        p5.translate(this.distance, 0);
        // draw rings
        p5.rotate(p5.PI / 4);
        p5.ellipse(0, 0, this.radius * 4, this.radius / 2);
        p5.pop();
        // draw planet as normal
        super.show(p5);
    }
}