import getType from './getType';

/**
 * Checking the item for is a boolean.
 *
 * @since 1.0.0
 * @param {Any} item Item to check.
 *
 * @example
 * isBoolean(true)
 * // => true
 * isBoolean([])
 * // => false
 */
function isBoolean(item) {
  return getType(item) === 'boolean';
}

export default isBoolean;
