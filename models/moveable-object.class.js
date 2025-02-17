class MoveableObject {
  x = 120;  // horizentle postion
  y = 240;  // vertical position
  img;
  height = 150;
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