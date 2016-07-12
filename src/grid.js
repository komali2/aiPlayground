var NONE = 1;


class Grid {
  constructor(width, height){
    this.height = height;
    this.width = width;
    this.matrix = this.generateGrid(height, width);
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
}
