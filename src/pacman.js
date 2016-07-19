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

  getAvailableMoves(){
    var x = this.x;
    var y = this.y;
    var arrOut = [];
    //can he move west
    if(this.canMoveTo(x-1, y)){
      arrOut.push([x-1, y-1]);
    }
    //can he move east
    if(this.canMoveTo(x + 1, y)){
      arrOut.push([x + 1, y]);
    }
    //can he move north
    if(this.canMoveTo(x, y - 1)){
      arrOut.push([x, y - 1]);
    }
    //can he move south
    if(this.canMoveTo(x, y + 1)){
      arrOut.push([x, y + 1]);
    }
    return arrOut;
  }



}
