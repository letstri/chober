/**
 * Get absolute coordinates of an element.
 *
 * @since 0.1.0
 * @param {HTMLelement} element Element to get coordinates of.
 * @returns {Object}
 *
 * @example
 * getOffset(document.querySelector('#element'))
 */
function getOffset(element) {
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
