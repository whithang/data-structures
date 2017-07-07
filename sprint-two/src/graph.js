 // Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  //this.nodes.edge = [];
  //need to refactor everything to match this new object formatting
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.node = []; 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var values = Object.values(this.nodes);
  if (values.includes(node)) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.nodes) {
    if (this.nodes[key] === node) {
      delete this.nodes[key];
    }
  }
  //Later, refactor so that all edges are removed as well
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var key in this.nodes) {
    if (this.nodes.name === fromNode) {
      if (this.nodes.edge.includes(toNode)) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var key in this.nodes) {
    if (this.nodes.name === fromNode) {
      this.nodes.edge.push(toNode);
    }
    if (this.nodes.name === toNode) {
      this.nodes.edge.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var nodeIndex;
  for (var key in this.nodes) {
    if (this.nodes.name === fromNode) {
      nodeIndex = this.nodes.edge.indexOf(toNode);
      delete this.nodes.edge[nodeIndex];
    }
    if (this.nodes.name === toNode) {
      nodeIndex = this.nodes.edge.indexOf(fromNode);
      delete this.nodes.edge[nodeIndex];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


