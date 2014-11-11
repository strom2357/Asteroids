(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  Function.prototype.inherits = function(parent) {
    
    function Surrogate () {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
  };
  
  var Ship = Asteroids.Ship = function (options) {
    options.color = "#d3d3d3"; //gray
    options.radius = 10;
    options.vel = [0,0];
    options.pos = [Asteroids.Game.DIM_X / 2 , Asteroids.Game.DIM_Y / 2];
    
    Asteroids.movingObject.call(this, options)
    // any extra arguments after...
  };
  
  Ship.inherits(Asteroids.movingObject);

  // Asteroid.Asteroids.Util.inherits(Asteroids.movingObject);
  // Asteroids.Util.inherits(Asteroid, Asteroids.movingObject);
  
  
  
})();