/**
 * Get scrollbar width.
 *
 * @since 0.1.0
 * @returns {Number}
 */
function getScrollbarWidth() {
  const outer = document.createElement('div');

  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.msOverflowStyle = 'scrollbar';

  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;

  outer.style.overflow = 'scroll';

  const inner = document.createElement('div');

  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;

  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
}

export default getScrollbarWidth;
