import isUndefined from './isUndefined';
import isString from './isString';

/**
 * Get absolute coordinates of an element.
 *
 * @since 0.1.0
 * @param {String} item Selector or HTML element to get coordinates of.
 * @returns {Object}
 *
 * @example
 * getOffset('#element').left
 * // => 8
 */
function getOffset(item) {
  if (isUndefined(item)) {
    throw new Error('[chober]: item is not passed.');
  }

  const element = isString(item)
    ? document.querySelector(item)
    : item;
  const rect = element.getBoundingClientRect();
  const scrollLeft = window.pageXOffset;
  const scrollTop = window.pageYOffset;

  return {
    x: rect.left + scrollLeft,
    y: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    top: rect.top + scrollTop,
    right: rect.right + scrollLeft,
    bottom: rect.bottom + scrollTop,
  };
}

export default getOffset;
