/**
 * Get query from url.
 *
 * @param {Array} arrayFields Fields that must be an arrays.
 * @return {Boolean}
 *
 * @example
 *
 * http://github.com/?value=test&field=hi&field=hello
 *
 * getQuery() // { value: 'test', field: ['hi', 'hello'] }
 */
export default (arrayFields = []) => {
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
    const item = part.split('=');

    // If item already exists, create an array with this item.
    if (Object.prototype.hasOwnProperty.call(objectUrl, item[0])) {
      if (Array.isArray(objectUrl[item[0]])) {
        objectUrl[item[0]].push(item[1]);
      } else {
        objectUrl[item[0]] = [objectUrl[item[0]], item[1]];
      }
    }

    // Decode URI if array and if only one key.
    if (Array.isArray(objectUrl[item[0]])) {
      objectUrl[item[0]].forEach((url, index) => {
        objectUrl[item[0]][index] = decodeURIComponent(objectUrl[item[0]][index]);
      });
    } else {
      objectUrl[item[0]] = decodeURIComponent(item[1]);
    }
  });

  return objectUrl;
};
