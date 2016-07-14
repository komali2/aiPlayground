var NONE = 1;
var PACMAN = 2;
var WALL = 3;
var GOAL = 5;



class Actor{
  constructor(x, y, grid, actorName){
    this.setX = x;
    this.setY = y;
    this.grid = grid;
    this.actorName = actorName;
    this.grid.changeCoordinateValue(x, y, actorName);
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
    this.resetMyPreviousLocation();
    this.setY = this.y - 1;
    this.setMyNewLocation();
  }
  moveSouth(){
    this.resetMyPreviousLocation();
    this.setY = this.y + 1;
    this.setMyNewLocation();
  }
  moveEast(){
    this.resetMyPreviousLocation();
    this.setX = this.x + 1;
    this.setMyNewLocation();
  }
  moveWest(){
    this.resetMyPreviousLocation();
    this.setX = this.x - 1;
    this.setMyNewLocation();
  }
  moveDirection(direction){
    if(direction === 'north'){
      this.resetMyPreviousLocation();
      this.moveNorth();
      this.setMyNewLocation();
    }
    else if(direction === 'south'){
      this.resetMyPreviousLocation();
      this.moveSouth();
      this.setMyNewLocation();
    }
    else if(direction === 'east'){
      this.resetMyPreviousLocation();
      this.moveEast();
      this.setMyNewLocation();
    }
    else if(direction === 'west'){
      this.resetMyPreviousLocation();
      this.moveWest();
      this.setMyNewLocation();
    }
  }

  resetMyPreviousLocation(){
    this.grid.changeCoordinateValue(this.getX, this.getY, NONE);
  }
  setMyNewLocation(){
    this.grid.changeCoordinateValue(this.getX, this.getY, this.actorName);
  }



}
