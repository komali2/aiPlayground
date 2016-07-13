class Actor{
  constructor(x, y){
    this.setX = x;
    this.setY = y;
  }

  //getters and setters
  set setX(val){
    this.x = val;
  }
  set setY(val){
    this.y = val;
  }
  get getX(){
    return this.x;
  }
  get getY(){
    return this.y;
  }
  get getCoords(){
    return [this.getX, this.getY];
  }

  //



}
