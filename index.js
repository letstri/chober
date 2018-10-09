/**
 * Chober.js - is a collection of methods that are used by programmers every day.
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
import getQuery from './lib/getQuery';
import clone from './lib/clone';
import getNumbers from './lib/getNumbers';
import getScrollbarWidth from './lib/getScrollbarWidth';
import getCookie from './lib/getCookie';
import removeCookie from './lib/removeCookie';
import invertObject from './lib/invertObject';
import setCookie from './lib/setCookie';
import first from './lib/first';
import formatNumber from './lib/formatNumber';
import debounce from './lib/debounce';
import scrollTo from './lib/scrollTo';

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
  getQuery,
  clone,
  getNumbers,
  getScrollbarWidth,
  getCookie,
  removeCookie,
  invertObject,
  setCookie,
  first,
  formatNumber,
  debounce,
  scrollTo,
};

/**
 * Export one module with all methods.
 */
class Chober {
  constructor() {
    Object.assign(this, {
      VERSION,
      isEmpty,
      getQuery,
      clone,
      getNumbers,
      getScrollbarWidth,
      getCookie,
      removeCookie,
      invertObject,
      setCookie,
      first,
      formatNumber,
      debounce,
      scrollTo,
    });
  }
}

export default new Chober();
