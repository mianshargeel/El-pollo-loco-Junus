class World {
  //creating instence and variables
    character = new Character(); 
    enemies = [new Chicken(), new Chicken(), new Chicken() ];
    ctx; //context short form
    canvas;
    clouds = [
      new Cloud()
  ];
  backgroundObject = [
   new BackgroundObject('img/5_background/layers/3_third_layer/1.png')
  ];
 

  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
  }

  
  
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // to removes all content from the entire canvas.

    //googled => canvas context draw image[for following drawImage()]
    this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height); 

    this.enemies.forEach(enemy => {
      this.addToMap(enemy);
    });
    this.clouds.forEach(cloud => {
      this.addToMap(cloud);
    });
    this.backgroundObject.forEach(bgObj => {
      this.addToMap(bgObj);
    });
    let self = this;
    requestAnimationFrame(function () {
      self.draw(); //Inside an anonymous function (like the one passed to requestAnimationFrame), 'this' does not refer to the same 'this' as in the surrounding code.To keep a reference to the correct this (typically an object), we store it in self.
    }); // Calls itself to create a loop [60 FPS]
    
  }

  addToMap(moveableObj) {
    this.ctx.drawImage(moveableObj.img, moveableObj.x, moveableObj.y, moveableObj.width, moveableObj.height);
  }
}
