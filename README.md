# Chober.js
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0284a7a536b44fd4beeed40879aa7093)](https://app.codacy.com/app/BrooonS/chober?utm_source=github.com&utm_medium=referral&utm_content=BrooonS/chober&utm_campaign=Badge_Grade_Dashboard)
[![npm version](https://badge.fury.io/js/chober.svg)](https://brooons.github.io/chober/)
[![](https://data.jsdelivr.com/v1/package/npm/chober/badge)](https://www.jsdelivr.com/package/npm/chober)

[Docs](https://brooons.github.io/chober/) | [Licence](https://github.com/BrooonS/chober/blob/master/LICENSE)

> A collection of useful methods that are used by programmers every day. We decided to put all the methods together so as not to copy them from project to project.

## Quick start

Install with [npm](https://www.npmjs.com/package/chober).

```sh
npm i chober
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
<script src="https://cdn.jsdelivr.net/npm/chober@1.1.0/dist/chober.min.js"></script>
```

### npm

#### Import one method

```js
// ES6
import { isEmpty } from 'chober';
```

```js
// CommonJS
const { isEmpty } = require('chober');
```

```JS
isEmpty([]);
// => true
```

#### Import all library and use all methods

```js
// ES6
import _c from 'chober';
```

```js
// CommonJS
const _c = require('chober');
```

```js
_c.isEmpty([]);
// => true

_c.clone({ key: 'value' });
// => { key: 'value' }
```

#### Import only one method

If you import one method, other methods will not be imported.

```js
// ES6
import isEmpty from 'chober/lib/isEmpty'; // ~600B
```

```js
// CommonJS
const isEmpty = require('chober/lib/isEmpty'); // ~600B
```

```js
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

## Methods

All methods you can find in our [documentation](https://brooons.github.io/chober/).

---

&copy; Valery Strelets
