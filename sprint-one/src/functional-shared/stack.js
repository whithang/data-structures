var Stack = function() {
  var newStack = {};
  newStack['values'] = {};
  extend(newStack, stackMethods);

  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  var keys = Object.keys(this.values);
  this.values[keys.length] = value; 
};

stackMethods.pop = function() {
  var keys = Object.keys(this.values);
  var popValue = this.values[keys.length - 1];
  delete this.values[keys.length - 1];
  return popValue;
};

stackMethods.size = function() {
  var keys = Object.keys(this.values);
  return keys.length;
};