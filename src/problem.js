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
        //draw first row
        for(let i = 0; i < 10; i++){
          if(i !== 0 && i !== 8){
            this.changeCoordinateValue(i, 2, WALL);
          }
        }
        //draw second row
        for(let i = 0; i < 10; i++){
          if(i !== 0 && i !== 9){
            this.changeCoordinateValue(i, 8, WALL);
          }
        }
        //draw two columns
        for(let i = 0; i < 10; i++){
          if(i !== 0 && i !== 9){
            this.changeCoordinateValue(1, i, WALL);
            this.changeCoordinateValue(7, i, WALL);
          }
        }
        //draw right side column
        for(let i = 0; i <= 5; i++ ){
          this.changeCoordinateValue(9, i, WALL);
        }
        this.changeCoordinateValue(8, 7, WALL);
        this.changeCoordinateValue(8, 8, WALL);
        this.changeCoordinateValue(9, 9, GOAL);
        break;
      default:
        this.matrix = this.matrix;
    }
  }

  isGoalState(x, y){
    return this.getAt(x, y) === GOAL;
  }

  getSuccessors(x, y){
    return this.getAvailableMoves(x, y);
  }







  canMoveTo(x, y){
    if(x >= 0 && y >= 0 && x < this.width && y < this.height){
      if(this.getAt(x, y) !== WALL){
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

  getAvailableMoves(x, y){

    var arrOut = [];
    //can he move west
    if(this.canMoveTo(x-1, y)){
      arrOut.push([x-1, y-1, 'w']);
    }
    //can he move east
    if(this.canMoveTo(x + 1, y)){
      arrOut.push([x + 1, y, 'e']);
    }
    //can he move north
    if(this.canMoveTo(x, y - 1)){
      arrOut.push([x, y - 1, 'n']);
    }
    //can he move south
    if(this.canMoveTo(x, y + 1)){
      arrOut.push([x, y + 1, 's']);
    }
    return arrOut;
  }

}
