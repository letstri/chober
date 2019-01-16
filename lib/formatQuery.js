import getQuery from './getQuery';
import isEmpty from './isEmpty';
import isArray from './isArray';
import uniq from './uniq';
import flattenDeep from './flattenDeep';

/**
 * Format query for url.
 *
 * @since 1.3.0
 * @param {Object} query Object to parse in query.
 * @param {?Object} params Object with params.
 * @param {?Boolean} params.isSaveOld Does save old query. Default: false.
 * @param {?Boolean} params.isSaveEmptyFields Does save empty fields. Default: false.
 *
 * @example
 * formatQuery({ test: 'value' })
 * // => test=value
 *
 * formatQuery({ test: ['12', '34'] })
 * // => test=12&test=34
 *
 * // /?test=value&field=test
 * formatQuery({ test: 'field' }, { isSaveOld: true })
 * // => test=value&test=field&field=test
 */
function formatQuery(query, {
  isSaveOld = false,
  isSaveEmptyFields = false,
} = {}) {
  const { hasOwnProperty } = Object.prototype;

  const localQuery = query
    ? Object.entries(query).reduce((acc, field) => {
      const fieldName = field[0];
      const fieldValue = isArray(field[1])
        ? uniq(flattenDeep(field[1]).map(value => String(value)))
        : field[1];

      return { ...acc, [fieldName]: fieldValue };
    }, {})
    : {};
  const oldQuery = isSaveOld && getQuery();
  const mergedQueries = isSaveOld && Object.entries(localQuery).concat(Object.entries(oldQuery));
  const newQueryObject = isSaveOld && !isEmpty(oldQuery)
    ? mergedQueries.reduce((newQuery, [fieldName, fieldValue]) => {
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
  const queryString = Object.keys(newQueryObject)
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

  return queryString;
}

export default formatQuery;
