var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue['values'] = {};

  return newQueue;
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
