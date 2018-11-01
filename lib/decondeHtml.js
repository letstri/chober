/**
 * Decode a string that has special HTML entities
 *
 * @since 1.1.0
 * @param {String} html Html to decode.
 * @returns {String}
 *
 * @example
 * decodeHtml('<h1>Hi&nbsp;my&nbsp;friend!</h1>')
 * // => '<h1>Hi my friend!</h1>'
 */
function decodeHtml(html) {
  const text = document.createElement('textarea');

  text.innerHTML = html;

  return text.value;
}

export default decodeHtml;
