class Character extends MoveableObject{
  height = 280; //we can also direct height and width of objects set[i-e pepe's]
  y = 155;
  IMAGES_WALKING = [
    'img/2_character_pepe/2_walk/W-21.png',
    'img/2_character_pepe/2_walk/W-22.png',
    'img/2_character_pepe/2_walk/W-23.png',
    'img/2_character_pepe/2_walk/W-24.png',
    'img/2_character_pepe/2_walk/W-25.png',
    'img/2_character_pepe/2_walk/W-26.png'
  ];
 

  constructor() {
    super().loadImage('img/2_character_pepe/2_walk/W-21.png'); //loading starting normal images
    this.loadWalkingImages(this.IMAGES_WALKING); //loading walking images
    this.animate();
  }

  animate() {
    setInterval(() => {
      let index = this.currentImage % this.IMAGES_WALKING.length;// the lenght of our array is 6, and we must stop to increase the valuse of currentImage more than array'length, that's why we use Modul-operator, the value of index always lie between 0-6
      let path = this.IMAGES_WALKING[index];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 100);
  }

  jump() {
    console.log('jumpping');
    
  }
}