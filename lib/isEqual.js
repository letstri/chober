/**
 * Checking is equal items.
 *
 * @since 1.1.0
 * @param {Any} firstItem First item to check.
 * @param {Any} secondItem Second item to check.
 * @returns {Boolean}
 *
 * @example
 * isEqual([], [])
 * // => true
 *
 * isEqual({ test: 'value' }, { test: 'value' });
 * // => true
 *
 * isEqual(true, false);
 * // => false
 */
function isEqual(firstItem, secondItem) {
  return JSON.stringify(firstItem) === JSON.stringify(secondItem);
}

export default isEqual;
