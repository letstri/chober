/**
 * Invert object.
 *
 * @since 0.1.0
 * @param {Object} object Some object to invert.
 * @returns {Object}
 *
 * @example
 * invertObject({ key: 'value' })
 * // => { value: 'key' }
 */
function invertObject(object) {
  if (!object) {
    throw new Error('[chober]: object is not passed.');
  }

  return object && Object.entries(object)
    .reduce((newObject, item) => ({
      ...newObject,
      [item[1]]: item[0],
    }), {});
}

export default invertObject;
