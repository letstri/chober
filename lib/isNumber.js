import getType from './getType';

/**
 * Checking the item for is a number.
 *
 * @since 1.0.0
 * @param {Any} item Item to check.
 *
 * @example
 * isNumber(123)
 * // => true
 *
 * isNumber([])
 * // => false
 */
function isNumber(item) {
  return getType(item) === 'number';
}

export default isNumber;
