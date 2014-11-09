'use strict';

var DoublyListNode = function(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
};

module.exports = DoublyListNode;
