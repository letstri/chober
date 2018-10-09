/**
 * Set cookie.
 *
 * @param {String} key Cookie name.
 * @param {String} value Cookie value.
 * @param {?Number} expireIn Time in milliseconds to expire cookie.
 *
 * @example
 *
 * setCookie('name', 'value', 60000) // 60000 - one minute
 */
export default (key, value, expireIn = false) => {
  const expirationDate = expireIn && new Date().getTime() + expireIn;
  const expirationDateString = expireIn && (new Date(expirationDate)).toUTCString();
  const mainPartCookie = `${key}=${value}; path=/`;
  const expirationPartCookie = `; expires=${expirationDateString}`;

  document.cookie = expireIn ? mainPartCookie : mainPartCookie + expirationPartCookie;
};
