import isArray from './isArray';

/**
 * Get query from url.
 *
 * @since 0.1.0
 * @param {?Array} arrayFields Fields that must be arrays.
 * @returns {Object}
 *
 * @example
 * // /?value=test&field=hi&field=hello
 * getQuery()
 * // => { value: 'test', field: ['hi', 'hello'] }
 *
 * // /?value=test&field=hi
 * getQuery(['value'])
 * // => { value: ['test'], field: 'hi' }
 */
function getQuery(arrayFields = []) {
  const query = window.location.search.substr(1);
  let objectUrl = {};

  if (query === '') return {};

  // Set default array fields to objectUrl
  if (arrayFields.length !== 0) {
    objectUrl = arrayFields.reduce((object, field) => ({
      ...object,
      [field]: [],
    }), {});
  }

  query.split('&').forEach((part) => {
    if (!part) return;

    const [key, value] = part.split('=');

    // If item already exists, create an array with this item.
    if (Object.prototype.hasOwnProperty.call(objectUrl, key)) {
      if (isArray(objectUrl[key])) {
        objectUrl[key].push(value);
      } else {
        objectUrl[key] = [objectUrl[key], value];
      }
    }

    // Decode URI if array and if only one key.
    if (isArray(objectUrl[key])) {
      objectUrl[key].forEach((url, index) => {
        objectUrl[key][index] = decodeURIComponent(url);
      });
    } else {
      objectUrl[key] = decodeURIComponent(value);
    }
  });

  return objectUrl;
}

export default getQuery;
