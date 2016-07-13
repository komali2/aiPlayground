describe('Grid Class', ()=>{
  var width = 5;
  var height = 5;
  var grid = new Grid(width, height);
  describe('Class Bits', ()=>{
    it('should exist', ()=>{
      expect(Grid).to.exist;
    });

    it('should be a Class', ()=>{
      expect(Grid).to.be.a('function');
    });

    it('should allow new instances of itself', ()=>{
      expect(grid).to.be.an.instanceof(Grid);
    });
  });

  describe('Grid Methods', ()=>{

    it('should return a matrix from its getter method', ()=>{
      var matrix = grid.getMatrix();
      expect(matrix).to.be.an('array');
      expect(matrix[0]).to.be.an('array');
    });

    it('should create an array of the proper width and length', ()=>{
      var testGrid = new Grid(2, 2);
      var testMatrix = testGrid.getMatrix();
      var exampleMatrix = [[1, 1], [1, 1]];
      expect(testMatrix).to.deep.equal(exampleMatrix);
    });

    it('should return a good area', ()=>{
      expect(grid.area).to.equal(width * height);
    })

    it('should change values with its changeCoordinateValue function', ()=>{
      var testGrid = new Grid(2, 2);
      var testMatrix = testGrid.getMatrix();
      var exampleMatrix = [[1, 1], [1, 1]];
      expect(testMatrix).to.deep.equal(exampleMatrix);
      testGrid.changeCoordinateValue(1, 1, 2);
      testMatrix = testGrid.getMatrix();
      exampleMatrix = [[1, 1], [1, 2]];
      expect(testMatrix).to.deep.equal(exampleMatrix);
      testGrid.changeCoordinateValue(1, 0, 3);
      testMatrix = testGrid.getMatrix();
      exampleMatrix = [[1, 3], [1, 2]];
      expect(testMatrix).to.deep.equal(exampleMatrix);
    });

    it('should have a printMatrix function', ()=>{
      expect(grid.printMatrix).to.be.a('function');
    });

  });

});
