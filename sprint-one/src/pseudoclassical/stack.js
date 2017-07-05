
var Stack = function() {
  this.values = {};

};

Stack.prototype.push = function(value) {
  var keys = Object.keys(this.values);
  this.values[keys.length] = value;
};

Stack.prototype.pop = function() {
  var keys = Object.keys(this.values);
  var popValue = this.values[keys.length - 1];
  delete this.values[keys.length - 1];
  return popValue;
};

Stack.prototype.size = function() {
  var keys = Object.keys(this.values);
  return keys.length;
};

var newStack = new Stack();