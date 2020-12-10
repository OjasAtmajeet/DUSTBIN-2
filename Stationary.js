class wall {
    constructor(x, y, height, width) {
        var options={
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);
        
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(200);
        rect(pos.x, pos.y, this.width, this.height);
        
    }
}