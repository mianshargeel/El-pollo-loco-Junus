class Cloud extends MoveableObject{
    y = 20;
    width = 500;  
  height = 200;
  //keeping above properties fixed but not dynamic as on x-axis blow
  constructor() {
    super().loadImage('img/5_background/layers/4_clouds/1.png');
    this.x = Math.random() * 500; // Math.random() * 500 returns num betwen 0-500
  
  }
}