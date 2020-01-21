import isUndefined from './isUndefined';
import isString from './isString';

/**
 * Scroll to element in DOM.
 *
 * @since 0.2.0
 * @param {String|HTMLElement} item Selector or HTML element to which to scroll.
 * @param {Boolean} isHorizontalEnabled Enable horizontal scroll. Default: false.
 *
 * @example
 * scrollTo(document.querySelector('.j-block'))
 *
 * scrollTo('.j-block')
 */
function scrollTo(item, isHorizontalEnabled = false) {
  if (isUndefined(item)) {
    throw new Error('[chober]: item is not passed.');
  }

  (isString(item) ? document.querySelector(item) : item)
    .scrollIntoView({
      block: 'center',
      inline: isHorizontalEnabled ? 'center' : 'nearest',
      behavior: 'smooth',
      left: 0,
    });
}

export default scrollTo;
