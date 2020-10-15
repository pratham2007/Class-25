class Log extends BaseClass{
    constructor(posx, posy, height, angle){
      super(posx, posy, 20, height, angle);
        Matter.Body.setAngle(this.body, angle);
        this.image = loadImage("sprites/wood2.png");
    }
}