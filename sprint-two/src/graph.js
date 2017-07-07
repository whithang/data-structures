 // Instantiate a new graph
var Graph = function() {
 
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = []; 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (key === JSON.stringify(node)) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this) {
    if (key === JSON.stringify(node)) {
      if (this[key].length > 0) {
        for (var i = 0; i < this[key].length; i++) {
          this.removeEdge(node, this[key][i]);
        }
      } 
      delete this[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var key in this) {
    if (key === JSON.stringify(fromNode) && this[key].length > 0) {
      for (var i = 0; i < this[key].length; i++) {
        if (this[key][i] === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var key in this) {
    if (key === JSON.stringify(fromNode)) {
      this[key].push(toNode);
    }
    if (key === JSON.stringify(toNode)) {
      this[key].push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this) {
    if (key === JSON.stringify(fromNode)) {
      for (var i = 0; i < this[key].length; i++) {
        if (this[key][i] === toNode) {
          delete this[key][i];
        }
      }
    }
    if (key === JSON.stringify(toNode)) {
      for (var i = 0; i < this[key].length; i++) {
        if (this[key][i] === fromNode) {
          delete this[key][i];
        }
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


