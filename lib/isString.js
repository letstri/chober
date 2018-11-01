import getType from './getType';

/**
 * Checking the item for is a string.
 *
 * @since 1.0.0
 * @param {Any} item Item to check.
 * @returns {Boolean}
 *
 * @example
 * isString('string')
 * // => true
 *
 * isString([])
 * // => false
 */
function isString(item) {
  return getType(item) === 'string';
}

export default isString;
