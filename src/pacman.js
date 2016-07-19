var NONE = 1;
var PACMAN = 2;
var WALL = 3;
var GOAL = 5;


class Pacman extends Actor{
  constructor(x, y, grid){
    super(x, y, grid, PACMAN);
  }

  canMoveTo(x, y){
    if(x > 0 && y > 0){
      if(this.myGrid.getAt(x, y) !== WALL){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }



}
