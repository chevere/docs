# String

The String component provides components that interact with strings, allowing [manipulation](#manipulation), [asserting](#asserting) and [boolean checking](#boolean-checking) for strings.

## Manipulation

Manipulating strings refers to the process of altering an argument of type `string`.

The `Chevere/String/ModifyString` component in charge of string modification.

```php
use Chevere\String\ModifyString;

$modify = (new ModifyString('  THE STRING  '))
    ->lowercase()
    ->stripWhitespace();

$result = $modify->__toString();
// = "thestring";
```

In the code above, `THE STRING` is manipulated  to result in `thestring`.

## Asserting

Asserting strings refers to the process of asserting an argument of type `string` against methods that throws `Throwable` when failing to assert.

The `Chevere/String/AssertString` component in charge of string asserting.

```php
use new Chevere\Str\AssertString;

(new AssertString('A String'))
    ->notEmpty()
    // string isn't empty
    ->notCtypeSpace();
    // Throws StrCtypeSpaceException
```

In the code above, executing `notEmpty` won't raise any exception as `$string` is not an empty string, but executing `notCtypeSpace` will raise an exception as `$string` contains c-type spaces.

## Boolean checking

Bool string refers to the process of validating an argument of type `string` against methods that returns `bool`.

The `Chevere/String/ValidateString` component in charge of string validation.

```php
use new Chevere\String\ValidateString;

$string = 'Chévere es magnífico!';
$validate = new ValidateString($string);
$validate->endsWith('Rodo'); // false
$validate->contains('es'); // true
$validate->startsWith('Chévere'); // true
```
