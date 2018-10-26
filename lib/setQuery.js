import getQuery from './getQuery';
import isEmpty from './isEmpty';
import getType from './getType';
import uniq from './uniq';

/**
 * Set query to url.
 *
 * @since 0.3.0
 * @param {Object} object Object to parse in url.
 * @param {?Boolean} isSaveOldQuery Whether to save the old query. Default: false.
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
function setQuery(query, isSaveOldQuery = false) {
  if (!query) {
    throw new Error('[chober]: query is not passed.');
  }

  const oldQuery = getQuery();
  const mergedQueries = Object.entries(query).concat(Object.entries(oldQuery));
  const newQueryObject = isSaveOldQuery && !isEmpty(oldQuery)
    ? mergedQueries.reduce((newQuery, field) => {
      const fieldName = field[0];
      const fieldValue = field[1];
      const isFieldExist = Object.prototype.hasOwnProperty.call(newQuery, fieldName);

      if (isFieldExist) {
        const textValue = newQuery[fieldName] === fieldValue
          ? fieldValue
          : [newQuery[fieldName], fieldValue];
        const arrayValue = getType(newQuery[fieldName]) === 'array'
          ? uniq(newQuery[fieldName].concat(fieldValue))
          : textValue;
        const newValue = getType(fieldValue) === 'array'
          ? uniq(fieldValue.concat(newQuery[fieldName]))
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
    : query;
  const newQueryString = Object.keys(newQueryObject)
    .map((key) => {
      if (key === '&') return '';

      const fieldValue = key && newQueryObject[key]
        ? `${encodeURIComponent(key)}=${encodeURIComponent(newQueryObject[key])}`
        : '';

      return Array.isArray(newQueryObject[key])
        ? newQueryObject[key]
          .map(value => (value && key ? `${encodeURIComponent(key)}=${encodeURIComponent(value)}` : ''))
          .join('&')
        : fieldValue;
    })
    .filter(queryItem => queryItem) // Remove empty queries
    .join('&');

  window.history.pushState({}, document.title, newQueryString ? `?${decodeURIComponent(newQueryString)}` : '?');
}

export default setQuery;
