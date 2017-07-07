
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket;

  if (this.retrieve(k) === undefined) {
    bucket = [];
  } else {
    bucket = this._storage.get(index);
  }

  var tuple = this._storage.set(0, [k, v]);
  bucket.push(tuple);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    if (this._storage.get(index).length === 1) {
      return this._storage.get(index)[0][1];
    } else {
      //update for multiple items
    }
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.delete(index); 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


