class paper {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r / 2, options);
        World.add(world, this.body);
        this.image = loadImage("paper.png");
    }
    display() {
        var pos1 = this.body.position;
        
        push();
        translate(pos1.x, pos1.y);
        rectMode(CENTER);
        strokeWeight(0);
        fill(255, 255, 255);
        ellipse(0, 0, this.r, this.r);
        imageMode(CENTER); 
        image(this.image, 0, 0, 100, 100);
        pop();
    }
};