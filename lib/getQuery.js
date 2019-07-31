import isArray from './isArray';
import isNumber from './isNumber';
import isBoolean from './isBoolean';
import isNil from './isNil';

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
 * getQuery({ arrays: ['value'] })
 * // => { value: ['test'], field: 'hi' }
 *
 * // /?value=test&field=hi&value=123&test=true
 * getQuery()
 * // => { value: ['test', 123], field: 'hi', test: true }
 */
function getQuery({
  arrays = [],
  isParse = true,
} = {}) {
  const query = window.location.search.substr(1);
  let objectUrl = {};

  if (query === '') return {};

  // Set default array fields to objectUrl
  if (arrays.length !== 0) {
    objectUrl = arrays.reduce((object, field) => ({
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

  if (isParse) {
    const tryToParse = (item) => {
      try {
        const parsedItem = JSON.parse(item);

        return isNumber(parsedItem) || isBoolean(parsedItem) || isNil(parsedItem)
          ? parsedItem
          : item;
      } catch (err) {
        return item;
      }
    };

    objectUrl = Object.entries(objectUrl)
      .reduce((acc, [key, value]) => ({
        ...acc,
        [key]: isArray(value)
          ? value.map(item => tryToParse(item))
          : tryToParse(value),
      }), {});
  }

  return objectUrl;
}

export default getQuery;
