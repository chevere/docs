# Parameter

The `Chevere/Parameter` namespace is in charge of providiong typed variable parameter support. Its purpose is to provide an abstraction layer around parameter-argument.

This component enables to provide **dynamic** parameter-argument type matching relying on the [Type](./Type.md) component.

## Creating a Parameter

Parameters can be created with ease using functions. All of these enables to prodive `$description`, `$default` and `...$attributes` for each parameter.

### Array

Use function `Chevere\Parameter\arrayParameter` to create a parameter of type `array`. It support default `array` value.

```php
Use function Chevere\Parameter\arrayParameter;

$array = arrayParameter(default: ['do' => true]);
```

### Boolean

Use function `Chevere\Parameter\booleanParameter` to create a parameter of type `boolean`. It support default `boolean` value.

```php
Use function Chevere\Parameter\booleanParameter;

$boolean = booleanParameter(default: true);
```

### Float

Use function `Chevere\Parameter\floatParameter` to create a parameter of type `float`. It support default `float` value.

```php
Use function Chevere\Parameter\floatParameter;

$float = floatParameter(default: 12.3);
```

### Integer

Use function `Chevere\Parameter\integerParameter` to create a parameter of type `integer`. It support `integer` default value.

```php
Use function Chevere\Parameter\integerParameter;

$integer = integerParameter(default: 123);
```

### Object

Use function `Chevere\Parameter\objectParameter` to create a parameter of type `object`.

```php
Use function Chevere\Parameter\objectParameter;

$object = objectParameter('className');
```

### String

Use function `Chevere\Parameter\stringParameter` to create a parameter of type `string`. It support regex and `string` default value.

```php
use Chevere\Regex\Regex;
Use function Chevere\Parameter\stringParameter;

$string = stringParameter(
    default: 'id-000',
    regex: new Regex('/^id-[\d]+$/')
);
```

The above `$string` parameter will require an argument like `id-123` to validate.

## Parameters

The `Chevere/Parameter/Parameters` component in charge of collecting objects implementing the `Chevere/Parameter/Interfaces/ParameterInterface`.

💡 Parameters members are handled as **required** by default.

### Creating Parameters

Use function `Chevere\Parameter\parameters` to create a parameters collection.

```php
use Chevere\Parameter\IntegerParameter;

$parameters = parameters(
    id: integerParameter(
        description: 'user id.',
        default: 123,
    ),
);
```

### Adding Parameters

The `withAdded` method is used to add more required parameters.

```php
use function Chevere\Parameter\stringParameter;

$parameters = $parameters->withAdded(
    name: stringParameter();
);
```

### Adding Optional Parameters

The `withAddedOptional` method is used to add optional parameters.

```php
use function Chevere\Parameter\integerParameter;

$parameters = $parameters->withAddedOptional(
    priority: integerParameter(default: 0)
);
```

### Modifying Parameters

The `withModify` method is used to modify parameters.

```php
use function Chevere\Parameter\integerParameter;

$parameters = $parameters->withModify(
    priority: integerParameter(default: 100)
);
```

## Arguments

The `Chevere/Parameter/Arguments` component in charge of providing arguments matching the declared [Parameters](#parameters).

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

> **Note** If you pass `abc` instead of `123` the system will throw a `TypeException`.

### Retrieve an argument

The `get` method is used to retrieve an argument "as-is", without type checking.

In the example below `$argument` must be either casted as boolean or use a doc block annotation to provide type-hint while `$boolean` type gets hinted directly from the function return.

```php
use Chevere\Parameter\Arguments;

/**
 * @var Arguments $arguments
 * @var bool $argument
 */
$argument = $arguments->get('namedArgument');
$boolean = $arguments->getBoolean('namedArgument');
```

The following methods are available to provide typed argument retrieval:

| Method       | Return type |
| ------------ | ----------- |
| `getBoolean` | `boolean`   |
| `getString`  | `string`    |
| `getInteger` | `integer`   |
| `getFloat`   | `float`     |
| `getArray`   | `array`     |

> **Note** Above methods will throw a `TypeException` on type mismatch.
