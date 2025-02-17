class Chicken extends MoveableObject {
  y = 360; 
  height = 60;
  width = 80;
  constructor() {
    super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.x = 200 + Math.random() * 500; // Math.random() * 500 returns num betwen 0-500
  } 
  
}