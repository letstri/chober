import isEmpty from './isEmpty';
import isUndefined from './isUndefined';
import isObject from './isObject';
import isArray from './isArray';

const CIRCULAR_NAME = '[Circular]';

/**
 * Clone any item.
 *
 * @since 0.1.0
 * @param {Any} item Some item to clone.
 * @returns {Any}
 *
 * @example
 * clone([1, null, '3'])
 * // => [1, null, '3']
 */
function clone(item) {
  if (isUndefined(item)) {
    throw new Error('[chober]: nothing to clone.');
  }

  const objectClone = (object) => {
    const getCircularKeys = Object.keys(object).reduce((acc, key) => {
      try {
        JSON.stringify(object[key]);

        return acc;
      } catch (error) {
        return [...acc, key];
      }
    }, []);
    const fixedObject = getCircularKeys
      .reduce((acc, key) => ({ ...acc, [key]: CIRCULAR_NAME }), object);

    return JSON.parse(JSON.stringify(fixedObject));
  };

  const arrayClone = (array) => {
    const getCircularIndexes = array.reduce((acc, arrayItem, index) => {
      try {
        JSON.stringify(arrayItem);

        return acc;
      } catch (error) {
        return [...acc, index];
      }
    }, []);
    const fixedArray = getCircularIndexes.reduce((acc, index) => {
      acc[index] = CIRCULAR_NAME;

      return acc;
    }, array);

    return JSON.parse(JSON.stringify(fixedArray));
  };

  try {
    return JSON.parse(JSON.stringify(item));
  } catch (error) {
    if (isObject(item)) {
      const fixedObject = objectClone(item);

      if (!isEmpty(fixedObject)) {
        return fixedObject;
      }
    }

    if (isArray(item)) {
      const fixedArray = arrayClone(item);

      if (!isEmpty(fixedArray)) {
        return fixedArray;
      }
    }

    throw new Error(error);
  }
}

export default clone;
