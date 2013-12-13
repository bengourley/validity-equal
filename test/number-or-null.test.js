var createValidator = require('../')
  , assert = require('assert')

/* global describe, it */

describe('Number or null validator', function () {

  it('should work with booleans (null)', function (done) {
    createValidator(true, 'fail')('agreedToTerms', 'waitTime', { agreedToTerms: null }, function (err, message) {
      assert(!err)
      assert.equal('fail', message)
      done()
    })
  })

  it('should work with booleans (false)', function (done) {
    createValidator(true, 'fail')('agreedToTerms', 'waitTime', { agreedToTerms: false }, function (err, message) {
      assert(!err)
      assert.equal('fail', message)
      done()
    })
  })

  it('should work with booleans (true)', function (done) {
    createValidator(true, 'fail')('agreedToTerms', 'waitTime', { agreedToTerms: true }, function (err, message) {
      assert(!err)
      assert(!message)
      done()
    })
  })

  it('should work with strings (null)', function (done) {
    createValidator('jim', 'fail')('agreedToTerms', 'waitTime', { agreedToTerms: null }, function (err, message) {
      assert(!err)
      assert.equal('fail', message)
      done()
    })
  })

  it('should work with booleans (not equal)', function (done) {
    createValidator('jim', 'fail')('agreedToTerms', 'waitTime', { agreedToTerms: 'foo' }, function (err, message) {
      assert(!err)
      assert.equal('fail', message)
      done()
    })
  })

  it('should work with booleans (equal)', function (done) {
    createValidator('jim', 'fail')('agreedToTerms', 'waitTime', { agreedToTerms: 'jim' }, function (err, message) {
      assert(!err)
      assert(!message)
      done()
    })
  })

})