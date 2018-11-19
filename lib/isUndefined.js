import getType from './getType';

/**
 * Checking the item for is a undefined.
 *
 * @since 1.2.0
 * @param {Any} item Item to check.
 * @returns {Boolean}
 *
 * @example
 * isUndefined(undefined)
 * // => true
 *
 * isUndefined('testValue')
 * // => false
 */
function isUndefined(item) {
  return getType(item) === 'undefined';
}

export default isUndefined;
