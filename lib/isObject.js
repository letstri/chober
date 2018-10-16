import getType from './getType';

/**
 * Checking the item for is an object.
 *
 * @since 1.0.0
 * @param {Any} item Item to check.
 *
 * @example
 * isObject({})
 * // => true
 * isObject(123)
 * // => false
 */
function isObject(item) {
  return getType(item) === 'object';
}

export default isObject;
