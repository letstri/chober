import isString from './isString';
import isUndefined from './isUndefined';

/**
 * Get cookie.
 *
 * @since 0.1.0
 * @param {String} key Cookie name.
 * @returns {String}
 *
 * @example
 * getCookie('someCookie')
 */
function getCookie(key) {
  if (isUndefined(key)) {
    throw new Error('[chober]: key is not passed.');
  }

  if (!isString(key)) {
    throw new Error('[chober]: key must to be a string.');
  }

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${key}=`);

  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }

  return '';
}

export default getCookie;
