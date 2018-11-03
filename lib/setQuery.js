import getQuery from './getQuery';
import isEmpty from './isEmpty';
import isArray from './isArray';
import uniq from './uniq';

/**
 * Set query to url.
 *
 * @since 0.3.0
 * @param {Object} query Object to parse in url.
 * @param {?Object} params Object with params.
 * @param {?Boolean} params.isSaveOld Does save old query. Default: false.
 * @param {?Boolean} params.isSaveHash Does save hash. Default: true.
 * @param {?Boolean} params.isSaveEmptyFields Does save empty fields. Default: false.
 *
 * @example
 * setQuery({ test: 'value' })
 * // => /?test=value
 *
 * setQuery({ test: ['12', '34'] })
 * // => /?test=12&test=34
 *
 * // /?test=value&field=test
 * setQuery({ test: 'field' }, { isSaveOld: true })
 * // => /?test=value&test=field&field=test
 *
 * // /?test=value#someHash
 * setQuery({ test: 'value' }, { isSaveHash: false })
 * // => /?test=value
 */
function setQuery(query, {
  isSaveOld = false,
  isSaveHash = true,
  isSaveEmptyFields = false,
} = {}) {
  const { hasOwnProperty } = Object.prototype;

  const localQuery = query || {};
  const oldQuery = isSaveOld && getQuery();
  const mergedQueries = Object.entries(localQuery).concat(Object.entries(oldQuery));
  const hash = isSaveHash && window.location.href.split('#')[1];
  const newQueryObject = isSaveOld && !isEmpty(oldQuery)
    ? mergedQueries.reduce((newQuery, field) => {
      const fieldName = field[0];
      const fieldValue = field[1];
      const isFieldExistInNewQuery = hasOwnProperty.call(newQuery, fieldName);
      const isFieldExistInOldQuery = hasOwnProperty.call(oldQuery, fieldName);

      if (isFieldExistInNewQuery && !isFieldExistInOldQuery) {
        const textValue = newQuery[fieldName] === fieldValue
          ? fieldValue
          : [newQuery[fieldName], fieldValue];
        const arrayValue = isArray(newQuery[fieldName])
          ? uniq(newQuery[fieldName].concat(fieldValue))
          : textValue;
        const newValue = isArray(fieldValue)
          ? uniq(fieldValue.concat(newQuery[fieldName]))
          : arrayValue;

        return {
          ...newQuery,
          [fieldName]: newValue,
        };
      }

      if (isFieldExistInNewQuery && isFieldExistInOldQuery) {
        return newQuery;
      }

      return {
        ...newQuery,
        [fieldName]: fieldValue,
      };
    }, {})
    : localQuery;
  const newQueryString = Object.keys(newQueryObject)
    .map((key) => {
      if (key === '&') return '';

      const value = newQueryObject[key];
      let fieldValue;

      if (isSaveEmptyFields) {
        fieldValue = key
          ? `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          : '';
      } else {
        fieldValue = key && value
          ? `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          : '';
      }

      return isArray(value)
        ? value.map((arrayValue) => {
          if (isSaveEmptyFields) {
            return key ? `${encodeURIComponent(key)}=${encodeURIComponent(arrayValue)}` : '';
          }

          return key && arrayValue ? `${encodeURIComponent(key)}=${encodeURIComponent(arrayValue)}` : '';
        })
          .filter(queryItem => queryItem) // Remove empty queries
          .join('&')
        : fieldValue;
    })
    .filter(queryItem => queryItem) // Remove empty queries
    .join('&');

  window.history.pushState(
    {},
    document.title,
    newQueryString
      ? `?${decodeURIComponent(newQueryString)}${hash ? `#${hash}` : ''}`
      : window.location.href.split('?')[0].split('#')[0] + (hash ? `#${hash}` : ''),
  );
}

export default setQuery;
