/*eslint no-unused-expressions:0 */
'use strict';

var Home = require('../home');

describe('Home View', function() {

  beforeEach(function() {
    this.home = new Home();
  });

  it('Should run a few assertions', function() {
    expect(this.home).to.exist;
  });

});
