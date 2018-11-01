import isArray from './isArray';

/**
 * Get query from url.
 *
 * @since 0.1.0
 * @param {?Array} arrayFields Fields that must be arrays.
 * @returns {Object}
 *
 * @example
 * // http://github.com/?value=test&field=hi&field=hello
 * getQuery()
 * // => { value: 'test', field: ['hi', 'hello'] }
 */
function getQuery(arrayFields = []) {
  const query = window.location.search.substr(1);
  const objectUrl = {};

  if (!query) return {};

  // Set default array fields to objectUrl
  if (arrayFields.length) {
    Object.assign(objectUrl, arrayFields.reduce((object, field) => ({
      ...object,
      [field]: [],
    }), {}));
  }

  query.split('&').forEach((part) => {
    if (!part) return;

    const item = part.split('=');

    // If item already exists, create an array with this item.
    if (Object.prototype.hasOwnProperty.call(objectUrl, item[0])) {
      if (isArray(objectUrl[item[0]])) {
        objectUrl[item[0]].push(item[1]);
      } else {
        objectUrl[item[0]] = [objectUrl[item[0]], item[1]];
      }
    }

    // Decode URI if array and if only one key.
    if (isArray(objectUrl[item[0]])) {
      objectUrl[item[0]].forEach((url, index) => {
        objectUrl[item[0]][index] = decodeURIComponent(url);
      });
    } else {
      objectUrl[item[0]] = decodeURIComponent(item[1]);
    }
  });

  return objectUrl;
}

export default getQuery;
