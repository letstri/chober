/**
 * Clone any item.
 *
 * @since 0.1.0
 * @param {Any} item Some item to clone.
 * @returns {*}
 *
 * @example
 * clone([1, null, '3'])
 * // => [1, null, '3']
 */
function clone(item) {
  return item && JSON.parse(JSON.stringify(item));
}

export default clone;
