var Queue = function() {
  var newQueue = {};
  newQueue['values'] = {};
  extend(newQueue, queueMethods);

  return newQueue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var keys = Object.keys(this.values);

  if (keys.length === 0) {
    this.values[0] = value;
  } else {
    this.values[JSON.parse(keys[keys.length - 1]) + 1] = value; 
  }
};

queueMethods.dequeue = function() {
  var keys = Object.keys(this.values);
  var popValue = this.values[keys[0]];
  delete this.values[keys[0]];
  return popValue;
};

queueMethods.size = function() {
  var keys = Object.keys(this.values);
  return keys.length;

};
