/**
 * Format number.
 *
 * @since 0.1.0
 * @param {Number|String} number
 * @param {String} symbol Symbol to be inserted. Default ` `.
 * @returns {Number}
 *
 * @example
 * formatNumber(1234)
 * // => '1 234'
 *
 * formatNumber('1234', ',')
 * // => '1,234'
 */
function formatNumber(number, symbol = ' ') {
  return String(number || 0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${symbol}`);
}

export default formatNumber;
