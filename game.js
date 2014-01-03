(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  NUM_ASTEROIDS = 10;
  DIM_X = 1000;
  DIM_Y = 500;
  FPS = 200;
  var interval;

  var Game = Asteroids.Game = function(ctx) {
    this.ctx = ctx;
    this.bullets = [];
    this.asteroids = this.addAsteroids(NUM_ASTEROIDS);
    this.ship = new Asteroids.Ship([DIM_X/2, DIM_Y/2], [0,0]);
    console.log(this.ship);
  };

  Game.prototype.addAsteroids = function (numAsteroids) {
    asteroids = [];
    for (var i = 0; i < numAsteroids; i++) {
      asteroids.push(Asteroids.Asteroid.randomAsteroid(DIM_X, DIM_Y));
    }
    return asteroids;
  }

  Game.prototype.draw = function () {
    var that = this;
    this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
    this.asteroids.forEach( function (asteroid) {
      asteroid.draw(that.ctx);
    });
    this.bullets.forEach( function (bullet) {
      bullet.draw(that.ctx);
    });
    this.ship.draw(this.ctx);
  }

  Game.prototype.move = function () {
    this.asteroids.forEach( function (asteroid) {
      asteroid.move();
    });
    this.bullets.forEach( function (bullet) {
      bullet.move();
    });
    this.ship.move();
  }

  Game.prototype.step = function () {
    this.draw();
    this.move();
    this.removeAsteroid();
    this.checkCollisions();

  }

  Game.prototype.start = function () {
    //install handlers
    interval = setInterval(this.step.bind(this), FPS);
    this.bindKeyHandlers();
  }

  Game.prototype.stop = function () {
    clearInterval(interval);
  }

  Game.prototype.checkCollisions = function () {
    var that = this;
    this.asteroids.forEach( function (asteroid) {
      if (asteroid.isCollidedWith(that.ship)) {
        alert("Game Over");
        that.stop();
      }
    });
  }

  Game.prototype.removeAsteroid = function () {
    var that = this;
    var max = this.asteroids.length;
    //console.log(this.asteroids);
    console.log(max);
    for ( var i = 0; i < max; i++) {
      if (!onCanvas(this.asteroids[i].pos)) {
        this.asteroids.splice(i,1);
      }
    }
  }

  Game.prototype.removeBullet = function () {
    var that = this;
    var max = this.bullets.length;
    console.log(this.bullets);
    console.log(max);
    for ( var i = 0; i < max; i++) {
      if (!onCanvas(this.asteroids[i].pos)) {
        this.asteroids.splice(i,1);
      }
    }
  }

  var onCanvas = function (coord){
    return (coord[0] < DIM_X && coord[0] > 0) &&
           (coord[1] < DIM_Y && coord[1] > 0);
  }

  Game.prototype.bindKeyHandlers = function () {
    var that = this;
    key('a', function() {that.ship.powerLeft(5);});
    key('s', function() {that.ship.powerDown(5);});
    key('d', function() {that.ship.powerRight(5);});
    key('w', function() {that.ship.powerUp(5);});
    key('q', function() {that.fireBullet();});
  }

  Game.prototype.fireBullet = function () {
    this.bullets.push(this.ship.fireBullet());
  }

})(this);

