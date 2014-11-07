'use strict';
var Stack = require('./Stack');

var postfixEval = function(str) {
  var s = new Stack();
  for (var i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      s.push(str[i]);
    } else {
      var opB = s.pop();
      var opA = s.pop();
      var operator = str[i];
      //Is eval evil or evol?
      var result = eval(opA + operator + opB);
      s.push(result);
    }
  }
  return s.peek();
};

module.exports = postfixEval;
