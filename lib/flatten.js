import isArray from './isArray';

/**
 * Flatten an array.
 *
 * @since 1.2.0
 * @param {Array} array Array for flat.
 * @returns {Array}
 *
 * @example
 * flatten([123, [456, [567, [890]]]])
 * // => [123, 456, 567, 890]
 */
function flatten(array) {
  if (isArray(array)) {
    return array
      .reduce((acc, value) => (isArray(value)
        ? acc.concat(flatten(value))
        : acc.concat(value)), []);
  }

  return [];
}

export default flatten;
