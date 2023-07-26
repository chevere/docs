# Parameter

Namespace `Chevere\Parameter`

The Parameter component is in charge of providing an user-land typed layer abstraction around parameter-argument. Intended to be used in I/O validation systems, this component provide dynamic parameter-argument type matching relying on the [Type](type.md) component.

To summarize, Parameter enables to validate any type of arguments for any kind of data-structure.

## Array Parameter

Use function `arrayp` to create an array parameter for required array keys.

```php
use function Chevere\Parameter\arrayp;

// Empty array
$parameter = arrayp();
// With required 'a' key
$parameter = arrayp(a: string());
```

### With parameters

Use method `withRequired` to define **required** parameters to an existing object implementing `ArrayParameterInterface`.

```php
$parameter = $parameter
    ->withRequired(
        username: string(),
        email: string()
    );
```

Use method `withOptional` to define **optional** parameters to an existing object implementing `ArrayParameterInterface`.

```php
$parameter = $parameter
    ->withOptional(email: string());
```

👉 **Note:** Optional parameters will be validated only if a matching key is provided.

### Array String

Use function `arrayString` to create an array parameter for required array keys. It only supports string parameters.

```php
use function Chevere\Parameter\arrayString;
use function Chevere\Parameter\string;

$parameter = arrayString(
    test: string(),
);
```

### Array assertion

Use function `assertArray` to validate an array parameter against an array argument. It returns the *typed* array.

```php
use function Chevere\Parameter\assertArray;

$parameter = arrayp(
    a: string(),
    b: integer(),
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
    foo: integer(default: 100),
);
$argument = [];
$assert = assertArray($parameter, $argument);
// $assert = ['foo' => 100];
```

## Boolean Parameter

Use function `boolean` to create a parameter implementing `BooleanParameterInterface`. This function can define `description` and a `default` value.

```php
use function Chevere\Parameter\boolean;

$parameter = boolean();
```

### Boolean assertion

Use function `assertBoolean` to validate a boolean parameter against a boolean argument.

```php
use function Chevere\Parameter\assertBoolean;

$parameter = boolean();
$argument = true;
assertBoolean($parameter, $argument);
```

## File Parameter

Use function `file` to create a parameter implementing `FileParameterInterface`. This function can define `description`, `name`, `type` and `tmp_name`.

```php
use function Chevere\Parameter\file;

// Any file
$parameter = file();
```

### File assertion

Use function `assertFile` to validate a file parameter against a file argument.

```php
use function Chevere\Parameter\assertFile;

$parameter = file(
    // Name starting with chevere
    name: string('/^chevere/'),
    // Limited range size
    size: integer(
        minimum: 1000,
        maximum: 500000
    ),
    // Image types
    type: string('/^image\/*$/')
);
$argument = [
    'name' => 'chevere.png',
    'size' => 1234,
    'type' => 'image/png'

];
assertFile($parameter, $argument);
```

## Float Parameter

Use function `float` to create a parameter implementing `FloatParameterInterface`. This function can define `description`, `default` value, `minimum` value, `maximum` value and a float list of `accept` values.

```php
use function Chevere\Parameter\float;

// Any float
$float = float();
// Limited range float
$float = float(
    minimum: 0,
    maximum: 100
);
// Exact float match
$float = float(
    accept: [1, 2, 3]
);
```

### Float assertion

Use function `assertFloat` to validate a float parameter against a float argument.

```php
use function Chevere\Parameter\assertFloat;

$parameter = float(
    minimum: 0.0,
    maximum: 10.0
);
$argument = 5.5;
assertFloat($parameter, $argument);
```

## Generic Parameter

Use function `generic` to create a parameter implementing `GenericParameterInterface`. This function can define a parameter value `V` and parameter key `K`.

💡 A generic parameter is used to match a variable collection of `n-items`.

```php
use function Chevere\Parameter\generic;

// For a collection of integer keys
// and string values
$parameter = generic(
    string(),
);
```

### Generic assertion

Use function `assertGeneric` to validate a generic parameter against a generic argument.

```php
use function Chevere\Parameter\assertGeneric;

$parameter = generic(
    K: integer(minimum: 0),
    V: arrayp(
        id: string(),
        name: string(),
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

Use function `integer` to create a parameter implementing `IntegerParameterInterface`. This function can define `description`, `default` value, `minimum` value, `maximum` value and a integer list of `accept` values.

```php
use function Chevere\Parameter\integer;

// Any integer
$integer = integer();
// Limited range integer
$integer = integer(
    minimum: 0,
    maximum: 100
);
// Exact integer match
$integer = integer(
    accept: [1, 2, 3]
);
```

### Integer assertion

Use function `assertInteger` to validate an integer parameter against an integer argument.

```php
use function Chevere\Parameter\assertInteger;

$parameter = integer(
    minimum: 0.0,
    maximum: 10.0
);
$argument = 5.5;
assertInteger($parameter, $argument);
```

## Null Parameter

Use function `null` to create a parameter implementing `NullParameterInterface`. This function can define `description`.

```php
use function Chevere\Parameter\null;

$null = null();
```

### Null assertion

Use function `assertNull` to validate a null parameter against a null argument.

```php
use function Chevere\Parameter\assertNull;

$parameter = null();
$argument = null;
assertNull($parameter, $argument);
```

## Object Parameter

Use function `object` to create a parameter implementing `ObjectParameterInterface`. This function can define a `clasName` and a `description`.

```php
use function Chevere\Parameter\object;

$object = object(stdClass::class);
```

### Object assertion

Use function `assertObject` to validate an object parameter against an object argument.

```php
use function Chevere\Parameter\assertObject;

$parameter = object();
$argument = new stdClass();
assertObject($parameter, $argument);
```

## String Parameter

Use function `string` to create a parameter implementing `StringParameterInterface`. This function can define a `regex` for string matching, a `description` and a `default` value.

```php
use function Chevere\Parameter\string;

// Any string
$parameter = string();
// A string matching id-123
$string = string('/^id-[\d]+$/');
```

### Enum string

Use function `enump` to create an enum string parameter. This function takes strings used for the enumeration.

```php
use function Chevere\Parameter\enum;

// A string matching on OR off
$parameter = enum('on', 'off');
```

### Date string

Use function `date` to create a date string parameter for `YYYY-MM-DD`. This function can define `description` and a `default` value.

```php
use function Chevere\Parameter\date;

// A YYYY-MM-DD string
$parameter = date();
```

### Time string

Use function `time` to create a time string parameter for `hh:mm:ss`. This function can define `description` and a `default` value.

```php
use function Chevere\Parameter\time;

// A hh:mm:ss string
$parameter = time();
```

### Datetime string

Use function `datetime` to create a datetime string parameter for `YYYY-MM-DD hh:mm:ss`. This function can define `description` and a `default` value.

```php
use function Chevere\Parameter\datetime;

// A YYYY-MM-DD hh:mm:ss
$parameter = datetime();
```

### String assertion

Use function `assertString` to validate a string parameter against a string argument.

```php
use function Chevere\Parameter\assertString;

$parameter = string('/^a|b|c$/');
$argument = 'a';
assertString($parameter, $argument);
```

## Union Parameter

Use function `union` to create a parameter implementing `UnionParameterInterface`. An union parameter works similar to PHP's union type as it enables to validate an argument against multiple types.

```php
use function Chevere\Parameter\union;

// Any string or null
$union = union(string(), null());
// Any digit string or any integer
$union = union(
    string('/^\d+$/'),
    integer()
);
```

### Union assertion

Use function `assertUnion` to validate an union parameter against a mixed argument.

```php
use function Chevere\Parameter\assertUnion;

$union = union(string(), integer());
assertUnion($parameter, 'abc');
assertUnion($parameter, 0);
```

## Argument assertion

Use function `assertArgument` to validate a parameter against an argument of any type. Useful when there's no certainty on the argument type.

```php
use function Chevere\Parameter\assertArgument;

$parameter = string();
assertArgument($parameter, $argument);
```
