# Chober.js
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0284a7a536b44fd4beeed40879aa7093)](https://app.codacy.com/app/BrooonS/chober?utm_source=github.com&utm_medium=referral&utm_content=BrooonS/chober&utm_campaign=Badge_Grade_Dashboard)
[![npm version](https://badge.fury.io/js/chober.svg)](https://brooons.github.io/chober/)
[![](https://data.jsdelivr.com/v1/package/npm/chober/badge)](https://www.jsdelivr.com/package/npm/chober)
[![](https://travis-ci.org/BrooonS/chober.svg?branch=master)](https://brooons.github.io/chober/)

<a class="github-button" href="https://github.com/BrooonS/chober" data-icon="octicon-star" data-show-count="true" aria-label="Star BrooonS/chober on GitHub">Star</a>
<a class="github-button" href="https://github.com/BrooonS/chober/subscription" data-icon="octicon-eye" data-show-count="true" aria-label="Watch BrooonS/chober on GitHub">Watch</a>

[Docs](https://brooons.github.io/chober/) | [Licence](https://github.com/BrooonS/chober/blob/master/LICENSE)

> A collection of useful methods that are used by programmers every day. We decided to put all the methods together so as not to copy them from project to project.

> You can try to write code in this page. Just open console and start writing.

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
<script src="https://cdn.jsdelivr.net/npm/chober@1.2.3/dist/chober.min.js"></script>
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

### clone

Clone any item.

#### Since
- 0.1.0

#### Params
- `item`
  - Type: `Any`
  - Description: *Some item to clone.*

#### Returns
- `Any`

#### Example
```JS
clone([1, null, '3'])// => [1, null, '3']
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/clone.js" target="_blank">Source code</a>
* * *
### debounce

Useful for implementing behavior that should only happen after a repeated action has completed.

#### Since
- 0.1.0

#### Params
- `func`
  - Type: `function`
  
- `delay`
  - Type: `Number`
  

#### Returns
- `function`

#### Example
```JS
window.addEventListener('scroll', debounce(() => console.log(Math.random()), 100))
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/debounce.js" target="_blank">Source code</a>
* * *
### decodeHtml

Decode a string that has special HTML entities

#### Since
- 1.1.0

#### Params
- `html`
  - Type: `String`
  - Description: *Html to decode.*

#### Returns
- `String`

#### Example
```JS
decodeHtml('<h1>Hi&nbsp;my&nbsp;friend!</h1>')// => '<h1>Hi my friend!</h1>'
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/decodeHtml.js" target="_blank">Source code</a>
* * *
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

#### Returns
- `Array`

#### Example
```JS
first([1, null, '3'])// => [1]first([1, null, '3'], 2)// => [1, null]
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/first.js" target="_blank">Source code</a>
* * *
### flattenDeep

Flatten an array.

#### Since
- 1.2.0

#### Params
- `array`
  - Type: `Array`
  - Description: *Array for flat.*

#### Returns
- `Array`

#### Example
```JS
flattenDeep([123, [456, [567, [890]]]])// => [123, 456, 567, 890]
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/flattenDeep.js" target="_blank">Source code</a>
* * *
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

#### Returns
- `Number`

#### Example
```JS
formatNumer(1234)// => '1 234'formatNumer('1234', ',')// => '1,234'
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/formatNumber.js" target="_blank">Source code</a>
* * *
### getCookie

Get cookie.

#### Since
- 0.1.0

#### Params
- `key`
  - Type: `String`
  - Description: *Cookie name.*

#### Returns
- `String`

#### Example
```JS
getCookie('someCookie')
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/getCookie.js" target="_blank">Source code</a>
* * *
### getNumbers

Get only numbers from string.

#### Since
- 0.1.0

#### Params
- `string`
  - Type: `String,Number`
  - Description: *Some string or number, which from to pick only numbers.*

#### Returns
- `String`

#### Example
```JS
getNumbers('+7 (123) 456-78-90')// => '71234567890'
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/getNumbers.js" target="_blank">Source code</a>
* * *
### getOffset

Get absolute coordinates of an element.

#### Since
- 0.1.0

#### Params
- `selector`
  - Type: `String`
  - Description: *Selector of HTML element to get coordinates of.*

#### Returns
- `Object`

#### Example
```JS
getOffset('#element').left// => 8
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/getOffset.js" target="_blank">Source code</a>
* * *
### getQuery

Get query from url.

#### Since
- 0.1.0

#### Params
- `arrayFields`
  - Type: `Array`
  - Description: *Fields that must be arrays.*

#### Returns
- `Object`

#### Example
```JS
// /?value=test&field=hi&field=hellogetQuery()// => { value: 'test', field: ['hi', 'hello'] }// /?value=test&field=higetQuery(['value'])// => { value: ['test'], field: 'hi' }
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/getQuery.js" target="_blank">Source code</a>
* * *
### getScrollbarWidth

Get scrollbar width.

#### Since
- 0.1.0


#### Returns
- `Number`

<a href="https://github.com/BrooonS/chober/blob/master/lib/getScrollbarWidth.js" target="_blank">Source code</a>
* * *
### getType

Get object type.

#### Since
- 0.2.0

#### Params
- `object`
  - Type: `Any`
  - Description: *Any type.*

#### Returns
- `String`

#### Example
```JS
getType({})// => 'object'getType([])// => 'array'
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/getType.js" target="_blank">Source code</a>
* * *
### invertObject

Invert object.

#### Since
- 0.1.0

#### Params
- `object`
  - Type: `Object`
  - Description: *Some object to invert.*

#### Returns
- `Object`

#### Example
```JS
invertObject({ key: 'value' })// => { value: 'key' }
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/invertObject.js" target="_blank">Source code</a>
* * *
### isArray

Checking the item for is an array.

#### Since
- 1.0.0

#### Params
- `item`
  - Type: `Any`
  - Description: *Item to check.*

#### Returns
- `Boolean`

#### Example
```JS
isArray([])// => trueisArray({})// => false
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/isArray.js" target="_blank">Source code</a>
* * *
### isBoolean

Checking the item for is a boolean.

#### Since
- 1.0.0

#### Params
- `item`
  - Type: `Any`
  - Description: *Item to check.*

#### Returns
- `Boolean`

#### Example
```JS
isBoolean(true)// => trueisBoolean([])// => false
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/isBoolean.js" target="_blank">Source code</a>
* * *
### isEmpty

Check is empty object, string, array or other type.

#### Since
- 0.1.0

#### Params
- `item`
  - Type: `Any`
  - Description: *Some item to check.*

#### Returns
- `Boolean`

#### Example
```JS
isEmpty({ test: 'some value' })// => falseisEmpty([1, null, '3'])// => falseisEmpty('qwe')// => falseisEmpty(true)// => trueisEmpty(1)// => trueisEmpty(undefined)// => trueisEmpty(null)// => true
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/isEmpty.js" target="_blank">Source code</a>
* * *
### isEqual

Checking is equal items.

#### Since
- 1.1.0

#### Params
- `firstItem`
  - Type: `Any`
  - Description: *First item to check.*
- `secondItem`
  - Type: `Any`
  - Description: *Second item to check.*

#### Returns
- `Boolean`

#### Example
```JS
isEqual([], [])// => trueisEqual({ test: 'value' }, { test: 'value' })// => trueisEqual(true, false)// => false
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/isEqual.js" target="_blank">Source code</a>
* * *
### isFunction

Checking the item for is a function.

#### Since
- 1.3.0

#### Params
- `item`
  - Type: `Any`
  - Description: *Item to check.*

#### Returns
- `Boolean`

#### Example
```JS
isFunction(() => {})// => trueisFunction(null)// => falseisFunction(false)// => falseisFunction([])// => false
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/isFunction.js" target="_blank">Source code</a>
* * *
### isNil

Checking the item for is a null or undefined.

#### Since
- 1.3.0

#### Params
- `item`
  - Type: `Any`
  - Description: *Item to check.*

#### Returns
- `Boolean`

#### Example
```JS
isNil(undefined)
// => true

isNil(null)
// => true

isNil(false)
// => false

isNil('')
// => false
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/isNil.js" target="_blank">Source code</a>
* * *
### isNumber

Checking the item for is a number.

#### Since
- 1.0.0

#### Params
- `item`
  - Type: `Any`
  - Description: *Item to check.*

#### Returns
- `Boolean`

#### Example
```JS
isNumber(123)// => trueisNumber([])// => false
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/isNumber.js" target="_blank">Source code</a>
* * *
### isObject

Checking the item for is an object.

#### Since
- 1.0.0

#### Params
- `item`
  - Type: `Any`
  - Description: *Item to check.*

#### Returns
- `Boolean`

#### Example
```JS
isObject({})// => trueisObject(123)// => false
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/isObject.js" target="_blank">Source code</a>
* * *
### isString

Checking the item for is a string.

#### Since
- 1.0.0

#### Params
- `item`
  - Type: `Any`
  - Description: *Item to check.*

#### Returns
- `Boolean`

#### Example
```JS
isString('string')// => trueisString([])// => false
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/isString.js" target="_blank">Source code</a>
* * *
### isUndefined

Checking the item for is a undefined.

#### Since
- 1.2.0

#### Params
- `item`
  - Type: `Any`
  - Description: *Item to check.*

#### Returns
- `Boolean`

#### Example
```JS
isUndefined(undefined)// => trueisUndefined('testValue')// => false
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/isUndefined.js" target="_blank">Source code</a>
* * *
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
<a href="https://github.com/BrooonS/chober/blob/master/lib/removeCookie.js" target="_blank">Source code</a>
* * *
### scrollTo

Scroll to element in DOM.

#### Since
- 0.2.0

#### Params
- `element`
  - Type: `DOMElement`
  - Description: *Element to which to scroll.*


#### Example
```JS
scrollTo(document.querySelector('.j-block'))
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/scrollTo.js" target="_blank">Source code</a>
* * *
### setCookie

Set cookie.

#### Since
- 0.1.0

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
<a href="https://github.com/BrooonS/chober/blob/master/lib/setCookie.js" target="_blank">Source code</a>
* * *
### setQuery

Set query to url.

#### Since
- 0.3.0

#### Params
- `query`
  - Type: `Object`
  - Description: *Object to parse in url.*
- `params`
  - Type: `Object`
  - Description: *Object with params.*
- `params.isSaveOld`
  - Type: `Boolean`
  - Description: *Does save old query. Default: false.*
- `params.isSaveHash`
  - Type: `Boolean`
  - Description: *Does save hash. Default: true.*
- `params.isSaveEmptyFields`
  - Type: `Boolean`
  - Description: *Does save empty fields. Default: false.*


#### Example
```JS
setQuery({ test: 'value' })// => /?test=valuesetQuery({ test: ['12', '34'] })// => /?test=12&test=34// /?test=value&field=testsetQuery({ test: 'field' }, { isSaveOld: true })// => /?test=value&test=field&field=test// /?test=value#someHashsetQuery({ test: 'value' }, { isSaveHash: false })// => /?test=value
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/setQuery.js" target="_blank">Source code</a>
* * *
### uniq

Remove same values from array.

#### Since
- 0.3.0

#### Params
- `array`
  - Type: `Array`
  - Description: *Array of values.*

#### Returns
- `Array`

#### Example
```JS
uniq(['test', 'field', 'test'])// => ['test', 'field']uniq([{ test: 'value' }, { test: 'value' }])// => [{ test: 'value' }]uniq([['someValue'], ['someOtherValue'], ['someValue']])// => [['someValue'], ['someOtherValue']]
```
<a href="https://github.com/BrooonS/chober/blob/master/lib/uniq.js" target="_blank">Source code</a>
* * *

&copy; Valery Strelets
