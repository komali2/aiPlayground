var NONE = 1;
var PACMAN = 2;
var WALL = 3;
var GOAL = 5;



class Problem extends Grid{
  constructor(width, height){
    super(width, height);
  }

  createExample(num){
    switch(num){
      case 1:
        for(var i = 0; i < 10; i++){
          if(i !== 0 && i !== 8){
            this.changeCoordinateValue(i, 2, WALL);
          }
        }
        break;
      default:
        this.matrix = this.matrix;
    }
  }
}
