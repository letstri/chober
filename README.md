# Chober.js

[Docs](https://brooons.github.io/chober/)

> A collection of methods that are used by programmers every day. We decided to put all the methods together so as not to copy them from project to project.

## Quick start

Install with [npm](https://npmjs.com/).

```sh
$ npm i chober
```

or nstall with `script`.

```html
<script src="chober.min.js"></script>
```

### npm

#### One method.

```js
import { isEmpty } from 'chober';

isEmpty([]);
// => true
```

#### Get all library and use all methods

```js
import _c from 'chober';

_c.isEmpty([]);
// => true

_c.clone({ key: 'value' });
// => { key: 'value' }
```

#### Import only one method.

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

* * *

## Methods

### clone

Clone any item.

#### Since
- 0.1.0

#### Params
- `item`
  - Type: `Any`
  - Description: *Some item to clone.*

#### Example
```JS
clone([1, null, '3'])
// => [1, null, '3']
```

### debounce

Useful for implementing behavior that should only happen after a repeated action has completed.

#### Since
- 0.1.0

#### Params
- `func`
  - Type: `function`
  
- `delay`
  - Type: `Number`
  

#### Example
```JS
window.addEventListener('scroll', debounce(() => {
  console.log(Math.random());
}, 100));
```

### first

Returns the first item of array or &#x60;number&#x60; items.

#### Since
- 0.1.0

#### Params
- `array`
  - Type: `Array`
  
- `number`
  - Type: `Number`
  - Description: *Number of items to returns.*

#### Example
```JS
first([1, null, '3'])
// => [1]

first([1, null, '3'], 2)
// => [1, null]
```

### formatNumber

Format number.

#### Since
- 0.1.0

#### Params
- `number`
  - Type: `Number,String`
  
- `symbol`
  - Type: `String`
  - Description: *Symbol to be inserted. Default &#x60; &#x60;.*

#### Example
```JS
formatNumer(1234)// => '1 234'formatNumer('1234', ',')// => '1,234'
```

### getCookie

Get cookie.

#### Since
- 0.1.0

#### Params
- `key`
  - Type: `String`
  - Description: *Cookie name.*

#### Example
```JS
getCookie('someCookie')
```

### getNumbers

Get only numbers from string.

#### Since
- 0.1.0

#### Params
- `string`
  - Type: `String`
  - Description: *Some string, which from to pick only numbers.*

#### Example
```JS
getNumbers('+7 (123) 456-78-90')
// => '71234567890'
```

### getOffset

Get absolute coordinates of an element.

#### Since
- 0.1.0

#### Params
- `element`
  - Type: `HTMLelement`
  - Description: *Element to get coordinates of.*

#### Example
```JS
getOffset(document.querySelector('#element'))
```

### getQuery

Get query from url.

#### Since
- 0.1.0

#### Params
- `arrayFields`
  - Type: `Array`
  - Description: *Fields that must be an arrays.*

#### Example
```JS
// http://github.com/?value=test&field=hi&field=hello

getQuery()
// => { value: 'test', field: ['hi', 'hello'] }
```

### getScrollbarWidth

Get scrollbar width.

#### Since
- 0.1.0



### invertObject

Invert object.

#### Since
- 0.1.0

#### Params
- `object`
  - Type: `Object`
  - Description: *Some object to invert.*

#### Example
```JS
invertObject({ key: 'value' })
// => { value: 'key' }
```

### isEmpty

Check is empty object, string, array or other type.

#### Since
- 0.1.0

#### Params
- `item`
  - Type: `*`
  - Description: *Some item to check.*

#### Example
```JS
isEmpty({ test: 'some value' })
// => false

isEmpty([1, null, '3'])
// => false

isEmpty('qwe')
// => false

isEmpty(true)
// => true

isEmpty(1)
// => true

isEmpty(undefined)
// => true

isEmpty(null)
// => true
```

### preloadImage

Preload an image by its path.

#### Since
- 0.1.0

#### Params
- `imgPath`
  - Type: `String`
  - Description: *Path of an image to preload.*

#### Example
```JS
preloadImage('some/path/to/img')
```

### removeCookie

Remove cookie.

#### Since
- 0.1.0

#### Params
- `key`
  - Type: `String`
  - Description: *Cookie name.*

#### Example
```JS
removeCookie('testCookie')
```

### scrollTo

Scroll to element in DOM.


#### Params
- `selector`
  - Type: `String`
  - Description: *Class or id.*


### setCookie

Set cookie.


#### Params
- `key`
  - Type: `String`
  - Description: *Cookie name.*
- `value`
  - Type: `String`
  - Description: *Cookie value.*
- `expireIn`
  - Type: `Number`
  - Description: *Time in milliseconds to expire cookie.*

#### Example
```JS
setCookie('name', 'value', 60000) // 60000 - one minute
```


* * *

&copy; Valery Strelets
