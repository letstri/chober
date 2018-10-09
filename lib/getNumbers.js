/**
 * Get only numbers from string.
 *
 * @since 0.1.0
 * @param {String} string Some string, which from to pick only numbers.
 * @returns {String}
 *
 * @example
 * getNumbers('+7 (123) 456-78-90')
 * // => '71234567890'
 */
function getNumbers(string) {
  return string && string.toString().replace(/\D+/g, '');
}

export default getNumbers;
