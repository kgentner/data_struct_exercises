'use strict';

var expect = require('chai').expect;
var paren = require('../lib/findUnbalancedParen');
var pez = require('../lib/removeYellowPez');

describe('Find Unbalanced Parentheses', function() {
  it('gets an accurate output', function() {
    expect(paren('3+4*6(4+8')).to.eql(5);
  });
});

describe('Remove Yellow Pez', function() {
  it('gets an accurate output', function() {
    expect(pez(['r', 'y', 'w', 'r', 'r'])).to.eql(['r', 'w', 'r', 'r']);
  });
});
