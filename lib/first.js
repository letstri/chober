/**
 * Returns the first item of array or `number` items.
 *
 * @param {Array} array
 * @param {Number} number Number of items to returns.
 * @returns {Array}
 *
 * @example
 *
 * first([1, null, '3'])
 * // => [1]
 *
 * first([1, null, '3'], 2)
 * // => [1, null]
 */
export default (array, number = 1) => (Array.isArray(array) ? array.slice(0, number) : []);
