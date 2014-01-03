(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function (pos, vel) {
    this.vel = vel;
    this.color = Ship.COLOR;
    this.radius = Ship.RADIUS;
    Asteroids.MovingObject.call(this, pos, this.vel, this.color, this.radius);
  };

  Ship.RADIUS = 10;
  Ship.COLOR = 'red';

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.powerLeft = function (impulse) {
    this.vel[0] -= impulse;
  }

  Ship.prototype.powerRight = function (impulse) {
    this.vel[0] += impulse;
  }

  Ship.prototype.powerUp = function (impulse) {
    this.vel[1] -= impulse;
  }

  Ship.prototype.powerDown = function (impulse) {
    this.vel[1] += impulse;
  }

  Ship.prototype.fireBullet = function () {
    var velocity = Math.sqrt(Math.pow(this.vel[0], 2) + Math.pow(this.vel[1], 2));
    if (velocity !== 0) {
      return new Asteroids.Bullet(this.pos, [0, -5 * velocity]);
    }
  }





})(this);

