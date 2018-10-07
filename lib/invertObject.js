/**
 * Invert object.
 *
 * @param {Object} object Some object to invert.
 * @return {Object}
 *
 * @example
 *
 * invertObject({ key: 'value' }) // { value: 'key' }
 */
export default object => object && Object.entries(object)
  .reduce((newObject, item) => ({
    ...newObject,
    [item[1]]: item[0],
  }), {});
