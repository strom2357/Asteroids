(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  Function.prototype.inherits = function(parent) {
    
    function Surrogate () {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
  };
  
  var Asteroid = Asteroids.Asteroid = function (options) {
    options.color = "#d3d3d3"; //gray
    options.radius = 10;
    options.vel = Asteroids.Util.randomVec();
  
    Asteroids.movingObject.call(this, options)
    // any extra arguments after...
  };
  
  Asteroids.Asteroid.inherits(Asteroids.movingObject);

  // Asteroid.Asteroids.Util.inherits(Asteroids.movingObject);
  // Asteroids.Util.inherits(Asteroid, Asteroids.movingObject);
  
  
  
})();