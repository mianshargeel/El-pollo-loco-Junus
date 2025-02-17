class Character extends MoveableObject{
  height = 280; //we can also direct height and width of objects set[i-e pepe's]
  y = 155;
  constructor() {
    super().loadImage('img/2_character_pepe/2_walk/W-21.png');
  }
  jump() {
    console.log('jumpping');
    
  }
}