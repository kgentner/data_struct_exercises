'use strict';
var Deque = require('./Deque');

var isPalindrome = function(str) {
  var d = new Deque();
  var first;
  var last;

  //load the deque with string elements
  for (var i = 0; i < str.length; i++) {
    d.addBack(str[i]);
  }
  //compare first and last elements to determine if palindrome
  while (d.dataStore.length > 1) {
    first = d.removeFront();
    last = d.removeBack();
    if (first !== last) {
      return false;
    }
  }
  return true;
};

module.exports = isPalindrome;
