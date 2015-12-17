# ES6 `Array.prototype.filter` polyfill

Simple ES6 [Array.prototype.filter](http://people.mozilla.org/%7Ejorendorff/es6-draft.html#sec-array.prototype.filter) polyfill for older environments taken from [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Polyfill).

For browsers and node.js.

## Installation
* Just include repo before your scripts.
* `npm install array.prototype.filter` if you’re using node.js.
* `bower install Array.prototype.filter` if you’re using [Twitter Bower](http://bower.io).


## Usage

* `Array.prototype.filter(predicate[, thisArg])` returns a new array with all elements that matches `predicate` function.
* `predicate(value, index, collection)`: takes three arguments
    * `value`: current collection element
    * `index`: current collection element index
    * `collection`: the Array object being traversed

Node.js:

```javascript
require('array.prototype.filter');
```

Code example:

```javascript
// Default:
[1, 5, 10, 15].filter(function(a) { return a > 9; }) // [10, 15]
```

## License

 DO WHAT THE F**K YOU WANT TO PUBLIC LICENSE 
                    Version 2, December 2004 

 Copyright (C) 20015 Michael Pozhigan <michael.pozhigan@gmail.com> 

 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 

            DO WHAT THE F**K YOU WANT TO PUBLIC LICENSE 
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE F**K YOU WANT TO.
