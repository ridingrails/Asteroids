(function (root) {
   var Asteroids = root.Asteroids = (root.Asteroids || {});
   var MovingObject = Asteroids.MovingObject = function (pos, vel, color, radius) {
     this.pos = pos;
     this.vel = vel;
     this.radius = radius;
     this.color = color;
   }

   MovingObject.prototype.move = function () {
     this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]
   }

   MovingObject.prototype.draw = function (ctx) {
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

   MovingObject.prototype.isCollidedWith = function (otherObject) {
     var dist = Math.pow(otherObject.pos[0] - this.pos[0], 2)
                 + Math.pow(otherObject.pos[1] - this.pos[1], 2);
     var radius = Math.pow(otherObject.radius + this.radius, 2);
     return (dist <= radius);
   }

})(this);
