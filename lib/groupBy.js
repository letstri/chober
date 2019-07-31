import isUndefined from './isUndefined';
import isArray from './isArray';

/**
 * Group items of an array by their specific property.
 *
 * @since 2.0.0
 * @param {Array} arr An array/collection to group.
 * @param {String} param A parameter of array's item to group by.
 * @param {Boolean} withoutKeys Remove keys from object and get an array.
 * @returns {Object}
 *
 * @example
 * const array = [
 *   { id: 1, prop1: 'a', prop2: ['d', 'y'] },
 *   { id: 2, prop1: 'a', prop2: 'c' },
 *   { id: 3, prop1: 'b', prop2: 'd' },
 * ];
 *
 * groupBy(array, 'prop2');
 * // => {
 * //   d: [
 * //     { id: 1, prop1: 'a', prop2: ['d',  'y'] },
 * //     { id: 3, prop1: 'b', prop2: 'd' }
 * //   ],
 * //   y: [
 * //     { id: 1, prop1: 'a', prop2: ['d', 'y'] }
 * //   ],
 * //   c: [
 * //     { id: 2, prop1: 'a', prop2: 'c' }
 * //   ]
 * // }
 *
 * groupBy(array, 'prop1', true);
 * // => [
 * //   [
 * //     { id: 1, prop1: 'a', prop2: ['d', 'y'] },
 * //     { id: 2, prop1: 'a', prop2: 'c' },
 * //   ],
 * //   [
 * //     { id: 3, prop1: 'b', prop2: 'd' },
 * //   ],
 * // ]
 */
function groupBy(arr, param, withoutKeys = false) {
  if (isUndefined(param)) {
    throw new Error('[chober]: param is not passed.');
  }

  const groupedObject = arr.reduce((obj, item) => {
    const value = item[param];

    return {
      ...obj,
      ...(!isArray(value)
        ? {
          [value]: [
            ...(obj[value] || []),
            item,
          ],
        }
        : (
          value.reduce((obj2, param2) => ({
            ...obj2,
            [param2]: [
              ...(obj2[param2] || []),
              item,
            ],
          }), obj)
        )
      ),
    };
  }, {});

  return withoutKeys ? Object.values(groupedObject) : groupedObject;
}

export default groupBy;
