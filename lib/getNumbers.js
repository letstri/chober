/**
 * Get only numbers from string.
 *
 * @since 0.1.0
 * @param {String|Number} string Some string or number, which from to pick only numbers.
 * @returns {String}
 *
 * @example
 * getNumbers('+7 (123) 456-78-90')
 * // => '71234567890'
 */
function getNumbers(string) {
  if (!string) {
    return '';
  }

  return String(string).replace(/\D+/g, '');
}

export default getNumbers;
