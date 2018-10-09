/**
 * Check is empty object, string, array or other type.
 *
 * @since 0.1.0
 * @param {*} item Some item to check.
 * @return {Boolean}
 *
 * @example
 *
 * isEmpty({ test: 'some value' })
 * // => false
 *
 * isEmpty([1, null, '3'])
 * // => false
 *
 * isEmpty('qwe')
 * // => false
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty(undefined)
 * // => true
 *
 * isEmpty(null)
 * // => true
 */
export default item => !(item && (item.length || Object.keys(item).length));
