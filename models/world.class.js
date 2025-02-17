class World {
  //creating instence and variables
    character = new Character(); 
    enemies = [new Chicken(), new Chicken(), new Chicken() ];
    ctx; //context short form
    canvas;
    clouds = [
      new Cloud()
  ];
  backgroundObjects = [
  new BackgroundObject('img/5_background/layers/air.png', 0),
   new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
   new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
   new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
  ];
  imageLoaded = 0;

  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
  }

  
  
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
    
    this.addArrayObjectToMap(this.backgroundObjects); //to keep this img at background
    this.addArrayObjectToMap(this.clouds);
    this.addToMap(this.character);
    this.addArrayObjectToMap(this.enemies);
    
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    }); 
  }

  addArrayObjectToMap(arrays) { 
    arrays.forEach(arr => this.addToMap(arr));
  }

  addToMap(moveableObj) {
    this.ctx.drawImage(moveableObj.img, moveableObj.x, moveableObj.y, moveableObj.width, moveableObj.height);
  }
}
