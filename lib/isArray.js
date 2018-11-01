import getType from './getType';

/**
 * Checking the item for is an array.
 *
 * @since 1.0.0
 * @param {Any} item Item to check.
 * @returns {Boolean}
 *
 * @example
 * isArray([])
 * // => true
 *
 * isArray({})
 * // => false
 */
function isArray(item) {
  return getType(item) === 'array';
}

export default isArray;
