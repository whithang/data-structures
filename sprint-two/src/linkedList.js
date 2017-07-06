var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (list.head === null) {
      this.head = node;  
    }
    if (list.tail !== null) {
      this.tail.next = node; 
    }
    this.tail = node;
  };

  list.removeHead = function() {
    var node = new Node();
    if (list.head !== null) {
      var removedHead = list.head.value;
      var nextHead = list.head.next;
      delete list.head;
      list.head = nextHead;
      return removedHead;
    }
  };

  list.contains = function(target) {
    if (list.head !== null) {
      if (list.head.value === target) {
        return true; 
      } else {
        var nextCheck = list.head.next;
        while (nextCheck !== null) {
          if (nextCheck.value === target) {
            return true;
          }
          nextCheck = nextCheck.next;
        }
      }
    }  
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
