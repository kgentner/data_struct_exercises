'use strict';

var DListNode = function(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
};

module.exports = DListNode;
