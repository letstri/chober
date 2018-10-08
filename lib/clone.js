/**
 * Clone any item.
 *
 * @param {*} item Some item to clone.
 * @returns {*}
 *
 * @example
 *
 * clone([1, null, '3'])
 * // => [1, null, '3']
 */
export default item => item && JSON.parse(JSON.stringify(item));
