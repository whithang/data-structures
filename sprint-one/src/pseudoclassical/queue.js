var Queue = function() {
  this.values = {};
};

Queue.prototype.enqueue = function(value) {
  var keys = Object.keys(this.values);

  if (keys.length === 0) {
    this.values[0] = value;
  } else {
    this.values[JSON.parse(keys[keys.length - 1]) + 1] = value; 
  }
};

Queue.prototype.dequeue = function() {
  var keys = Object.keys(this.values);
  var popValue = this.values[keys[0]];
  delete this.values[keys[0]];
  return popValue;
};

Queue.prototype.size = function() {
  var keys = Object.keys(this.values);
  return keys.length;
};

var newQueue = new Queue();