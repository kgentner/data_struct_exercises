'use strict';
var Stack = require('./Stack');

// Refactored from solution at:
// http://interactivepython.org/runestone/static/pythonds/BasicDS/stacks.html
var infixToPostfix = function(str) {
  //map of operator precadence
  var prec = {
    '*': 3,
    '/': 3,
    '+': 2,
    '-': 2,
    '(': 1
   };
  var s = new Stack();
  var postfix = '';
  var current;

  for (var i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      postfix += str[i];
    } else if (str[i] === '(') {
      s.push(str[i]);
    } else if (str[i] === ')') {
      current = s.pop();
      while (current !== '(') {
        postfix += current;
        current = s.pop();
      }
    } else {
      while ((s.length() > 0) && (prec[s.peek()] >= prec[str[i]])) {
        postfix += s.pop();
      }
      s.push(str[i]);
    }
  }

  while (s.length() > 0) {
    postfix += s.pop();
  }
  return postfix;
};

module.exports = infixToPostfix;
