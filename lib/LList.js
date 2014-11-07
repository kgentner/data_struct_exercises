'use strict';

var LList = function() {
  this.head = new Node('head');
};

LList.prototype.find = function(item) {
  var currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
};

LList.prototype.insert = function(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
};

LList.prototype.display = function() {
  var currNode = this.head;
  while (currNode.next !== null) {
    print(currNode.next.element);
    currNode = currNode.next;
  }
};

LList.prototype.findPrevious = function(item) {
  var currNode = this.head;
  while ((currNode.next !== null) && (currNode.next.element !== item)) {
    currNode = currNode.next;
  }
  return currNode;
};

LList.prototype.remove = function(item) {
  var prevNode = this.findPrevious(item);
  if (prevNode.next !== null) {
    prevNode.next = prevNode.next.next;
  }
};

module.exports = LList;
