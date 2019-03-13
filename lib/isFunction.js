import getType from './getType';

/**
 * Checking the item for is a function.
 *
 * @since 1.3.0
 * @param {Any} item Item to check.
 * @returns {Boolean}
 *
 * @example
 * isFunction(() => {})
 * // => true
 *
 * isFunction(null)
 * // => false
 *
 * isFunction(false)
 * // => false
 *
 * isFunction([])
 * // => false
 */
function isFunction(item) {
  return getType(item) === 'function';
}

export default isFunction;
