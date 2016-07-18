var NONE = 1;
var PACMAN = 2;
var WALL = 3;
var GOAL = 5;



describe('Actor Class', ()=>{
  var x = 1;
  var y = 2;
  var grid = new Grid(10, 10);
  var actor = new Actor(x, y, grid, PACMAN);

  describe('Class Bits', ()=>{
    it('should exist', ()=>{
      expect(Actor).to.exist;
    });

    it('should be a Class', ()=>{
      expect(Actor).to.be.a('function');
    });

    it('should allow new instances of itself', ()=>{
      expect(actor).to.be.an.instanceof(Actor);
    });
  });

  describe('Actor Methods', ()=>{
    describe('Getters', ()=>{
      it('should have a getter method for its location', ()=>{
        expect(actor.getCoords).to.deep.equal([x, y]);
      });

      it('should have a getter method for its x location', ()=>{
        expect(actor.getX).to.equal(x);
      });

      it('should have a getter method for its y location', ()=>{
        expect(actor.getY).to.equal(y);
      });
    });
    describe('Setters', ()=>{

      it('should should have a setter method for its location', ()=>{
        expect(actor.moveTo).to.be.a('function');
      });
      it('should moveTo to the proper coords', ()=>{
        var newX = 3;
        var newY = 4;
        actor.moveTo(newX, newY);
        expect(actor.getCoords).to.deep.equal([newX, newY]);
        expect(actor.x).to.equal(newX);
        expect(actor.y).to.equal(newY);
      });

      it('should have a move north method', ()=>{
        expect(actor.moveNorth).to.be.a('function');
      });
      it('should moveNorth to the proper coords', ()=>{
        actor.moveTo(2, 2);
        actor.moveNorth();
        expect(actor.getCoords).to.deep.equal([2, 1]);
        expect(actor.x).to.equal(2);
        expect(actor.y).to.equal(1);
      });

      it('should have a move south method', ()=>{
        expect(actor.moveSouth).to.be.a('function');
      });
      it('should moveSouth to the proper coords', ()=>{
        actor.moveTo(2, 2);
        actor.moveSouth();
        expect(actor.getCoords).to.deep.equal([2, 3]);
        expect(actor.x).to.equal(2);
        expect(actor.y).to.equal(3);
      });

      it('should have a move east method', ()=>{
        expect(actor.moveEast).to.be.a('function');
      });
      it('should moveEast to the proper coords', ()=>{
        actor.moveTo(2, 2);
        actor.moveEast();
        expect(actor.getCoords).to.deep.equal([3, 2]);
        expect(actor.x).to.equal(3);
        expect(actor.y).to.equal(2);
      });

      it('should have a move west method', ()=>{
        expect(actor.moveWest).to.be.a('function');
      });
      it('should moveWest to the proper coords', ()=>{
        actor.moveTo(2, 2);
        actor.moveWest();
        expect(actor.getCoords).to.deep.equal([1, 2]);
        expect(actor.x).to.equal(1);
        expect(actor.y).to.equal(2);
      });

      it('should have a moveX direction method', ()=>{
        expect(actor.moveDirection).to.be.a('function');
      });
      it('should moveDirection to proper coords', ()=>{
        actor.moveTo(2, 2);
        actor.moveDirection('north');
        expect(actor.getCoords).to.deep.equal([2, 1]);
        actor.moveTo(2, 2);
        actor.moveDirection('south');
        expect(actor.getCoords).to.deep.equal([2, 3]);
        actor.moveTo(2, 2);
        actor.moveDirection('east');
        expect(actor.getCoords).to.deep.equal([3, 2]);
        actor.moveTo(2, 2);
        actor.moveDirection('west');
        expect(actor.getCoords).to.deep.equal([1, 2]);
      });
    });



  });

  describe('Actor Matrix interaction', ()=>{
    it('should properly save the graph on the actor', ()=>{
      expect(actor.grid).to.equal(grid);
    });
    it('should reflect massive moves', ()=>{
      var x = 5;
      var y = 5;
      actor.moveTo(x, y);
      expect(actor.myGrid.getAt(5, 5)).to.equal(PACMAN);
    });
  });
});
