/**
 * Remove cookie.
 *
 * @param {String} key Cookie name.
 * @return {Any}
 *
 * @example
 *
 * removeCookie('testCookie')
 */
export default (key) => {
  document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
