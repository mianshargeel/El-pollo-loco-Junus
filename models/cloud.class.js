class Cloud extends MoveableObject{
    y = 50;
    width = 500;  
  height = 250;
  

  //keeping above properties fixed but not dynamic as on x-axis blow
  constructor() {
    super().loadImage('img/5_background/layers/4_clouds/1.png');

    this.x = Math.random() * 500;
    this.animate();
  }
  animate() {
    this.moveLeft();
  }
  
 
}