# Str

The `Chevere\Components\Str` namespace provides components that interact with strings, allowing [manipulation](#manipulation), [asserting](#asserting) and [boolean checking](#boolean-checking) for strings.

## Manipulation

Manipulating strings refers to the process of altering an argument of type `string`.

The [Str](../reference/Chevere/Components/Str/Str.md) component in charge of string manipulation.

```php
use Chevere\Components\Str\Str;

$str = (new Str('  THE STRING  '))
    ->lowercase()
    ->stripWhitespace();

$result = $str->toString();
// = "thestring";
```

In the code above, `THE STRING` is manipulated  to result in `thestring`.

## Asserting

Asserting strings refers to the process of asserting an argument of type `string` against methods that throws `Throwable` when failing to assert.

### StrAssert

The [StrAssert](../reference/Chevere/Components/Str/StrAssert.md)  component in charge of string asserting.

```php
use new Chevere\Components\Str\StrAssert;

(new StrAssert('A String'))
    ->notEmpty()
    // string isn't empty
    ->notCtypeSpace();
    // Throws StrCtypeSpaceException
```

In the code above, executing `notEmpty` won't raise any exception as `$string` is not empty, but executing `notCtypeSpace` will raise an exception as `$string` contains c-type spaces.

## Boolean checking

Bool string refers to the process of validate an argument of type `string` against methods that returns `bool`.

### StrBool

The [StrBool](../reference/Chevere/Components/Str/StrBool.md) component in charge of string validation.

```php
use new Chevere\Components\Str\StrBool;

$string = 'Chévere es magnífico!';
$strBool = new StrBool($string);
$strBool->endsWith('Rodo'); // false
$strBool->contains('es'); // true
$strBool->startsWith('Chévere'); // true
```

In the code above, `endsWith` returns `false` as `$string` doesn't ends with `Rodo`. Passing `es` to `contains` method and passing `Chévere` to `startsWith` method returns true as the conditions are meet.
