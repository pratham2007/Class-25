class AngryBird extends BaseClass{
    constructor(posx, posy){
        super(posx, posy, 50, 50);
        this.image = loadImage("sprites/bird.png");
    }
    display(){
       this.body.position.x = mouseX;
       this.body.position.y = mouseY;
       super.display();
    }
}