var NONE = 1;
var PACMAN = 2;
var WALL = 3;
var GOAL = 5;

describe('Problem Class', ()=>{
  var x = 10;
  var y = 10;

  var problem1 = new Problem(x, y);
  var pacman = new Pacman(0, 0, problem1);

  it('should exist', ()=>{
    expect(Problem).to.exist;
  });
  it('should be a child of Grid', ()=>{
    expect(problem1).to.be.an.instanceof(Grid);
  });
  it('should allow new instances of itself', ()=>{
    expect(problem1).to.be.an.instanceof(Problem);
  });
  problem1.createExample(1);
  problem1.printMatrix();
});
