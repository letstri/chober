/**
 * Get object type.
 *
 * @since 0.2.0
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
function getType(item) {
  return Object.prototype.toString.call(item).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
}

export default getType;
