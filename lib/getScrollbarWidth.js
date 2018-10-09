/**
 * Get scrollbar width.
 *
 * @since 0.1.0
 * @returns {Number}
 */
function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

export default getScrollbarWidth;
