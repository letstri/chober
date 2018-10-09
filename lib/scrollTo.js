/**
 * Scroll to element in DOM.
 *
 * @param {String} selector Class or id.
 */
function scrollTo(selector) {
  document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}

export default scrollTo;
