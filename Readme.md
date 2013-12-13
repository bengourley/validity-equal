# validity-equal

[![Build Status](https://travis-ci.org/bengourley/validity-equal.png?branch=master)](https://travis-ci.org/bengourley/validity-equal)

Validity style validator to ensure a property is equal to some primitive value. This
might seem trivial, but it's useful when you are leveraging schemata for its validation
and error message for something like 'agreed to terms and conditions'.

## Installation

    npm install validity-equal

## Usage

Below is a simple example for usage with schemata:

```js

var validity = require('validity')
  , schemata = require('schemata')
  , createValidator = require('validity-equal')

var schema = schemata(
    { agreedToTerms:
      { type: Boolean
      , validators: { all: [ createValidator(true, 'Must agree to T&Cs') ] }
      }
    })

schema.validate({ agreedToTerms: true }, function (error, errorMessage) {
  console.log(errorMessage) //-> undefined
})

schema.validate({ agreedToTerms: false }, function (error, errorMessage) {
  console.log(errorMessage) //-> 'Must agree to T&Cs'
})
```

## API

### var validate = createValidator(Mixed: value, String: failureMessage)

Equality check is done with `===` so `value` must be primitive.

### validate(String:key, String:keyDisplayName, Object:object, Function:cb)

This is a [validity](https://npmjs.org/package/validity) compatible function, which in turn is
used by [schemata](https://npmjs.org/package/schemata) for schema validation.

The callback signature `cb(err, errorMessage)`.
- `err` is an `Error` object if something bad happened and `null` otherwise.
- `errorMessage` is a `String` if a validation error happened and `undefined` otherwise.

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)