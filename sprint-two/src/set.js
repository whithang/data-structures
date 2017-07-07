var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.indexOf(item) === -1) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) === -1) {
    return false;
  } else {
    return true;
  }
};

setPrototype.remove = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    delete this._storage[this._storage.indexOf(item)];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  add: O(n)
  contains: O(n)
  remove: O(n)
 */
