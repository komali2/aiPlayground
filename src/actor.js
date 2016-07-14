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

  //change coords
  moveTo(newX, newY){
    this.setX = newX;
    this.setY = newY;
  }

  moveNorth(){
    this.setY = this.y - 1;
  }
  moveSouth(){
    this.setY = this.y + 1;
  }
  moveEast(){
    this.setX = this.x + 1;
  }
  moveWest(){
    this.setX = this.x - 1;
  }
  moveDirection(direction){
    if(direction === 'north'){
      this.moveNorth();
    }
    else if(direction === 'south'){
      this.moveSouth();
    }
    else if(direction === 'east'){
      this.moveEast();
    }
    else if(direction === 'west'){
      this.moveWest();
    }
  }



}
