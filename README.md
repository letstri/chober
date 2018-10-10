# Chober.js

> A collection of methods that are used by programmers every day. We decided to put all the methods together so as not to copy them from project to project.

## Quick start

Install with [npm](https://npmjs.com/).

```sh
$ npm i chober
```

Install with `script`.

```html
<script src="chober.min.js"></script>
```

# Usage


## clone

> Clone any item.

### Since
- 0.1.0

### Params
- `item`
 - Type: `Any`
 - Description: *Some item to clone.*

### Example
```JS
clone([1, null, '3'])// => [1, null, '3']
```
* * *

## debounce

> Useful for implementing behavior that should only happen after a repeated action has completed.

### Since
- 0.1.0

### Params
- `func`
 - Type: `function`
 - Description: **
- `delay`
 - Type: `Number`
 - Description: **

### Example
```JS
window.addEventListener('scroll', debounce(() => {  console.log(Math.random());}, 100));
```
* * *

## first

> Returns the first item of array or &#x60;number&#x60; items.

### Since
- 0.1.0

### Params
- `array`
 - Type: `Array`
 - Description: **
- `number`
 - Type: `Number`
 - Description: *Number of items to returns.*

### Example
```JS
first([1, null, '3'])// => [1]first([1, null, '3'], 2)// => [1, null]
```
* * *

## formatNumber

> Format number.

### Since
- 0.1.0

### Params
- `number`
 - Type: `Number,String`
 - Description: **
- `symbol`
 - Type: `String`
 - Description: *Symbol to be inserted. Default &#x60; &#x60;.*

### Example
```JS
formatNumer(1234)// => '1 234'formatNumer('1234', ',')// => '1,234'
```
* * *

## getCookie

> Get cookie.

### Since
- 0.1.0

### Params
- `key`
 - Type: `String`
 - Description: *Cookie name.*

### Example
```JS
getCookie('someCookie')
```
* * *

## getNumbers

> Get only numbers from string.

### Since
- 0.1.0

### Params
- `string`
 - Type: `String`
 - Description: *Some string, which from to pick only numbers.*

### Example
```JS
getNumbers('+7 (123) 456-78-90')// => '71234567890'
```
* * *

## getQuery

> Get query from url.

### Since
- 0.1.0

### Params
- `arrayFields`
 - Type: `Array`
 - Description: *Fields that must be an arrays.*

### Example
```JS
// http://github.com/?value=test&field=hi&field=hellogetQuery()// => { value: 'test', field: ['hi', 'hello'] }
```
* * *

## getScrollbarWidth

> Get scrollbar width.

### Since
- 0.1.0


* * *

## invertObject

> Invert object.

### Since
- 0.1.0

### Params
- `object`
 - Type: `Object`
 - Description: *Some object to invert.*

### Example
```JS
invertObject({ key: 'value' })// => { value: 'key' }
```
* * *

## isEmpty

> Check is empty object, string, array or other type.

### Since
- 0.1.0

### Params
- `item`
 - Type: `*`
 - Description: *Some item to check.*

### Example
```JS
isEmpty({ test: 'some value' })// => falseisEmpty([1, null, '3'])// => falseisEmpty('qwe')// => falseisEmpty(true)// => trueisEmpty(1)// => trueisEmpty(undefined)// => trueisEmpty(null)// => true
```
* * *

## removeCookie

> Remove cookie.

### Since
- 0.1.0

### Params
- `key`
 - Type: `String`
 - Description: *Cookie name.*

### Example
```JS
removeCookie('testCookie')
```
* * *

## scrollTo

> Scroll to element in DOM.


### Params
- `selector`
 - Type: `String`
 - Description: *Class or id.*

* * *

## setCookie

> Set cookie.


### Params
- `key`
 - Type: `String`
 - Description: *Cookie name.*
- `value`
 - Type: `String`
 - Description: *Cookie value.*
- `expireIn`
 - Type: `Number`
 - Description: *Time in milliseconds to expire cookie.*

### Example
```JS
setCookie('name', 'value', 60000) // 60000 - one minute
```
* * *

&copy; Valery Strelets
