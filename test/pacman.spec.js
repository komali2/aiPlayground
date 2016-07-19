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
});
