(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function (pos, vel) {
    this.vel = vel;
    this.color = Bullet.COLOR;
    this.radius = Bullet.RADIUS;
    Asteroids.MovingObject.call(this, pos, this.vel, this.color, this.radius);
  };

  Bullet.RADIUS = 5;
  Bullet.COLOR = 'blue';

  Bullet.inherits(Asteroids.MovingObject);


  Bullet.prototype.hitAsteroids = function () {
    var game = Asteroids.Game;
    var asteroidArray = game.asteroids;
    var length = asteroidArray.length;
    for (var i = 0; i < length; i++) {
      if (this.isCollidedWith(asteroidArray[i])) {
        game.removeAsteroid(i);
      }
    }
  }


})(this);

