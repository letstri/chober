/**
 * Checking the item for is a null or undefined.
 *
 * @since 1.3.0
 * @param {Any} item Item to check.
 * @returns {Boolean}
 *
 * @example
 * isNil(undefined)
 * // => true
 *
 * isNil(null)
 * // => true
 *
 * isNil(false)
 * // => false
 *
 * isNil('')
 * // => false
 */
function isNil(item) {
  return item === undefined || item === null;
}

export default isNil;
