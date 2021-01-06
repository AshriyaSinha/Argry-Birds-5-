class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.piggo = 255
  }
display (){
  console.log(this.body.speed);
  if(this.body.speed<2.2){
    super.display()
  }
  else{
    World.remove(world,this.body);
    this.piggo = this.piggo - 5

    push()
    tint(255,this.piggo)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop()

  }
}

};