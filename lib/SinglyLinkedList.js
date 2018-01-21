'use strict';
var SinglyListNode = require('./SinglyListNode');

var SinglyLinkedList = function() {
  this.head = new SinglyListNode('head');
};

SinglyLinkedList.prototype.find = function(item) {
  var currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
};

SinglyLinkedList.prototype.insert = function(newElement, item) {
  var newNode = new SinglyListNode(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
};

SinglyLinkedList.prototype.display = function() {
  var currNode = this.head;
  while (currNode.next !== null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
};

SinglyLinkedList.prototype.findPrevious = function(item) {
  var currNode = this.head;
  while ((currNode.next !== null) && (currNode.next.element !== item)) {
    currNode = currNode.next;
  }
  return currNode;
};

SinglyLinkedList.prototype.remove = function(item) {
  var prevNode = this.findPrevious(item);
  if (prevNode.next !== null) {
    prevNode.next = prevNode.next.next;
  }
};

SinglyLinkedList.prototype.toString = function() {
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
SinglyLinkedList.prototype.show = function(item) {
  var currNode = this.head;
  var counter = 0;
  while (currNode.element !== item) {
    currNode = currNode.next;
    counter++;
  }
  return counter;
};

SinglyLinkedList.prototype.toTail = function(item, n) {
  if (n === 0) { return console.log('That was easy!');}

  var current = this.find(item);
  var temp = current;
  for (var i = 0; i < n; i++) {
    if (current.next === null) {
      throw ('Operation is out of bounds.');
    }
    current = current.next;
  }
  this.remove(item);
  temp.next = current.next;
  current.next = temp;
};

SinglyLinkedList.prototype.toHead = function(item, n) {
  if (n === 0) { return console.log('That was easy!');}

  var current = this.find(item);
  var temp = current;
  var previous = this.findPrevious(item);
  for (var i = 0; i < n; i++) {
    if (previous.element === 'head') {
      throw ('Operation is out of bounds.');
    }
    previous = this.findPrevious(previous.element);
  }
  this.remove(item);
  temp.next = previous.next;
  previous.next = temp;
};

module.exports = SinglyLinkedList;
