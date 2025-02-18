class MoveableObject {
  x = 120;  // horizentle postion
  y = 280;  // vertical position
  img;
  height = 150; //objects height[pepe, chicken..]
  width = 100;
  imageCache = []; //will store the character-img[pepe]
  
  loadImage(path) {
    this.img = new Image();//creating img-tag through JS-Image-Object
    this.img.src = path;
  }
  loadPepeImages(arrImg) { //to load all Pepe's images
    arrImg.forEach(path => {
      let img = new Image();
      img.src = path; 
      this.loadPepeImages.push(img);
    });
  }
  moveRight() {
    console.log('Moving right');
  }
  moveLeft() {
    console.log('Moving Left');
  }
}