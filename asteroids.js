(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function (pos, vel) {
    Asteroids.MovingObject.call(this, pos, vel, COLOR, RADIUS);
  };

  COLOR = 'black';
  RADIUS = 30;

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.randomAsteroid = function (dimX, dimY) {
    x = Math.random() * dimX;
    y = Math.random() * dimY;
    var velocity = randomVec();
    return new Asteroid([x, y], velocity, COLOR, RADIUS);
  };

  var randomVec = function () {
    vecX = Math.random() * 10;
    vecY = Math.random() * 10;
    return [vecX, vecY];
  };

})(this);

