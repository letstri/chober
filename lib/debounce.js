/**
 * Useful for implementing behavior that should only happen after a repeated action has completed.
 *
 * @since 0.1.0
 * @param {Function} func
 * @param {Number} delay
 * @returns {Function}
 *
 * @example
 * window.addEventListener('scroll', debounce(() => {
 *   console.log(Math.random());
 * }, 100));
 */
function debounce(func, delay) {
  let timer = null;

  return (...args) => {
    const onComplete = () => {
      func.apply(this, args);
      timer = null;
    };

    if (timer) clearTimeout(timer);

    timer = setTimeout(onComplete, delay);
  };
}

export default debounce;
