class MoveableObject {
  x = 120;  // horizentle postion
  y = 280;  // vertical position
  img;
  height = 150; //objects height[pepe, chicken..]
  width = 100;
  
  loadImage(path) {
    this.img = new Image();//creating img-tag through JS-Image-Object
    this.img.src = path;
  }
  moveRight() {
    console.log('Moving right');
  }
  moveLeft() {
    console.log('Moving Left');
  }
}