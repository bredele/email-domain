/**
 * Dependencies
 */

const test = require('tape')
const email = require('..')

test('should return null or undefined when no domain specified', assert => {
  assert.plan(1)
  assert.equal(email('hello@') == null, true)
})

test('should return null or undefined if no email or domain specified', assert => {
  assert.plan(1)
  assert.equal(email() == null, true)
})

test('should return null or undefined when email string does not contain a @ character', assert => {
  assert.plan(2)
  assert.equal(email('hello') == null, true)
  assert.equal(email('hello', 'gmail.com') == null, true)
})

test('should create email address from email string containing a @ character and domain', assert => {
  assert.plan(1)
  assert.equal(email('hello@', 'gmail.com'), 'hello@gmail.com')
})

test('should create email address from incomplete address and domain', assert => {
  assert.plan(1)
  assert.equal(email('hello@gm', 'gmail.com'), 'hello@gmail.com')
})

test('should return null or undefined when the domain of the given email is not index of the given domain', assert => {
  assert.plan(1)
  assert.equal(email('hello@gm', 'gmail.com') == null, true)
})
