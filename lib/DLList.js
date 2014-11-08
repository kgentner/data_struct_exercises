'use strict';
var DListNode = require('./DListNode');

var DLList = function() {
  this.head = new DListNode('head');
};

DLList.prototype.dispReverse  = function() {
  var currNode = this.head;
  currNode = this.findLast();
  while (currNode.previous !== null) {
    console.log(currNode.element);
    currNode = currNode.previous;
  }
};

DLList.prototype.findLast  = function() {
  var currNode = this.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
};

DLList.prototype.remove = function(item) {
  var currNode = this.find(item);
  if (currNode.next !== null) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
};

// findPrevious is no longer needed
/*function findPrevious(item) {
   var currNode = this.head;
   while (!(currNode.next === null) &&
           (currNode.next.element != item)) {
      currNode = currNode.next;
}
   return currNode;
}*/

DLList.prototype.display  = function() {
  var currNode = this.head;
  while (currNode.next !== null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
};

DLList.prototype.find  = function(item) {
  var currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
};

DLList.prototype.insert = function(newElement, item) {
  var newNode = new DListNode(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
};

// DLList.prototype.toTail = function(item, n) {
//   if (n === 0) { return console.log('That was easy!');}

//   var current = this.find(item);
//   var temp = current;
//   for (var i = 0; i < n; i++) {
//     if (current.next === null) {
//       throw ('Operation is out of bounds.');
//     }
//     current = current.next;
//   }
//   this.remove(item);
//   temp.next = current.next;
//   current.next = temp;
// };

DLList.prototype.toHead = function(item, n) {
  if (n === 0) { return console.log('That was easy!');}

  var current = this.find(item);
  var temp = current;
  for (var i = 0; i <= n; i++) {
    if (current.previous.element === 'head') {
      throw ('Operation is out of bounds.');
    }
    current = current.previous;
  }
  this.remove(item);
  temp.next = current.next;
  temp.previous = current;
  current.next = temp;

};

DLList.prototype.show = function(item) {
  var currNode = this.head;
  var counter = 0;
  while (currNode.element !== item) {
    currNode = currNode.next;
    counter++;
  }
  console.log('The location of ' + item +
    ' is ' + counter + ' nodes away from the head.');
};

var l = new DLList();
l.insert('A', 'head');
l.insert('B', 'A');
l.insert('C', 'B');
l.insert('D', 'C');
l.insert('E', 'D');

l.display();
console.log('--------------');
// l.toHead('D', 2);
// l.display();
l.show('D');

module.export = DLList;
