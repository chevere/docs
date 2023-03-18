# Parameter

Namespace `Chevere\Parameter`

The Parameter component is in charge of providing typed variable parameter support. Its purpose is to provide an abstraction layer around parameter-argument.

This component enables to provide **dynamic** parameter-argument type matching relying on the [Type](type.md) component. It enables to validate arguments and any data-structure.

## Array Parameter

Use function `arrayp` to create a parameter of type `ArrayParameterInterface`. It uses named parameters to map validation for a fixed array.

```php
use function Chevere\Parameter\arrayp;

// Empty array
$parameter = arrayp();
// Array with 'a' key having any string value
$parameter = arrayp(
    a: stringp(),
);
```

### Array assertion

Use function `assertArray` to validate an array parameter against a fixed array argument.

```php
use function Chevere\Parameter\assertArray;

$parameter = arrayp(
    a: stringp(),
    b: integerp(),
);
$argument = [
    'a' => 'Hello world',
    'b' => 123
];
assertArray($parameter, $argument);
```

## Boolean Parameter

Use function `booleanp` to create a parameter of type `BooleanParameterInterface`.

```php
use function Chevere\Parameter\booleanp;

$parameter = booleanp();
```

### Boolean assertion

Use function `assertBoolean` to validate a boolean parameter against a boolean argument.

```php
use function Chevere\Parameter\assertBoolean;

$parameter = booleanp();
$argument = true;
assertBoolean($parameter, $argument);
```

## File Parameter

Use function `filep` to create a parameter of type `FileParameterInterface`.

```php
use function Chevere\Parameter\filep;

// Any file
$parameter = filep();
```

### File assertion

Use function `assertFile` to validate a file parameter against a file argument.

```php
use function Chevere\Parameter\assertFile;

$parameter = filep(
    // Name starting with chevere
    name: stringp('/^chevere/'),
    // Limited range size
    size: integerp(
        minimum: 1000,
        maximum: 500000
    ),
    // Image types
    type: stringp('/^image\/*$/')
);
$argument = [
    'name' => 'chevere.png',
    'size' => 1234,
    'type' => 'image/png'

];
assertFile($parameter, $argument);
```

## Float Parameter

Use function `floatp` to create a parameter of type `FloatParameterInterface`. A float parameter can have properties `minimum`, `maximum` and `accept`.

```php
use function Chevere\Parameter\floatp;

// Any float
$float = floatp();
// Limited range float
$float = floatp(
    minimum: 0,
    maximum: 100
);
// Exact float match
$float = floatp(
    accept: [1, 2, 3]
);
```

### Float assertion

Use function `assertFloat` to validate a float parameter against a float argument.

```php
use function Chevere\Parameter\assertFloat;

$parameter = floatp(
    minimum: 0.0,
    maximum: 10.0
);
$argument = 5.5;
assertFloat($parameter, $argument);
```

## Generic Parameter

Use function `genericp` to create a parameter of type `GenericParameterInterface`. A generic parameter is used to match a variable collection of `n-items`.

```php
use function Chevere\Parameter\genericp;

// For a collection of integer keys
// and string values
$parameter = genericp(
    stringp(),
);
```

### Generic assertion

Use function `assertGeneric` to validate a generic parameter against a generic argument.

```php
use function Chevere\Parameter\assertGeneric;

$parameter = genericp(
    K: integerp(minimum: 0),
    V: arrayp(
        id: stringp(),
        name: stringp(),
    ),
);
$argument = [
    0 => [
        'id' => '123e4567',
        'name' => 'Rodolfo'
    ],
    1 => [
        'id' => '123e4568',
        'name' => 'Alejandro'
    ],
    // ...
];
assertGeneric($parameter, $argument);
```

## Integer Parameter

Use function `integerp` to create a parameter of type `IntegerParameterInterface`. An integer parameter can have properties `minimum`, `maximum` and `accept`.

```php
use function Chevere\Parameter\integerp;

// Any integer
$integer = integerp();
// Limited range integer
$integer = integerp(
    minimum: 0,
    maximum: 100
);
// Exact integer match
$integer = integerp(
    accept: [1, 2, 3]
);
```

### Integer assertion

Use function `assertInteger` to validate an integer parameter against an integer argument.

```php
use function Chevere\Parameter\assertInteger;

$parameter = integerp(
    minimum: 0.0,
    maximum: 10.0
);
$argument = 5.5;
assertInteger($parameter, $argument);
```

## Null Parameter

Use function `nullp` to create a parameter of type `NullParameterInterface`.

```php
use function Chevere\Parameter\nullp;

$null = nullp();
```

### Null assertion

Use function `assertNull` to validate a null parameter against a null argument.

```php
use function Chevere\Parameter\assertNull;

$parameter = nullp();
$argument = null;
assertNull($parameter, $argument);
```

## Object Parameter

Use function `objectp` to create a parameter of type `ObjectParameterInterface`.

```php
use function Chevere\Parameter\objectp;

$object = objectp(stdClass::class);
```

### Object assertion

Use function `assertObject` to validate an object parameter against an object argument.

```php
use function Chevere\Parameter\assertObject;

$parameter = objectp();
$argument = new stdClass();
assertObject($parameter, $argument);
```

## String Parameter

Use function `stringp` to create a parameter of type `StringParameterInterface`. A string parameter can define a `regex` for string matching.

```php
use function Chevere\Parameter\stringp;

// Any string
$parameter = stringp();
// A string like id-123
$string = stringp('/^id-[\d]+$/');
```

### String assertion

Use function `assertString` to validate a string parameter against a string argument.

```php
use function Chevere\Parameter\assertString;

$parameter = stringp('/^a|b|c$/');
$argument = 'a';
assertString($parameter, $argument);
```

## Union Parameter

Use function `unionp` to create a parameter of type `UnionParameterInterface`. An union parameter works similar to PHP's union type as it enables to validate an argument against multiple types.

```php
use function Chevere\Parameter\unionp;

// Any string or null
$union = unionp(stringp(), nullp());
// Any digit string or any integer
$union = unionp(
    stringp('/^\d+$/'),
    integerp()
);
```

### Union assertion

Use function `assertUnion` to validate an union parameter against a mixed argument.

```php
use function Chevere\Parameter\assertUnion;

$union = unionp(stringp(), integerp());
assertUnion($parameter, 'abc');
assertUnion($parameter, 0);
```

## Argument assertion

Use function `assertArgument` to validate a parameter against an argument of any type. Useful when there's no certainty on the argument type.

```php
use function Chevere\Parameter\assertArgument;

$parameter = stringp();
assertArgument($parameter, $argument);
```
