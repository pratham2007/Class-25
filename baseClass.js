class BaseClass{
    constructor(posx, posy, width, height, angle){
        var option = {
        'restitution':0.3, 
        'friction':2, 
        'density':1.7
     }
         this.body =  Bodies.rectangle(posx, posy, width, height, option);
         this.width = width;
         this.height = height;
         this.image = loadImage("sprites/base.png");
         World.add(world, this.body);
     }
     display(){
         var angle = this.body.angle;
         push();
         translate(this.body.position.x, this.body.position.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image, 0, 0, this.width, this.height);
         pop();
     }
}