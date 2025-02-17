let canvas;
let ctx;
let world;

function init() {
  canvas = document.getElementById('canvas');
  world = new World();
  ctx = canvas.getContext("2d");

  console.log(world.character);
  console.log(world);

}