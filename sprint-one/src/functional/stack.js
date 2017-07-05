var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  

  someInstance.push = function(value) {
    var keys = Object.keys(storage);
    storage[keys.length] = value; 
  };

  someInstance.pop = function() {
    var keys = Object.keys(storage);
    var popValue = storage[keys.length - 1];
    delete storage[keys.length - 1];
    return popValue;
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;
  };

  return someInstance;
};
