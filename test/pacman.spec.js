var NONE = 1;
var PACMAN = 2;
var WALL = 3;
var GOAL = 5;


describe('Pacman Class', ()=>{
  var x = 2;
  var y = 4;

  var grid = new Grid(10, 10);
  var pacman = new Pacman(x, y, grid);

  it('should exist', ()=>{
    expect(Pacman).to.exist;
  });
  it('should be a child of Actor', ()=>{
    expect(pacman).to.be.an.instanceof(Actor);
  });
  it('should allow new isntances of itself', ()=>{
    expect(pacman).to.be.an.instanceof(Pacman);
  });
  it('should have all actor methods', ()=>{
    expect(pacman.getX).to.exist;
    expect(pacman.getY).to.exist;
    expect(pacman.moveTo).to.exist;
  });
  it('should check if it can move before moving', ()=>{
    grid.changeCoordinateValue(2, 5, WALL);
    grid.changeCoordinateValue(2, 3, WALL);
    grid.changeCoordinateValue(1, 5, WALL);
    grid.changeCoordinateValue(3, 5, WALL);
    expect(pacman.canMoveTo(2, 5)).to.equal(false);
    expect(pacman.canMoveTo(2, 3)).to.equal(false);
    expect(pacman.canMoveTo(1, 5)).to.equal(false);
    expect(pacman.canMoveTo(3, 5)).to.equal(false);


  });
  it('should know where it can move next', ()=>{
    pacman.moveTo(2, 6);
    var available = pacman.getAvailableMoves();
    var flag = false;
    for(var i = 0; i < available.length; i++){
      if(_.isEqual(available[i], [3, 6])){
        flag = true;
      }
    }
    expect(flag).to.equal(true);

  });
});


var newGrid = new Grid(10, 10);
newGrid.printMatrix();
