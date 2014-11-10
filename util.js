Function.prototype.inherits = function(parent) {
  function Surrogate () {};
  Surrogate.prototype = parent.prototype; 
  this.prototype = new Surrogate(); 
}

Asteroid.Util.inherits = function(parent) {
  function Surrogate () {};
  Surrogate.prototype = parent.prototype; 
  this.prototype = new Surrogate(); 
}
