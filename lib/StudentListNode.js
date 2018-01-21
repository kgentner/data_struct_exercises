'use strict';

var StudentListNode = function(element, grade) {
  this.element = element;
  this.grade = grade;
  this.next = null;
};

module.exports = StudentListNode;
