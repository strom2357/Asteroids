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
  
  Asteroids.Util.inherits = function(child, parent) {

    function Surrogate () {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
  }
  
  Asteroids.Util.randomVec = function() {
    var vel = []
    
    // vel[0] = Math.floor((((Math.random() * 2) - 1) * 4) + 1);
    // vel[1] = Math.floor((((Math.random() * 2) - 1) * 4) + 1);
    vel[0] = (((Math.random() * 2) - 1));
    vel[1] = (((Math.random() * 2) - 1));
    
    return vel;
  }
  
})();
