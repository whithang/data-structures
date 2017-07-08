var BinarySearchTree = function(value) {
  this.left = null;
  this.right = null;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value) {
  //places in the tree in the correct position
  
  //instantiate a new binarysearchtree
    //if value is greater than this.value
      //set this.right equal to new search tree
    //else if value is less than this.value
      //set this.left equal to new search tree
     
};

BinarySearchTree.prototype.contains = function(value) {
  //returns a boolean

  //start with this and if equal to value
    //return true
    //if value greater than, look to the right recursively   
    //is less than, look to the left recursively
      
  //return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  //execute cb on every value contained in tree

  //start with this and run cb on it
    //if value to left is not null, recursively run
    //if value to the right is not null, recursively run
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
