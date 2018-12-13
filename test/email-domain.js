/**
 * Dependencies
 */

const test = require('tape')
const email = require('..')

test('should return null or undefined when no domain specified', assert => {
  assert.plan(1)
  assert.equal(email('hello@') == null, true)
})


test('should return null or undefined when email string does not contain a @ character', assert => {
  assert.plan(2)
  assert.equal(email('hello') == null, true)
  assert.equal(email('hello', 'gmail.com') == null, true)
})
