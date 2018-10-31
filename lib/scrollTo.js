/**
 * Scroll to element in DOM.
 *
 * @since 0.2.0
 * @param {DOMElement} element Element to which to scroll.
 *
 * @example
 * scrollTo(document.querySelector('.j-block'))
 */
function scrollTo(element) {
  if (!element) {
    throw new Error('[chober]: element is not passed.');
  }

  element.scrollIntoView({ behavior: 'smooth' });
}

export default scrollTo;
