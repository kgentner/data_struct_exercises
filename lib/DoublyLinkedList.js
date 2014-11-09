'use strict';
var DoublyListNode = require('./DoublyListNode');

var DoublyLinkedList = function() {
  this.head = new DoublyListNode('head');
};

DoublyLinkedList.prototype.dispReverse  = function() {
  var currNode = this.head;
  currNode = this.findLast();
  while (currNode.previous !== null) {
    console.log(currNode.element);
    currNode = currNode.previous;
  }
};

DoublyLinkedList.prototype.findLast  = function() {
  var currNode = this.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
};

DoublyLinkedList.prototype.remove = function(item) {
  var currNode = this.find(item);
  if (currNode.next !== null) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
};

DoublyLinkedList.prototype.display  = function() {
  var currNode = this.head;
  while (currNode.next !== null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
};

DoublyLinkedList.prototype.find  = function(item) {
  var currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
};

DoublyLinkedList.prototype.insert = function(newElement, item) {
  var newNode = new DoublyListNode(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
};

DoublyLinkedList.prototype.toString = function() {
  var currNode = this.head;
  var retStr = '';
  while (currNode.next !== null) {
    retStr += currNode.next.element + '\n';
    currNode = currNode.next;
  }
  return retStr;
};

//returns given node's location in the list
//(e.g. in a list A, B, C, D, E, node 'C' is the 3rd node. Returns 3)
DoublyLinkedList.prototype.show = function(item) {
  var currNode = this.head;
  var counter = 0;
  while (currNode.element !== item) {
    currNode = currNode.next;
    counter++;
  }
  return counter;
};

DoublyLinkedList.prototype.toHead = function(item, n) {
  if (n === 0) { return console.log('That was easy!');}

  var current = this.find(item);
  var temp = current;
  for (var i = 0; i <= n; i++) {
    if (current.previous.element === 'head') {
      throw ('Operation is out of bounds.');
    }
    current = current.previous;
  }
  this.remove(item);
  temp.next = current.next;
  temp.previous = current;
  current.next = temp;

};

module.exports = DoublyLinkedList;
