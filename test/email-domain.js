/**
 * Dependencies
 */

const test = require('tape')
const email = require('..')

test('should return null or undefined when no domain specified', assert => {
  assert.plan(1)
  assert.equal(email('hello@') == null, true)
})
