/**
 * Format number.
 *
 * @since 0.1.0
 * @param {Number|String} number
 * @param {String} symbol Symbol to be inserted. Default ` `.
 * @returns {Number}
 *
 * @example
 *
 * formatNumer(1234)
 * // => '1 234'
 *
 * formatNumer('1234', ',')
 * // => '1,234'
 */
export default (number, symbol = ' ') => String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${symbol}`);
