/**
 * Format number.
 *
 * @since 0.1.0
 * @param {Number|String} number
 * @param {String} symbol Symbol to be inserted. Default ` `.
 * @returns {Number}
 *
 * @example
 * formatNumer(1234)
 * // => '1 234'
 *
 * formatNumer('1234', ',')
 * // => '1,234'
 */
function formatNumber(number, symbol = ' ') {
  if (!number) {
    throw new Error('[chober]: number is not passed.');
  }

  return String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${symbol}`);
}

export default formatNumber;
