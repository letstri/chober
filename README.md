# Chober.js
[![npm version](https://badge.fury.io/js/chober.svg)](https://brooons.github.io/chober/)
[![](https://data.jsdelivr.com/v1/package/npm/chober/badge)](https://www.jsdelivr.com/package/npm/chober)

[Docs](https://brooons.github.io/chober/) | [Licence](https://github.com/BrooonS/chober/blob/master/LICENSE)

> A collection of methods that are used by programmers every day. We decided to put all the methods together so as not to copy them from project to project.

## Quick start

Install with [npm](https://npmjs.com/).

```sh
$ npm i chober
```

or download and install with `script`.

```html
<script src="chober.min.js"></script>
```

or cdn

```html
<!-- Latest -->
<script src="https://cdn.jsdelivr.net/npm/chober/dist/chober.min.js"></script>

<!-- With version -->
<script src="https://cdn.jsdelivr.net/npm/chober@0.1.0/dist/chober.min.js"></script>
```

### npm

#### Import one method

```js
import { isEmpty } from 'chober';

isEmpty([]);
// => true
```

#### Import all library and use all methods

```js
import _c from 'chober';

_c.isEmpty([]);
// => true

_c.clone({ key: 'value' });
// => { key: 'value' }
```

#### Import only one method

If you import one method, other methods will not be imported.

```js
import isEmpty from 'chober/lib/isEmpty'; // ~600B

isEmpty([]);
// => true
```

### Browser

`_c` binds to the `window`.

```html
<script src="chober.min.js"></script>
```

```js
_c.isEmpty([]);
// => true
```

## Add your methods

If you want to add your methods, read the instructions below.

- Clone repository `git clone https://github.com/BrooonS/chober.git`.
- Add method to `lib` folder. Example: `lib/yourMethod.js`.
- Add comments to function params, if they exist.
- Import method to `index.js`.
- Run `npm run build` command.

**Example**

```js
// lib/yourMethod.js

/**
 * Method to sum two numbers.
 *
 * @param {Number} a First number.
 * @param {Number} b Second number.
 * @returns {Number}
 *
 * @example
 * math(2, 2)
 * // => 4
 */
function math(a, b) {
  return a + b;
}

export default math;
```

```js
// index.js

import yourMethod from './lib/yourMethod';

export {
  ... // other methods
  yourMethod,
};

class Chober {
  constructor() {
    Object.assign(this, {
      ... // other methods
      yourMethod,
    });
  }
}
```

## Methods

All methods you can find in our [documentation](https://brooons.github.io/chober/).

---

&copy; Valery Strelets
