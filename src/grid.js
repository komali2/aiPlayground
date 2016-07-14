var NONE = 1;
var PACMAN = 2;
var WALL = 3;
var GOAL = 5;


class Grid {
  constructor(width, height){
    this.height = height;
    this.width = width;
    this.matrix = this.generateGrid(height, width);
    this.actorStorage = {};
  }

  setActor(actor, name){
    this.actorStorage[name] = actor;
  }

  getMatrix(){
    return this.matrix;
  }

  get area(){
    return this.width * this.height;
  }

  generateGrid(height, width){
    var arr = [];
    for(var y = 0; y < height; y++){
      arr[y] = [];
      for(var x = 0; x < width; x++){
        arr[y][x] = 1;
      }
    }
    return arr;
  }

  changeCoordinateValue(x, y, val){
    this.matrix[y][x] = val;
  }

  printMatrix(){
    var matrix = this.getMatrix();
    var str = "";
    for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[i].length; j++){
        str = str + matrix[i][j];
      }
      str = str + '\n';

    }
    console.log(str);
  }
}
