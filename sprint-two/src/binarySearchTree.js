var BinarySearchTree = function(value) {
  var tree = Object.create(treePrototype);
  tree.left = null;
  tree.right = null;
  tree.value = value;

  return tree;
};

var treePrototype = {};

treePrototype.insert = function(value) {
  //places in the tree in the correct position
  
  //instantiate a new binarysearchtree
  var newTree = BinarySearchTree(value);
    //if value is greater than this.value
      //if = null then
        //set this.right equal to new search tree
      // else recurse
    //else if value is less than this.value
      //if = null then
        //set this.left equal to new search tree
      // else recurse
  if (value > this.value) {
    if (this.right === null) {
      this.right = newTree;
      return;
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = newTree;
      return;
    } else {
      this.left.insert(value);
    }
  }  
};

treePrototype.contains = function(value) {
  //returns a boolean

  //start with this and if equal to value
  if (this.value === value) {
    return true;
  }

  if (value > this.value) {
    if (this.right !== null) {
      return this.right.contains(value);
    }
  } else if (value < this.value) {
    if (this.left !== null) {
      return this.left.contains(value);
    }
  }
  
  return false;
    //return true
    //if value greater than, look to the right recursively   
    //is less than, look to the left recursively
      
  //return false;
};

treePrototype.depthFirstLog = function(cb) {
  //execute cb on every value contained in tree

  //start with this and run cb on it
    //if value to left is not null, recursively run
    //if value to the right is not null, recursively run
  cb(this.value);

  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
  insert: O(log n)
  contains: O(log n)
  depthFirstLog: O(n)
 */
