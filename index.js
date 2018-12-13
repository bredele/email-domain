
/**
 * Create email address from given email string and domain.
 *
 * @param {String?} email (should contain at least a @)
 * @param {String?} domain
 * @return {String} or undefined/null
 * @api public
 */

module.exports = (email, domain) => {
  if (email && domain) {
    const [left, right] = email.split('@')
    if (right != null) {
      return left + '@' + domain
    }
  }
}
