# Str

- [Str](#str)
  - [Introduction](#introduction)
  - [String Manipulation](#string-manipulation)
    - [Str](#str-1)
  - [String Asserting](#string-asserting)
    - [StrAssert](#strassert)
  - [String Bool](#string-bool)
    - [StrBool](#strbool)



Str is a collection of classes that interact with strings. Namespace `Chevere\Components\Str` holds all the Str classes, offering a myriad of string related functionalities.

## String Manipulation

Manipulating strings refers to the process of altering an argument of type `string`.

### Str

A Str is a class implementing the [StrInterface](Chevere\Interfaces\Str\StrInterface). A Str class is in charge of string manipulation.

```php
use Chevere\Components\Str\Str;

$str = (new Str('  THE STRING  '))
    ->lowercase()
    ->stripWhitespace();

$result = $str->toString(); // = "thestring";
```

In the code above, `THE STRING` is manipulated  to result in `thestring`.

## String Asserting

Asserting strings refers to the process of asserting an argument of type `string` against methods that throws `Throwable` when failing to assert.

### StrAssert

A StrAssert is a class implementing the [StrAssertInterface](Chevere\Interfaces\Str\StrAssertInterface). A StrAssert class is in charge of string asserting.

```php
use new Chevere\Components\Str\StrAssert;

(new StrAssert('A String'))
    ->notEmpty() // string isn't empty
    ->notCtypeSpace(); // Throws StrCtypeSpaceException
```

In the code above, executing `notEmpty` won't raise any exception as `$string` is not empty, but executing `notCtypeSpace` will raise an exception as `$string` contains c-type spaces.

## String Bool

Bool string refers to the process of validate an argument of type `string` against methods that returns `bool`.

### StrBool

A StrBool is a class implementing the [StrBoolInterface](Chevere\Interfaces\Str\StrBoolInterface). A StrBool class is in charge of string validation.

```php
use new Chevere\Components\Str\StrBool;

$string = 'Chévere es magnífico!';
$strBool = new StrBool($string);
$strBool->endsWith('Rodo'); // false
$strBool->contains('es'); // true
$strBool->startsWith('Chévere'); // true
```

In the code above, `endsWith` returns `false` as `$string` doesn't ends with `Rodo`. Passing `es` to `contains` method and passing `Chévere` to `startsWith` method returns true as the conditions are meet.