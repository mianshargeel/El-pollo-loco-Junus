class Chicken extends MoveableObject {  
  y = 360; 
  height = 60;
  width = 80;
  IMAGES_WALKING = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
  ];//this array holds all walking chickens

  constructor() {
    super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); //loading starting normal images
    this.loadWalkingImages(this.IMAGES_WALKING); //loading walking images
    this.x = 200 + Math.random() * 500; // Math.random() * 500 returns num betwen 0-500
    this.speed = 0.15 + Math.random() * 0.5; //0 - 0.25
    this.animate();
  } 

  animate() {
    setInterval(() => {
      this.moveLeft();
      let index = this.currentImage % this.IMAGES_WALKING.length;
      let path = this.IMAGES_WALKING[index];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 200);
  }

  
}