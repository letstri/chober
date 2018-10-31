import getQuery from './getQuery';
import isEmpty from './isEmpty';
import getType from './getType';
import removeDuplicates from './removeDuplicates';

/**
 * Method to sum two numbers.
 *
 * @since 0.3.0
 * @param {Object} object Object to parse in url or object with params.
 * @param {Boolean} doesSaveOldQuery Whether to save the old query. Default: false.
 *
 * @example
 * setQuery({ test: 'value' })
 * // => /?test=value
 *
 * setQuery({ test: ['12', '34'] })
 * // => /?test=12&test=34
 *
 * // https://github.com/?test=value&field=test
 * setQuery({ test: 'field' }, true)
 * // => https://github.com/?test=value&test=field&field=test
 */
function setQuery(object, doesSaveOldQuery = false) {
  const oldQuery = getQuery();
  const mergedQueries = Object.entries(object).concat(Object.entries(oldQuery));
  const queryObject = doesSaveOldQuery && !isEmpty(oldQuery)
    ? mergedQueries.reduce((newQuery, field) => {
      const fieldName = field[0];
      const fieldValue = field[1];
      const isFieldExist = Object.prototype.hasOwnProperty.call(newQuery, fieldName);

      if (isFieldExist) {
        const textValue = newQuery[fieldName] === fieldValue
          ? fieldValue
          : [newQuery[fieldName], fieldValue];
        const arrayValue = getType(newQuery[fieldName]) === 'array'
          ? removeDuplicates(newQuery[fieldName].concat(fieldValue))
          : textValue;
        const newValue = getType(fieldValue) === 'array'
          ? removeDuplicates(fieldValue.concat(newQuery[fieldName]))
          : arrayValue;

        return {
          ...newQuery,
          [fieldName]: newValue,
        };
      }

      return {
        ...newQuery,
        [fieldName]: fieldValue,
      };
    }, {})
    : object;
  const queryString = Object.keys(queryObject)
    .map(key => (Array.isArray(queryObject[key])
      ? queryObject[key]
        .map(value => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&')
      : `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`))
    .join('&');

  window.history.pushState('', '', `?${decodeURIComponent(queryString)}`);
}

export default setQuery;
