/**
 * Get only numbers from string.
 *
 * @param {String} string Some string, which from to pick only numbers.
 * @return {String}
 *
 * @example
 *
 * getNumbers('+7 (123) 456-78-90') // '71234567890'
 */
export default string => string && string.toString().replace(/\D+/g, '');
