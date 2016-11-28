'use strict'

var chai = require('chai');
var expect = chai.expect;

var myApp = require('../app/Getprimes.js');




describe("Generating prime number tests", function() {



    it("should return `[2, 3, 5, 7, 11,13]` for `15`", function() {
      expect(myApp.getPrimes(15)).to.equal([2, 3, 5, 7, 11,13]);
    });

    it("should return `[2,3,5,7]` for `10`", function() {
      expect(myApp.getPrimes(10)).to.equal([2,3,5,7]);
    });

    

  });
