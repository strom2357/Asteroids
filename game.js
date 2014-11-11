(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Game = Asteroids.Game = function () {
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship({ pos: this.randomPosition(), game: this }); 
  };
  
  Game.prototype.allObjects = function () {
    return this.asteroids.concat(this.ship);
  }
  
  Game.prototype.addAsteroids = function() {
    for (var i = 0; i<Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(
        new Asteroids.Asteroid( { pos: this.randomPosition(), game: this } )
      )
    }
  };
  
  Game.prototype.draw = function(ctx) { 
    //clears the screen
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    
    //draw stuff
    this.allObjects.forEach(function (object) {
      object.draw(ctx); 
    });
    
    //might draw more stuff later
  };
  
  Game.prototype.move = function() {
    this.allObjects.forEach(function (object) {
      object.move();
    });
  };
  
  Game.DIM_X = 800;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 1000;
  
  Game.prototype.randomPosition = function() {
    var position = [];
    
    position[0] = Math.floor((Math.random() * Game.DIM_X) + 1); 
    position[1] = Math.floor((Math.random() * Game.DIM_Y) + 1);
    
    return position;
  };
  
  Game.prototype.checkCollisions = function() {
    var allThings = this.allObjects(); 
    
    for( var i = 0; i < allThings.length; i++ ) {
     for ( var j = i+1; j < allThings.length; j++) {
       if (allThings[i].isCollidedWith(allThings[j])){
         allThings[i].collideWith(allThings[j]);
         console.log("DELETED");
       }
     }
    }
  };
  
  Game.prototype.step = function () {
    this.move();
    this.checkCollisions();
  };
  
  Game.prototype.remove = function (asteroid) {
    var i = this.asteroids.indexOf(asteroid);
    if (i != -1) {
      this.asteroids.splice(i, 1);
    }
  };

  Game.prototype.wrap = function(pos) {
    if (pos[0] < 0) {
      pos[0] = Game.DIM_X;
    }
    if (pos[0] > Game.DIM_X) {
      pos[0] = 0;
    }
    if (pos[1] < 0) {
      pos[1] = Game.DIM_Y;
    }
    if (pos[1] > Game.DIM_Y) {
      pos[1] = 0;
    }
    
    return pos;
  };
  
  
})();