'use strict'

var chai = require('chai');
var expect = chai.expect;

var myApp = require('../app/Getprimes.js');

describe("Get Primes tests ", function() {
  describe("Case for number 0 and 1", function() {

    it("should return '[]' for 1", function() {
      expect(myApp.getPrimes(1)).to.eql([]);
    })

    it("should return '[]' for 0", function() {
      expect(myApp.getPrimes(0)).to.eql([]);
    })

  })

  describe("Case for even numbers", function() {

    it("should return [2] for 2", function() {
      expect(myApp.getPrimes(2)).to.eql([2]);
    })

    it("should return [2,3,5,7] for 10", function() {
      expect(myApp.getPrimes(10)).to.eql([2,3,5,7]);
    })

  })

    describe("Case for odd numbers", function() {

    it("should return [2,3,5,7,11,13] for 15", function() {
      expect(myApp.getPrimes(15)).to.eql([2,3,5,7,11,13]);
    })

    it("should return [2,3] for 3", function() {
      expect(myApp.getPrimes(3)).to.eql([2,3]);
    })

  })

 
    
  

})