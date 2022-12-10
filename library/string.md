# String

Namespace `Chevere\String`

The String component provides interaction with strings, allowing [manipulation](#manipulation), [asserting](#asserting) and [boolean checking](#boolean-checking) for variables of type `string`.

## Modification

The `ModifyString` component in charge of string modification.

String modification refers to the process of altering an argument of type `string`.

```php
use Chevere\String\ModifyString;

$modify = (new ModifyString('  THE STRING  '))
    ->lowercase()
    ->stripWhitespace();

$string = $modify->__toString();
// thestring
```

Table below contains all the methods available for string modification.

| Methods                   |
| ------------------------- |
| withForwardSlashes        |
| withLeftTail              |
| withLowercase             |
| withReplaceAll            |
| withReplaceFirst          |
| withReplaceLast           |
| withRightTail             |
| withStripANSIColors       |
| withStripExtraWhitespace  |
| withStripNonAlphanumerics |
| withStripWhitespace       |
| withUppercase             |

## Asserting

The `AssertString` component in charge of string asserting.

Asserting strings refers to the process of asserting an argument of type `string` against methods that throws `Throwable` when failing to assert.

```php
use new Chevere\Str\AssertString;

// Throws Exception
(new AssertString('A String'))
    ->notEmpty()
    ->notCtypeSpace();
```

In the code above, executing `notEmpty` won't raise any exception as `$string` is not an empty string, but executing `notCtypeSpace` will raise an exception as `$string` contains c-type spaces.

Table below contains all the methods available for string assertion checking.

| Methods                 |
| ----------------------- |
| contains                |
| ctypeDigit              |
| ctypeSpace              |
| empty                   |
| endsWith                |
| same                    |
| startsWith              |
| startsWithCtypeDigit    |
| notContains             |
| notCtypeDigit           |
| notCtypeSpace           |
| notEmpty                |
| notEndsWith             |
| notSame                 |
| notStartsWith           |
| notStartsWithCtypeDigit |

## Boolean checking

Bool string refers to the process of validating an argument of type `string` against methods that returns `bool`.

The `ValidateString` component in charge of string validation.

```php
use new Chevere\String\ValidateString;

$string = 'Chévere es magnífico!';
$validate = new ValidateString($string);
$false = $validate->endsWith('Rodo');
$true = $validate->contains('es');
$true = $validate->startsWith('Chévere');
```

Table below contains all the methods available for string boolean checking.

| Methods                  |
| ------------------------ |
| isCtypeDigit             |
| isCtypeSpace             |
| isEmpty                  |
| isEndingWith             |
| isSame                   |
| isStartingWith           |
| isStartingWithCtypeDigit |
