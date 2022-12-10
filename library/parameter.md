# Parameter

Namespace `Chevere\Parameter`

The Parameter component is in charge of providing typed variable parameter support. Its purpose is to provide an abstraction layer around parameter-argument.

This component enables to provide **dynamic** parameter-argument type matching relying on the [Type](type.md) component.

## Array Parameter

Use function `arrayParameter` to create a parameter of type `ArrayParameterInterface`.

```php
Use function Chevere\Parameter\arrayParameter;

$array = arrayParameter();
```

## Boolean Parameter

Use function `booleanParameter` to create a parameter of type `BooleanParameterInterface`.

```php
Use function Chevere\Parameter\booleanParameter;

$boolean = booleanParameter();
```

## File Parameter

Use function `fileParameter` to create a parameter of type `FileParameterInterface`.

```php
Use function Chevere\Parameter\fileParameter;
Use function Chevere\Parameter\stringParameter;

$file = fileParameter();
$fileB = fileParameter(
    name: stringParameter(),
    size: integerParameter(
        minimum: 1000,
        maximum: 500000
    ),
    type: stringParameter(
        '/^image\/*$/'
    )
);
```

🪄 For the code above, `$fileB` parameter must meet the size requirement (bytes) and be of MIME type `image/*`.

## Float Parameter

Use function `floatParameter` to create a parameter of type `FloatParameterInterface`.

```php
Use function Chevere\Parameter\floatParameter;

$float = floatParameter();
```

## Integer Parameter

Use function `integerParameter` to create a parameter of type `IntegerParameterInterface`.

```php
Use function Chevere\Parameter\integerParameter;

$integerA = integerParameter();
$integerB = integerParameter(
    minimum: 0,
    maximum: 100
);
$integerC = integerParameter(
    accept: [1,2,3]
);
```

🪄 For the code above, `$integerB` parameter must be between range `0,100` and for `$integerC` it will accept only values in `1,2,3`.

## Object Parameter

Use function `objectParameter` to create a parameter of type `ObjectParameterInterface`.

```php
Use function Chevere\Parameter\objectParameter;

$object = objectParameter('className');
```

## String Parameter

Use function `stringParameter` to create a parameter of type `StringParameterInterface`.

```php
use Chevere\Regex\Regex;
Use function Chevere\Parameter\stringParameter;

$string = stringParameter(
    regex: '/^id-[\d]+$/'
);
```

🪄 For the code above, `$string` parameter will require an argument like `id-123` to validate.

## Parameters

The `Parameters` component in charge of collecting objects implementing the `Interfaces/ParameterInterface`.

### Creating Parameters

Use function `parameters` to create a Parameters collection of required arguments.

```php
use function Chevere\Parameter\parameters;

$parameters = parameters(
    id: $integer,
);
```

### Adding Required Parameters

The `withAddedRequired` method is used to add required parameters.

```php
$parameters = $parameters->withAddedRequired(
    name: $string;
);
```

### Adding Optional Parameters

The `withAddedOptional` method is used to add optional parameters.

```php
$parameters = $parameters->withAddedOptional(
    priority: $integer->withDefault(0)
);
```

### Modifying Parameters

The `withModify` method is used to modify parameters.

```php
use function Chevere\Parameter\integerParameter;

$parameters = $parameters->withModify(
    priority: $integer->withDefault(100)
);
```

### Retrieving Parameters

Use method `get` to retrieve a parameter identified by its name.

```php
use Chevere\Parameter\Interfaces\ParameterInterface;

/** @var ParameterInterface **/
$parameter = $parameters->get('name');
```

Use `get<Type>` methods to retrieve a typed parameter identified by its name.

```php
$array = $parameters->getArray('name');
$boolean = $parameters->getBoolean('name');
$file = $parameters->getFile('name');
$float = $parameters->getFloat('name');
$integer = $parameters->getInteger('name');
$object = $parameters->getObject('name');
$string = $parameters->getString('name');
```

The following methods are available to provide typed parameter retrieval:

| Method       | Return type                 |
| ------------ | --------------------------- |
| `getArray`   | `ArrayParameterInterface`   |
| `getBoolean` | `BooleanParameterInterface` |
| `getFile`    | `FloatParameterInterface`   |
| `getFloat`   | `FloatParameterInterface`   |
| `getInteger` | `IntegerParameterInterface` |
| `getString`  | `StringParameterInterface`  |

## Arguments

The `Arguments` component in charge of providing arguments matching the declared [Parameters](#parameters).

```php
use Chevere\Parameter\Arguments;
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\integerParameter;

$parameters = parameters(
    id: integerParameter()
);
$data = ['id' => 123];
$arguments = new Arguments($parameters, ...$data);
```

🪄 For the code above, if you pass `abc` instead of `123` the system will throw a `TypeException` as Arguments provide a type check layer for Parameters.

### Retrieve an argument

The `get` method is used to retrieve an argument "as-is", without type checking.

```php
/**
 * @var bool $argument
 */
$argument = $arguments->get('name');
```

Use `get<Type>` methods for retrieving a typed argument.

```php
$argument = $arguments->get('name');
$array = $arguments->getArray('name');
$boolean = $arguments->getBoolean('name');
$float = $arguments->getFloat('name');
$integer = $arguments->getInteger('name');
$string = $arguments->getString('name');
```

The following methods are available to provide typed argument retrieval:

| Method       | Return type |
| ------------ | ----------- |
| `getArray`   | `array`     |
| `getBoolean` | `boolean`   |
| `getFloat`   | `float`     |
| `getInteger` | `integer`   |
| `getString`  | `string`    |
