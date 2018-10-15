/**
 * Scroll to element in DOM.
 *
 * @since 0.2.0
 * @param {String} selector Class or id.
 */
function scrollTo(selector) {
  document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}

export default scrollTo;
