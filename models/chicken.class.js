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
    super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.loadPepeImages(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 500; // Math.random() * 500 returns num betwen 0-500
    this.animate();
  } 

  animate() {
    setInterval(() => {
      let index = this.currentImage % this.IMAGES_WALKING.length;// the lenght of our array is 6, and we must stop to increase the valuse of currentImage more than array'length, that's why we use Modul-operator, the value of index always lie between 0-6
      let path = this.IMAGES_WALKING[index];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 300);
  }

  
}