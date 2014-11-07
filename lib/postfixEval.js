'use strict';
var Stack = require('./Stack');

var postfixEval = function(str) {
  var operation = {
    '+': function(op1, op2) { return op1 + op2; },
    '-': function(op1, op2) { return op1 - op2; },
    '*': function(op1, op2) { return op1 * op2; },
    '/': function(op1, op2) { return op1 / op2; }
  };
  var s = new Stack();
  for (var i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      s.push(str[i]);
    } else {
      var opB = s.pop();
      var opA = s.pop();
      var result = operation[str[i]](opA, opB);
      s.push(result);
    }
  }
  return s.peek();
};

module.exports = postfixEval;
