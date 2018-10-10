/**
 * Preload an image by its path.
 *
 * @since 0.1.0
 * @param {String} imgPath Path of an image to preload.
 *
 * @example
 * preloadImage('some/path/to/img')
 */
function preloadImage(imgPath) {
  const img = new Image();

  img.src = imgPath;
}

export default preloadImage;
