'use strict';
var StudentLinkedList = require('./StudentLinkedList');

function gradeTracker(stud1, grade1, stud2, grade2, stud3, grade3) {
  var testOne = new StudentLinkedList();
  testOne.insertGrade(stud1, 'head', grade1);
  testOne.insertGrade(stud2, stud1, grade2);
  testOne.insertGrade(stud3, stud2, grade3);
  return testOne.displayGrades();
}

module.exports = gradeTracker;
