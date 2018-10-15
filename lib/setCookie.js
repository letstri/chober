/**
 * Set cookie.
 *
 * @since 0.1.0
 * @param {String} key Cookie name.
 * @param {String} value Cookie value.
 * @param {?Number} expireIn Time in milliseconds to expire cookie.
 *
 * @example
 * setCookie('name', 'value', 60000) // 60000 - one minute
 */
function setCookie(key, value, expireIn = false) {
  const expirationDate = expireIn && new Date().getTime() + expireIn;
  const expirationDateString = expireIn && (new Date(expirationDate)).toUTCString();
  const mainPartCookie = `${key}=${value}; path=/`;
  const expirationPartCookie = `; expires=${expirationDateString}`;

  document.cookie = expireIn ? mainPartCookie : mainPartCookie + expirationPartCookie;
}

export default setCookie;
