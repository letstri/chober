import formatQuery from './formatQuery';

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
  const newQueryString = formatQuery(query, { isSaveOld, isSaveEmptyFields });
  const hash = isSaveHash && window.location.href.split('#')[1];

  window.history.pushState(
    {},
    document.title,
    newQueryString
      ? `?${decodeURIComponent(newQueryString)}${hash ? `#${hash}` : ''}`
      : window.location.href.split('?')[0].split('#')[0] + (hash ? `#${hash}` : ''),
  );
}

export default setQuery;
