'use strict';
var StudentListNode = require('./StudentListNode');

var StudentLinkedList = function() {
  this.head = new StudentListNode('head');
};

StudentLinkedList.prototype.find = function(item) {
  var currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
};

StudentLinkedList.prototype.insertGrade = function(newElement, item, grade) {
  var newNode = new StudentListNode(newElement, grade);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
};

StudentLinkedList.prototype.displayGrades = function() {
  var currNode = this.head;
  var str = '';
  while (currNode.next !== null) {
    str += currNode.next.element + ':(' + currNode.next.grade + ') ';
    currNode = currNode.next;
  }
  return str;
};

module.exports = StudentLinkedList;
