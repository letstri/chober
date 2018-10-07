/**
 * Get cookie.
 *
 * @param {String} key Cookie name.
 * @return {String}
 *
 * @example
 *
 * getCookie('someCookie') //
 */
export default (key) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${key}=`);

  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }

  return '';
};
