console.log("Helloworld");

(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var movingObject = Asteroids.movingObject = function ( options ) {
    this.pos = options.pos
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game; 
  };
  
  //draw a circle of radius and pos
  movingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    
    ctx.fill();
  }
  
  movingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  }
  
  
  movingObject.prototype.isCollidedWith = function (otherObject) {
    var sumRadii = this.radius + otherObject.radius;
    if (this.distanceFrom(otherObject) < sumRadii){
      return true;
    };
    return false;
  };

  movingObject.prototype.distanceFrom = function(otherObject) {
    var a = (this.pos[0] - otherObject.pos[0]);
    var b = (this.pos[1] - otherObject.pos[1]);
    return Math.sqrt((Math.pow(a, 2)) + (Math.pow(b, 2)));
  };
  
  movingObject.prototype.collideWith = function(otherObject) {
      this.game.remove(otherObject);
      this.game.remove(this);
  };
  
})();