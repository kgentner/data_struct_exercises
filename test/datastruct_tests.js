'use strict';

var expect = require('chai').expect;
var paren = require('../lib/findUnbalancedParen');
var fixer = require('../lib/infixToPostfix');
var evalPost = require('../lib/postfixEval');
var pez = require('../lib/removeYellowPez');
var pal = require('../lib/isPalindrome');
var grade = require('../lib/gradeTracker');

describe('Find Unbalanced Parentheses', function() {
  it('gets an accurate output', function() {
    expect(paren('3+4*6(4+8')).to.eql(5);
  });
});

describe('Infix to Postfix Converter', function() {
  it('gets an accurate output', function() {
    expect(fixer('2*(3+4*5)+6')).to.eql('2345*+*6+');
  });
});

describe('Postfix Evaluator', function() {
  it('gets an accurate output', function() {
    expect(evalPost('2345*+*6+')).to.eql(52);
  });
});

describe('Remove Yellow Pez', function() {
  it('gets an accurate output', function() {
    expect(pez(['r', 'y', 'w', 'r', 'r'])).to.eql(['r', 'w', 'r', 'r']);
  });
});

describe('Palindrome Checker', function() {
  it('gets an accurate output', function() {
    expect(pal('racecar')).to.eql(true);
  });
});

describe('Grade Tracker', function() {
  it('gets an accurate output', function() {
    expect(grade('Karl', 'A', 'Chareesa', 'A', 'Stephanie', 'A'))
    .to.eql('Karl:(A) Chareesa:(A) Stephanie:(A) ');
  });
});
