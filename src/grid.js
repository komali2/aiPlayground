var NONE = 1;


class Grid {
  constructor(width, height){
    this.height = height;
    this.width = width;
  }

  get area(){
    return this.calcArea();
  }

  calcArea(){
    return this.height * this.width;
  }

  get matrix(){
    return this.generateGrid(this.height, this.width)
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
