/**
 * Check is empty object or other type.
 *
 * @param {Any} item Some item to check.
 * @return {Boolean}
 *
 * @example
 *
 * isEmpty({ test: 'some value' }) // false
 * isEmpty([1, null, '3']) // false
 * isEmpty('qwe') // false
 * isEmpty(true) // true
 * isEmpty(1) // true
 * isEmpty(undefined) // true
 * isEmpty(null) // true
 */
export default item => !(item && Object.keys(item).length);
