'use strict';
var Stack = require('./Stack');

var findUnbalancedParen = function(str) {
  var s = new Stack();
  var s2 = new Stack();
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      s.push(str[i]);
      s2.push(i);
    } else if (str[i] === ')') {
      if (s.length() === 0) {
        s2.push(i);
        break;
      }
      s.pop();
      s2.pop();
    }
  }
  if (s2.length() === 0) {
    //The expression is balanced.
    return -1;
  } else {
    //'The paren at index s2.pop() has no match.
    return Number(s2.pop());
  }
};

module.exports = findUnbalancedParen;
