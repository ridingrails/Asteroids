Function.prototype.inherits = function(arg) {
  function Surrogate() {};
  Surrogate.prototype = arg.prototype;
  this.prototype = new Surrogate();
};
