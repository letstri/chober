/**
 * Chober.js - is a collection of methods that are used by programmers every day.
 * We decided to put all the methods together so as not to copy them from project to project.
 *
 * @author Valery Strelets
 * @see https://github.com/BrooonS/chober
 * @license https://github.com/BrooonS/chober/blob/master/LICENSE
 */

import { version } from './package';

// Import all methods.
import isset from './lib/isset';
import isEmpty from './lib/isEmpty';

// Set versio to constant.
const VERSION = version;

// Export all methods as a separate modules.
export {
  VERSION,
  isset,
  isEmpty,
};

// Export one module with all methods.
class Chober {
  constructor() {
    Object.assign(this, {
      VERSION,
      isset,
      isEmpty,
    });
  }
}

export default new Chober();
