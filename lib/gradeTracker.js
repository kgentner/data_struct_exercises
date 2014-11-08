'use strict';
var SLList = require('./SLList');
var ListNode = require('./studentListNode');

SLList.prototype.insertGrade = function(newElement, item, grade) {
  var newNode = new ListNode(newElement, grade);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
};

SLList.prototype.displayGrades = function() {
  var currNode = this.head;
  var str = '';
  while (currNode.next !== null) {
    str += currNode.next.element + ':(' + currNode.next.grade + ') ';
    currNode = currNode.next;
  }
  return str;
};

function gradeTracker(stud1, grade1, stud2, grade2, stud3, grade3) {
  var testOne = new SLList();
  testOne.insertGrade(stud1, 'head', grade1);
  testOne.insertGrade(stud2, stud1, grade2);
  testOne.insertGrade(stud3, stud2, grade3);
  return testOne.displayGrades();
}

module.exports = gradeTracker;
