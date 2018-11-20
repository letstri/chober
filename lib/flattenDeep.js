import isArray from './isArray';

/**
 * Flatten an array.
 *
 * @since 1.2.0
 * @param {Array} array Array for flat.
 * @returns {Array}
 *
 * @example
 * flattenDeep([123, [456, [567, [890]]]])
 * // => [123, 456, 567, 890]
 */
function flattenDeep(array) {
  if (isArray(array)) {
    return array
      .reduce((acc, value) => (isArray(value)
        ? acc.concat(flattenDeep(value))
        : acc.concat(value)), []);
  }

  return [];
}

export default flattenDeep;
