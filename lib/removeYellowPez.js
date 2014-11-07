'use strict';
var Stack = require('./Stack');

function removeYellowPez(arr) {
  var filteredArray = [];
  var keeper = new Stack();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 'y') {
      keeper.push(arr[i]);
    }
  }
  while (keeper.length() > 0) {
    filteredArray.unshift(keeper.pop());
  }
  return filteredArray;
}

module.exports = removeYellowPez;
