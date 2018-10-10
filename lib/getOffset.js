/**
 * Get absolute coordinates of an element.
 *
 * @since 0.1.0
 * @param {String} selector Selector of HTML element to get coordinates of.
 * @returns {Object}
 *
 * @example
 * getOffset('#element').left
 * // => 8
 */
function getOffset(selector) {
  const element = document.querySelector(selector);
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
