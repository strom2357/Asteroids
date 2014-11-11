(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Game = Asteroids.Game = function () {
    this.asteroids = [];
    this.addAsteroids();
    
  };
  
  Game.prototype.addAsteroids = function() {
    for (var i = 0; i<Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(
        new Asteroids.Asteroid( { pos: this.randomPosition() } )
      )
    }
  };
  
  Game.prototype.draw = function(ctx) { 
    //clears the screen
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    
    //draw stuff
    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx); 
    });
    
    //might draw more stuff later
  };
  
  Game.prototype.move = function() {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
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
})();