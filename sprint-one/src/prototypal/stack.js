var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj['values'] = {};
  return obj;
};

var stackMethods = {};

stackMethods.push = function(val) {
  var keys = Object.keys(this.values);
  this.values[keys.length] = val; 
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


