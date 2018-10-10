/**
 * Get object type.
 *
 * @since 0.1.0
 * @param {Any} object Any type.
 * @returns {String}
 *
 * @example
 * getType({})
 * // => 'object'
 *
 * getType([])
 * // => 'array'
 */
function getType(object) {
  return Object.prototype.toString.call(object).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
}

export default getType;
