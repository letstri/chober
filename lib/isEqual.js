import isObject from './isObject';
import clone from './clone';

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
 * isEqual({ test: 'value' }, { test: 'value' })
 * // => true
 *
 * isEqual(true, false)
 * // => false
 */
function isEqual(firstItem, secondItem) {
  const prepareItem = (item) => {
    const clonedItem = clone(item);

    return isObject(clonedItem)
      ? Object.keys(clonedItem)
        .sort()
        .reduce((acc, name) => ({ ...acc, [name]: clonedItem[name] }), {})
      : clone(clonedItem);
  };

  return JSON.stringify(prepareItem(firstItem)) === JSON.stringify(prepareItem(secondItem));
}

export default isEqual;
