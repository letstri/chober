import isUndefined from './isUndefined';

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
  if (isUndefined(element)) {
    throw new Error('[chober]: element is not passed.');
  }

  element.scrollIntoView({ block: 'center', behavior: 'smooth', inline: 'end' });
}

export default scrollTo;
