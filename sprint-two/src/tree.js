var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  extend(newTree, treeMethods);
  newTree.children = []; 

  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create the child = a new tree
  //tree value = value
  //tied to what created it with this
  //add to this.children array
  var newTree = new Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var childrenTest;
  var result = false;
  if (arguments.length === 1) {
    childrenTest = this.children;
  } else {
    childrenTest = arguments[1];
  }

  if (this.value === target) {
    return true;
  }
  
  if (childrenTest.length > 0) {
    for (var i = 0; i < childrenTest.length; i++) {
      
      if (childrenTest[i].value === target) {
        return true;
      }
      if (childrenTest[i].children.length > 0) {
        result = childrenTest[i].contains(target, this.children[i].children);
        if (result === true) {
          return result;
        }
      }
    }
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
  extend: O(n);
  addChild: O(1);
  contains: O(n^2);
 */
