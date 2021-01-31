# Parameter

The [Parameter](../reference/Chevere/Components/Parameter/Parameter.md) component is in charge of providing extended type support with the ability to handle variadic typed parameters and its argument matching. It allows to provide variable parameter-argument type matching relying on the [Type](./Type.md) component.

## Creating a Parameter

In the code below, type for class `FullQualifiedName` is created with a description and an added attribute.

```php
use Chevere\Components\Parameter\Parameter;
use Chevere\Components\Type\Type;

$parameter = new Parameter(
    new Type('FullQualifiedName')
);
```

### Description

The `withDescription` method is used to provide the parameter description, which is a short summary explaining the purpose of the parameter.

```php
use Chevere\Components\Parameter\Parameter;

/**
 * @var Parameter $parameter
 */
$parameter = $parameter
    ->withDescription('Stuff for doing some');
```

### Attributes

The `withAddedAttribute` method is used to provide parameter attributes, which are flags that can tag the parameter.

```php
use Chevere\Components\Parameter\Parameter;

/**
 * @var Parameter $parameter
 */
$parameter = $parameter
    ->withAddedAttribute('langEn', 'localeEn');
$parameter->hasAttribute('langEn'); // true
```

## Parameter types

The following parameter type classes are provided for convenience.

### Array Parameter

The [ArrayParameter](../reference/Chevere/Components/Parameter/ArrayParameter.md) component in charge of defining a parameter of type array. It support default `array` value.

```php
use Chevere\Components\Parameter\ArrayParameter;

(new ArrayParameter)
    ->withDefault(['do' => true]);
```

### Boolean Parameter

The [BooleanParameter](../reference/Chevere/Components/Parameter/BooleanParameter.md) component in charge of defining a parameter of type boolean. It support default `boolean` value.

```php
use Chevere\Components\Parameter\BooleanParameter;

(new BooleanParameter)
    ->withDefault(true);
```

### Float Parameter

The [FloatParameter](../reference/Chevere/Components/Parameter/FloatParameter.md) component in charge of defining a parameter of type float. It support default `float` value.

```php
use Chevere\Components\Parameter\FloatParameter;

(new FloatParameter)
    ->withDefault(12.3);
```

### Integer Parameter

The [IntegerParameter](../reference/Chevere/Components/Parameter/IntegerParameter.md) component in charge of defining a parameter of type integer. It support `integer` default value.

```php
use Chevere\Components\Parameter\IntegerParameter;

(new IntegerParameter)
    ->withDefault(123);
```

### String Parameter

The [StringParameter](../reference/Chevere/Components/Parameter/StringParameter.md) component in charge of defining a parameter of type string. It support regex and `string` default value.

```php
use Chevere\Components\Parameter\StringParameter;
use Chevere\Components\Regex\Regex;

(new StringParameter)
    ->withDefault('id-000')
    ->withRegex(new Regex('/^id-[\d]+$/'));
```

The above parameter will require an argument like `id-123` to validate.

## Parameters

The [Parameters](../reference/Chevere/Components/Parameter/Parameters.md) component in charge of collecting objects implementing the [ParameterInterface](../reference/Chevere/Interfaces/Parameter/ParameterInterface.md).

```php
use Chevere\Components\Parameter\Parameters;
use Chevere\Components\Parameter\IntegerParameter;

(new Parameters)
    ->withAddedRequired(
        id: (new IntegerParameter)
            ->withDefault(123);
    )
    ->withAddedOptional(
        priority: (new IntegerParameter)
            ->withDefault(1);
    );
```

Parameters can be added either as required or optional.

## Arguments

The [Arguments](../reference/Chevere/Components/Parameter/Arguments.md) component in charge of providing arguments matching the declared [Parameters](#parameters).

```php
use Chevere\Components\Parameter\Arguments;
use Chevere\Components\Parameter\Parameters;

new Arguments(
    (new Parameters)
        ->withAddedRequired(id: new IntegerParameter),
    id: 123
);
```

The example above shows how to construct an Arguments instance by passing the Parameters and the matching named arguments.

### Retrieve an argument

The `get` method is used to retrieve an argument "as-is", without type checking.

In the example below `$argument` must be either casted as boolean or use a doc block annotation to provide type-hint while `$boolean` type gets hinted directly from the function return.

```php
use Chevere\Components\Parameter\Arguments;

/**
 * @var Arguments $arguments
 * @var bool $argument
 */
$argument = $arguments->get('name');
$boolean = $arguments->getBoolean('name');
```

The following methods are available to provide typed argument retrieval:

| Method       | Return type |
| ------------ | ----------- |
| `getBoolean` | `bool`      |
| `getString`  | `string`    |
| `getInteger` | `integer`   |
| `getFloat`   | `float`     |
| `getArray`   | `array`     |

> ⚠ **Note** that the above methods will throw a [TypeException](../reference/Chevere/Exceptions/Core/TypeException.md) on type mismatch.
