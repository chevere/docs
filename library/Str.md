# Str

`🚧 This component provides a lot of methods not documented here.`

The `Chevere\Str` namespace provides components that interact with strings, allowing [manipulation](#manipulation), [asserting](#asserting) and [boolean checking](#boolean-checking) for strings.

## Manipulation

Manipulating strings refers to the process of altering an argument of type `string`.

The `Chevere/Str/Str` component in charge of string manipulation.

```php
use Chevere\Str\Str;

$str = (new Str('  THE STRING  '))
    ->lowercase()
    ->stripWhitespace();

$result = $str->__toString();
// = "thestring";
```

In the code above, `THE STRING` is manipulated  to result in `thestring`.

## Asserting

Asserting strings refers to the process of asserting an argument of type `string` against methods that throws `Throwable` when failing to assert.

### StrAssert

The `Chevere/Str/StrAssert` component in charge of string asserting.

```php
use new Chevere\Str\StrAssert;

(new StrAssert('A String'))
    ->notEmpty()
    // string isn't empty
    ->notCtypeSpace();
    // Throws StrCtypeSpaceException
```

In the code above, executing `notEmpty` won't raise any exception as `$string` is not an empty string, but executing `notCtypeSpace` will raise an exception as `$string` contains c-type spaces.

## Boolean checking

Bool string refers to the process of validating an argument of type `string` against methods that returns `bool`.

### StrCondition

The `Chevere/Str/StrCondition` component in charge of string validation.

```php
use new Chevere\Str\StrCondition;

$string = 'Chévere es magnífico!';
$strCondition = new StrCondition($string);
$strCondition->endsWith('Rodo'); // false
$strCondition->contains('es'); // true
$strCondition->startsWith('Chévere'); // true
```

In the code above, `endsWith` returns `false` as `$string` doesn't ends with `Rodo`. Passing `es` to `contains` method and passing `Chévere` to `startsWith` method returns true as the conditions are meet.
