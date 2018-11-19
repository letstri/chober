/**
 * Chober.js - is a collection of useful methods that are used by programmers every day.
 * We decided to put all the methods together so as not to copy them from project to project.
 *
 * @author Valery Strelets
 * @see https://github.com/BrooonS/chober
 * @license https://github.com/BrooonS/chober/blob/master/LICENSE
 */

import { version } from './package';

/**
 * Import all methods.
 */
import isEmpty from './lib/isEmpty';
import isArray from './lib/isArray';
import isNumber from './lib/isNumber';
import isString from './lib/isString';
import isObject from './lib/isObject';
import isBoolean from './lib/isBoolean';
import isEqual from './lib/isEqual';
import isUndefined from './lib/isUndefined';
import getQuery from './lib/getQuery';
import getNumbers from './lib/getNumbers';
import getScrollbarWidth from './lib/getScrollbarWidth';
import getCookie from './lib/getCookie';
import getOffset from './lib/getOffset';
import getType from './lib/getType';
import setQuery from './lib/setQuery';
import setCookie from './lib/setCookie';
import removeCookie from './lib/removeCookie';
import decodeHtml from './lib/decondeHtml';
import clone from './lib/clone';
import invertObject from './lib/invertObject';
import first from './lib/first';
import flatten from './lib/flatten';
import formatNumber from './lib/formatNumber';
import debounce from './lib/debounce';
import scrollTo from './lib/scrollTo';
import uniq from './lib/uniq';

/**
 * Set version to constant.
 *
 * @constant
 */
const VERSION = version;

/**
 * Export all methods as a separate modules.
 */
export {
  VERSION,
  isEmpty,
  isArray,
  isNumber,
  isString,
  isObject,
  isBoolean,
  isEqual,
  isUndefined,
  getQuery,
  getNumbers,
  getScrollbarWidth,
  getCookie,
  getOffset,
  getType,
  setQuery,
  setCookie,
  removeCookie,
  decodeHtml,
  clone,
  invertObject,
  first,
  flatten,
  formatNumber,
  debounce,
  scrollTo,
  uniq,
};

/**
 * Export one module with all methods.
 */
class Chober {
  constructor() {
    Object.assign(this, {
      VERSION,
      isEmpty,
      isArray,
      isNumber,
      isString,
      isObject,
      isBoolean,
      isEqual,
      isUndefined,
      getQuery,
      getNumbers,
      getScrollbarWidth,
      getCookie,
      getOffset,
      getType,
      setQuery,
      setCookie,
      removeCookie,
      decodeHtml,
      clone,
      invertObject,
      first,
      flatten,
      formatNumber,
      debounce,
      scrollTo,
      uniq,
    });
  }
}

export default new Chober();
