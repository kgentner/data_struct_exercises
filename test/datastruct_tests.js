'use strict';
var expect = require('chai').expect;

//stack exercises
var findUnbalancedParen = require('../lib/findUnbalancedParen');
var infixToPostfix = require('../lib/infixToPostfix');
var postfixEval = require('../lib/postfixEval');
var removeYellowPez = require('../lib/removeYellowPez');
//queue exercises
var Deque = require('../lib/Deque');
var isPalindrome = require('../lib/isPalindrome');
var Patient = require('../lib/Patient');
var ERQueue = require('../lib/ERQueue');
//linked list exercises
var SinglyLinkedList = require('../lib/SinglyLinkedList');
var DoublyLinkedList = require('../lib/DoublyLinkedList');
var grade = require('../lib/gradeTracker');

describe('Find Unbalanced Parentheses', function() {
  it('should get an accurate output', function() {
    expect(findUnbalancedParen('3+4*6(4+8')).to.eql(5);
  });
});

describe('Infix to Postfix Converter', function() {
  it('should get an accurate output', function() {
    expect(infixToPostfix ('2*(3+4*5)+6')).to.eql('2345*+*6+');
  });
});

describe('Postfix Evaluator', function() {
  it('should get an accurate output', function() {
    expect(postfixEval('2345*+*6+')).to.eql(52);
  });
});

describe('Remove Yellow Pez', function() {
  it('should get an accurate output', function() {
    expect(removeYellowPez(['r', 'y', 'w', 'r', 'r']))
    .to.eql(['r', 'w', 'r', 'r']);
  });
});

describe('Deque', function() {
  var d = new Deque();
  d.addBack('B');

  it('should add an item to the front', function() {
    d.addFront('A');
    expect(d.toString()).to.eql('A' + '\n' + 'B' + '\n');
  });

  it('should add an item to the back', function() {
    d.addBack('C');
    expect(d.toString()).to.eql('A' + '\n' + 'B' + '\n' + 'C' + '\n');
  });

  it('should remove an item from the front', function() {
    d.removeFront('A');
    expect(d.toString()).to.eql('B' + '\n' + 'C' + '\n');
  });

  it('should remove an item from the back', function() {
    d.removeBack('C');
    expect(d.toString()).to.eql('B' + '\n');
  });

});

describe('Palindrome Checker', function() {
  it('should get an accurate output', function() {
    expect(isPalindrome('racecar')).to.eql(true);
  });
});

describe('Emergency Room Priority Queue', function() {
  var erq = new ERQueue();
  var seen;
  var p = new Patient('Karl', 1);
  erq.enqueue(p);
  p = new Patient('Carlito', 6);
  erq.enqueue(p);
  p = new Patient('Carl', 3);
  erq.enqueue(p);

  it('should add new Patients to the queue', function() {
    expect(erq.toString())
    .to.eql('Karl code: 1\n' + 'Carlito code: 6\n' + 'Carl code: 3\n');
  });

  it('should treat the Patient with the highest code number', function() {
    seen = erq.dequeue();
    expect(seen[0].name).to.eql('Carlito');
  });

  it('should return a list of untreated patients', function() {
    expect(erq.toString()).to.eql('Karl code: 1\n' + 'Carl code: 3\n');
  });

});

describe('Singly Linked List', function() {
  var sll = new SinglyLinkedList();
  sll.insert('A', 'head');
  sll.insert('B', 'A');
  sll.insert('C', 'B');
  sll.insert('D', 'C');
  sll.insert('E', 'D');

  it('should advance an item toward the tail', function() {
    sll.toTail('B', 2);
    expect(sll.toString())
    .to.eql('A' + '\n' + 'C' + '\n' + 'D' + '\n' + 'B' + '\n' + 'E' + '\n');
  });

  it('should show a given node\'s location', function() {
    expect(sll.show('E')).to.eql(5);
  });

});

describe('Doubly Linked List', function() {
  var dll = new DoublyLinkedList();
  dll.insert('A', 'head');
  dll.insert('B', 'A');
  dll.insert('C', 'B');
  dll.insert('D', 'C');
  dll.insert('E', 'D');

  it('should move an item back toward the head', function() {
    dll.toHead('D', 2);
    expect(dll.toString())
    .to.eql('A' + '\n' + 'D' + '\n' + 'B' + '\n' + 'C' + '\n' + 'E' + '\n');
  });

});

describe('Grade Tracker', function() {
  it('should get an accurate output', function() {
    expect(grade('Karl', 'A', 'Chareesa', 'A', 'Stephanie', 'A'))
    .to.eql('Karl:(A) Chareesa:(A) Stephanie:(A) ');
  });
});
