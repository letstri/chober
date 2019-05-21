import isUndefined from './isUndefined';
import isString from './isString';

/**
 * Scroll to element in DOM.
 *
 * @since 0.2.0
 * @param {DOMElement} item Selector or HTML element to which to scroll.
 *
 * @example
 * scrollTo(document.querySelector('.j-block'))
 */
function scrollTo(item) {
  if (isUndefined(item)) {
    throw new Error('[chober]: item is not passed.');
  }

  (isString(item) ? document.querySelector(item) : item)
    .scrollIntoView({ block: 'center', behavior: 'smooth', inline: 'end' });
}

export default scrollTo;
