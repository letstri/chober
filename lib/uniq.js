/**
 * Remove same values.
 *
 * @since 0.3.0
 * @param {Array.<String>} array Array of strings.
 * @return {Array}
 *
 * @example
 * uniq(['test', 'field', 'test'])
 * // => ['test', 'field']
 */
function uniq(array) {
  return array
    .filter((item, index, currentArray) => currentArray
      .indexOf(item) === index);
}

export default uniq;