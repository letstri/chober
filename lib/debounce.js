import isUndefined from './isUndefined';

/**
 * Useful for implementing behavior that should only happen after a repeated action has completed.
 *
 * @since 0.1.0
 * @param {Function} func
 * @param {Number} delay
 * @returns {Function}
 *
 * @example
 * window.addEventListener('scroll', debounce(() => console.log(Math.random()), 100))
 */
function debounce(func, wait = 100) {
  if (isUndefined(func)) {
    throw new Error('[chober]: function is not passed.');
  }

  let timeout;
  let args;
  let context;
  let timestamp;
  let result;

  function later() {
    const last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      result = func.apply(context, args);
      args = null;
      context = args;
    }
  }

  return (...localArgs) => {
    context = this;
    args = localArgs;
    timestamp = Date.now();

    if (!timeout) {
      timeout = setTimeout(later, wait);
      result = func.apply(context, args);
      args = null;
      context = args;
    }

    return result;
  };
}

export default debounce;
