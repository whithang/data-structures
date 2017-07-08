var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    //adds value to front of list
    var node = DoubleNode(value);
    // update previous of current head
    this.head.previous = node;
    // update next of new node
    node.next = this.head;
    // assign new node to the head
    this.head = node;
  };

  list.removeTail = function() {
    //removes last node from list and returns its value
    
    if (this.tail !== null) {
      var removedTail = this.tail.value;
      var nextTail = this.tail.previous;
      if (this.head === this.tail) {
        this.head = null;
      }
      this.tail = null;
      this.tail = nextTail;
      if (this.tail !== null) {
        this.tail.next.value = null;
      }
      return removedTail;
    }
  };

  list.addToTail = function(value) {
    var node = DoubleNode(value);
    if (this.head === null) {
      this.head = node;  
    }
    if (this.tail !== null) {
      this.tail.next = node; 
      node.previous = this.tail;
    }
    this.tail = node;
  };

  list.removeHead = function() {
    if (this.head !== null) {
      var removedHead = this.head.value;
      var nextHead = this.head.next;
      if (this.head === this.tail) {
        this.tail = null;
      }
      this.head = null;
      this.head = nextHead;
      if (this.head !== null) {
        this.head.previous.value = null;
      }
      return removedHead;
    }
  };

  list.contains = function(target) {
    if (this.head !== null) {
      if (this.head.value === target) {
        return true; 
      } else {
        var nextCheck = this.head.next;
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

var DoubleNode = function(value) {
  var doubleNode = {};

  doubleNode.value = value;
  doubleNode.next = null;
  doubleNode.previous = null;

  return doubleNode;
};