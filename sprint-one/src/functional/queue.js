var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage);

    if (keys.length === 0) {
      storage[0] = value;
    } else {
      storage[JSON.parse(keys[keys.length - 1]) + 1] = value; 
    }
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var popValue = storage[keys[0]];
    delete storage[keys[0]];
    return popValue;
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;
  };

  return someInstance;
};
