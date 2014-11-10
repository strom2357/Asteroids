var asteroid = Asteroids.asteroid = function (options) {
  options.color = "#d3d3d3"; //gray
  options.radius = 10;
  options.vel = Asteroids.Util.randomVec();
  
  movingObject.call(this, options)
  // any extra arguments after...
};

asteroid.inherits(movingObject);