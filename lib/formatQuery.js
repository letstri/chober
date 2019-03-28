import isObject from './isObject';
import isArray from './isArray';
/**
 * Get query from url.
 *
 * @since 0.1.0
 * @param {?Array} arrayFields Fields that must be arrays.
 * @returns {Object}
 *
 * @example
 * const query = { value: 'test', field: ['hi', 'hello'] };
 * formatQuery(query)
 * // => value=test&field=hi&field=hello
 *
 * const query = { value: ['test'], field: 'hi' }
 * formatQuery(query, true)
 * // => value[]=test&field=hi
 */
function formatQuery(object, isArrayShown = false) {
  if (!isObject(object)) {
    throw new Error('[chober]: param is not an object.');
  }

  return Object.entries(object)
    .map(([key, value]) => (isArray(value)
      ? value.map(item => `${key}${isArrayShown ? '[]' : ''}=${item}`).join('&')
      : `${key}=${value}`))
    .join('&');
}

export default formatQuery;
