 // Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = []; 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.nodes) {
    if (key === JSON.stringify(node)) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.nodes) {
    if (key === JSON.stringify(node)) {
      if (this.nodes[key].length > 0) {
        for (var i = 0; i < this.nodes[key].length; i++) {
          this.removeEdge(node, this.nodes[key][i]);
        }
      } 
      delete this.nodes[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var key in this.nodes) {
    if (key === JSON.stringify(fromNode) && this.nodes[key].length > 0) {
      for (var i = 0; i < this.nodes[key].length; i++) {
        if (this.nodes[key][i] === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var key in this.nodes) {
    if (key === JSON.stringify(fromNode)) {
      this.nodes[key].push(toNode);
    }
    if (key === JSON.stringify(toNode)) {
      this.nodes[key].push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this.nodes) {
    if (key === JSON.stringify(fromNode) || key === JSON.stringify(toNode)) {
      for (var i = 0; i < this.nodes[key].length; i++) {
        if (this.nodes[key][i] === toNode) {
          delete this.nodes[key][i];
        }
        if (this.nodes[key][i] === fromNode) {
          delete this.nodes[key][i];
        }
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(JSON.parse(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode: O(1);
  contains: O(n);
  removeNode: O(n^2);
  addEdge: O(n);
  removeEdge: O(n^2);
  forEachNode: O(n);
 */


