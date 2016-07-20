var NONE = 1;
var PACMAN = 2;
var WALL = 3;
var GOAL = 5;

describe('Problem Class', ()=>{
  var x = 10;
  var y = 10;

  var problem1 = new Problem(x, y);
  var pacman = new Pacman(0, 0, problem1);
  problem1.createExample(1);


  it('should exist', ()=>{
    expect(Problem).to.exist;
  });
  it('should be a child of Grid', ()=>{
    expect(problem1).to.be.an.instanceof(Grid);
  });
  it('should allow new instances of itself', ()=>{
    expect(problem1).to.be.an.instanceof(Problem);
  });
  describe('Methods', ()=>{
    it('should have a isGoalState method', ()=>{
      expect(problem1.isGoalState).to.exist;
    });
    it('should properly report if a given state is the goal state', ()=>{
      expect(problem1.isGoalState(9, 9)).to.equal(true);
      expect(problem1.isGoalState(8, 8)).to.equal(false);
    });
    it('should have a getSuccessors method', ()=>{
      expect(problem1.getSuccessors).to.exist;
    });
    it('should return an array of possible movements', ()=>{
      expect(problem1.getSuccessors(0, 0)).to.be.an.instanceof(Array);
    });
  });
  problem1.printMatrix();
});
