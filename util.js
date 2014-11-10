// Function.prototype.inherits = function(parent) {
//   function Surrogate () {};
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
// }

(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Util = Asteroids.Util = {};
  
  Asteroid.Util.inherits = function(parent) {
    function Surrogate () {};
    Surrogate.prototype = parent.prototype; 
    this.prototype = new Surrogate(); 
  }
  
  Asteroid.Util.randomVec = function() {
    var vel = []
    
    vel[0] = Math.floor((Math.random() * 10) + 1); //random between 1 and 10;
    vel[1] = Math.floor((Math.random() * 10) + 1);
    
    return vel;
  }
  
})();
