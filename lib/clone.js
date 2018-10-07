/**
 * Clone any item.
 *
 * @param {Any} item Some item to clone.
 * @return {Any}
 *
 * @example
 *
 * clone([1, null, '3']) // [1, null, '3']
 */
export default item => item && JSON.parse(JSON.stringify(item));
