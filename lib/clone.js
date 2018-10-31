/**
 * Clone any item.
 *
 * @since 0.1.0
 * @param {Any} item Some item to clone.
 * @returns {Any}
 *
 * @example
 * clone([1, null, '3'])
 * // => [1, null, '3']
 */
function clone(item) {
  if (!item) {
    throw new Error('[chober]: nothing to clone.');
  }

  return item && JSON.parse(JSON.stringify(item));
}

export default clone;
