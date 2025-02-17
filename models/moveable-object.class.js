class MoveableObject {
  x = 220;
  y = 420;
  img;
  
  loadImage(path) {
    this.img = new Image();//creating img-tag through JS-Image-Object
    this.img = path;
  }
  moveRight() {
    console.log('Moving right');
  }
  moveLeft() {
    console.log('Moving Left');
  }
}