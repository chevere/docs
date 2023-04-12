# Parameter

Namespace `Chevere\Parameter`

The Parameter component is in charge of providing typed variable parameter support. Its purpose is to provide an abstraction layer around parameter-argument.

This component provide dynamic parameter-argument type matching relying on the [Type](type.md) component. It enables to validate any type of arguments under any kind of data-structure.

## Array Parameter

Use function `arrayp` to create an array parameter for required array keys, use function `arrayop` to create an array parameter for optional array keys. For both functions it returns an object implementing `ArrayParameterInterface`.

```php
use function Chevere\Parameter\arrayp;
use function Chevere\Parameter\arrayop;

// Empty array
$parameter = arrayp();
// With required 'a' key
$parameter = arrayp(a: stringp());
// With optional 'a' key
$parameter = arrayop(a: stringp());
```

### With parameters

Use method `withRequired` to define **required** parameters to an existing object implementing `ArrayParameterInterface`.

```php
$parameter = $parameter
    ->withRequired(
        username: stringp(),
        email: stringp()
    );
```

Use method `withOptional` to define **optional** parameters to an existing object implementing `ArrayParameterInterface`.

```php
$parameter = $parameter
    ->withOptional(email: stringp());
```

👉 **Note:** Optional parameters will be validated only if a matching key is provided.

### Array assertion

Use function `assertArray` to validate an array parameter against an array argument. It returns the *typed* array.

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
$assert = assertArray($parameter, $argument);
// $assert same as $argument
```

If you define a **default value** for any parameter the system will fill in that value when not provided.

```php
use function Chevere\Parameter\assertArray;

$parameter = arrayp(
    foo: integerp(default: 100),
);
$argument = [];
$assert = assertArray($parameter, $argument);
// $assert = ['foo' => 100];
```

## Boolean Parameter

Use function `booleanp` to create a parameter implementing `BooleanParameterInterface`. This function can define `description` and a `default` value.

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

Use function `filep` to create a parameter implementing `FileParameterInterface`. This function can define `description`, `name`, `type` and `tmp_name`.

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

Use function `floatp` to create a parameter implementing `FloatParameterInterface`. This function can define `description`, `default` value, `minimum` value, `maximum` value and a float list of `accept` values.

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

Use function `genericp` to create a parameter implementing `GenericParameterInterface`. This function can define a parameter value `V` and parameter key `K`.

💡 A generic parameter is used to match a variable collection of `n-items`.

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

Use function `integerp` to create a parameter implementing `IntegerParameterInterface`. This function can define `description`, `default` value, `minimum` value, `maximum` value and a integer list of `accept` values.

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

Use function `nullp` to create a parameter implementing `NullParameterInterface`. This function can define `description`.

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

Use function `objectp` to create a parameter implementing `ObjectParameterInterface`. This function can define a `clasName` and a `description`.

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

Use function `stringp` to create a parameter implementing `StringParameterInterface`. This function can define a `regex` for string matching, a `description` and a `default` value.

```php
use function Chevere\Parameter\stringp;

// Any string
$parameter = stringp();
// A string matching id-123
$string = stringp('/^id-[\d]+$/');
```

### Enum string

Use function `enump` to create an enum string parameter. This function takes strings used for the enumeration.

```php
use function Chevere\Parameter\enum;

// A string matching on OR off
$parameter = enum('on', 'off');
```

### Date string

Use function `datep` to create a date string parameter for `YYYY-MM-DD`. This function can define `description` and a `default` value.

```php
use function Chevere\Parameter\datep;

// A YYYY-MM-DD string
$parameter = datep();
```

### Time string

Use function `timep` to create a time string parameter for `hh:mm:ss`. This function can define `description` and a `default` value.

```php
use function Chevere\Parameter\timep;

// A hh:mm:ss string
$parameter = timep();
```

### Datetime string

Use function `datetimep` to create a datetime string parameter for `YYYY-MM-DD hh:mm:ss`. This function can define `description` and a `default` value.

```php
use function Chevere\Parameter\datetimep;

// A YYYY-MM-DD hh:mm:ss
$parameter = datetimep();
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

Use function `unionp` to create a parameter implementing `UnionParameterInterface`. An union parameter works similar to PHP's union type as it enables to validate an argument against multiple types.

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
