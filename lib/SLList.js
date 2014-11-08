'use strict';
var ListNode = require('./studentListNode');

var SLList = function() {
  this.head = new ListNode('head');
};

SLList.prototype.find = function(item) {
  var currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
};

SLList.prototype.insert = function(newElement, item) {
  var newNode = new ListNode(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
};

SLList.prototype.display = function() {
  var currNode = this.head;
  while (currNode.next !== null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
};

SLList.prototype.findPrevious = function(item) {
  var currNode = this.head;
  while ((currNode.next !== null) && (currNode.next.element !== item)) {
    currNode = currNode.next;
  }
  return currNode;
};

SLList.prototype.remove = function(item) {
  var prevNode = this.findPrevious(item);
  if (prevNode.next !== null) {
    prevNode.next = prevNode.next.next;
  }
};

SLList.prototype.show = function(item) {
  var currNode = this.head;
  var counter = 0;
  while (currNode.element !== item) {
    currNode = currNode.next;
    counter++;
  }
  //console.log('The location of ' + item +
  //  ' is ' + counter + ' nodes away from the head.');
  return currNode;
};

SLList.prototype.toTail = function(item, n) {
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

SLList.prototype.toHead = function(item, n) {
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

module.exports = SLList;
