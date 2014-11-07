'use strict';

var expect = require('chai').expect;
var pez = require('../lib/removeYellowPez');

describe('No Yellow Pez', function() {
  it('gets an accurate output', function() {
    expect(pez(['r', 'y', 'w', 'r', 'r'])).to.eql(['r', 'w', 'r', 'r']);
  });
});
