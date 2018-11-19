import isArray from './isArray';
import clone from './clone';

/**
 * Remove same values from array.
 *
 * @since 0.3.0
 * @param {Array} array Array of values.
 * @return {Array}
 *
 * @example
 * uniq(['test', 'field', 'test'])
 * // => ['test', 'field']
 *
 * uniq([{ test: 'value' }, { test: 'value' }])
 * // => [{ test: 'value' }]
 *
 * uniq([['someValue'], ['someOtherValue'], ['someValue']])
 * // => [['someValue'], ['someOtherValue']]
 */
function uniq(array = []) {
  if (!isArray(array)) {
    throw new Error('[chober]: param must to be an array.');
  }

  const arrayOfStrings = clone(array).map(item => JSON.stringify(item));
  const filteredArray = arrayOfStrings.filter((item, index, currentArray) => currentArray
    .indexOf(item) === index);

  return filteredArray.map(item => JSON.parse(item));
}

export default uniq;
