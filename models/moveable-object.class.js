class MoveableObject { //Parent class
  x = 120;  // horizentle postion
  y = 280;  // vertical position
  img;
  height = 150; //objects height[pepe, chicken..]
  width = 100;
  imageCache = {}; //will store the character-img[pepe] i json-obj
  currentImage = 0;
  speed = 0.15;
  
  loadImage(path) {
    this.img = new Image();//creating img-tag through JS-Image-Object
    this.img.src = path;
  }
  loadWalkingImages(arrImg) { 
    arrImg.forEach(path => {
      let img = new Image();
      img.src = path; 
      this.imageCache[path] = img;//will store as json formate[ref: M-12, Spiellogik-2, 2-video by junus]
    });
  }
  moveRight() {
    console.log('Moving right');
  }
   moveLeft() {
    setInterval(() => {
      this.x -= this.speed; 
    }, 2000 / 60); //60PS
  }
}