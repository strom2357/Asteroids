(function () {
  if (typeof Asteroids === "undefined") {
    windows.Asteroids = {}; 
  }
  
  var gameView = Asteroids.gameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx; 
  }
  
  gameView.prototype.start = function () {
    var that = this;
    
    setInterval( function() {
      that.game.step();
      that.game.draw(that.ctx);
    }, 20); 
  };
  
  
})();