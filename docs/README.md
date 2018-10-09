# Chober.js

> A collection of methods that are used by programmers every day.

## Quick start

Install with [npm](https://npmjs.com/).

```sh
$ npm i chober
```

Install with `script`.

```html
<script src="chober.min.js"></script>
```

# Methods


## clone
0.1.0
Clone any item.

- @param **Any** item Some item to clone.

```JS
clone([1, null, '3'])
// => [1, null, '3']
```


## debounce
0.1.0
Useful for implementing behavior that should only happen after a repeated action has completed.

- @param **function** func 
- @param **Number** delay 

```JS
window.addEventListener('scroll', debounce(() => {
  console.log(Math.random());
}, 100));
```


## first
0.1.0
Returns the first item of array or &#x60;number&#x60; items.

- @param **Array** array 
- @param **Number** number Number of items to returns.

```JS
first([1, null, '3'])
// => [1]

first([1, null, '3'], 2)
// => [1, null]
```


## formatNumber
0.1.0
Format number.

- @param **Number,String** number 
- @param **String** symbol Symbol to be inserted. Default &#x60; &#x60;.

```JS
formatNumer(1234)// => '1 234'formatNumer('1234', ',')// => '1,234'
```


## getCookie
0.1.0
Get cookie.

- @param **String** key Cookie name.

```JS
getCookie('someCookie')
```


## getNumbers
0.1.0
Get only numbers from string.

- @param **String** string Some string, which from to pick only numbers.

```JS
getNumbers('+7 (123) 456-78-90')
// => '71234567890'
```


## getQuery
0.1.0
Get query from url.

- @param **Array** arrayFields Fields that must be an arrays.

```JS
// http://github.com/?value=test&field=hi&field=hello

getQuery()
// => { value: 'test', field: ['hi', 'hello'] }
```


## getScrollbarWidth
0.1.0
Get scrollbar width.




## invertObject
0.1.0
Invert object.

- @param **Object** object Some object to invert.

```JS
invertObject({ key: 'value' })
// => { value: 'key' }
```


## isEmpty
0.1.0
Check is empty object, string, array or other type.

- @param ***** item Some item to check.

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


## removeCookie
0.1.0
Remove cookie.

- @param **String** key Cookie name.

```JS
removeCookie('testCookie')
```


## scrollTo

Scroll to element in DOM.

- @param **String** selector Class or id.



## setCookie

Set cookie.

- @param **String** key Cookie name.
- @param **String** value Cookie value.
- @param **Number** expireIn Time in milliseconds to expire cookie.

```JS
setCookie('name', 'value', 60000) // 60000 - one minute
```


* * *

&copy; Valery Strelets
