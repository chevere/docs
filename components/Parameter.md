# Parameter

The Parameter components are in charge of providing extended type support with the ability to handle variadic typed parameters and its argument matching. It allows implementors to provide variable parameter-argument type matching.

## Defining a Parameter

```php
use Chevere\Components\Parameter\Parameter;
use Chevere\Components\Type\Type;

(new Parameter(new Type('classFullQualifiedName')))
    ->withDescription('Parameter description')
    ->withAddedAttribute('trySome');
```

[ParameterInterface](../reference/Chevere/Interfaces/Parameter/ParameterInterface.md) describes the interface for the component in charge of defining a typed parameter relying on the [Type](./Type.md) component.

## Parameter types

The following parameter type classes are provided for convenience.

### Array Parameter

[ArrayParameterInterface](../reference/Chevere/Interfaces/Parameter/ArrayParameterInterface.md) describes the component in charge of defining a parameter of type array. It support default `array` value.

```php
use Chevere\Components\Parameter\ArrayParameter;

(new ArrayParameter)
    ->withDefault(['do' => true]);
```

### Boolean Parameter

[BooleanParameterInterface](../reference/Chevere/Interfaces/Parameter/BooleanParameterInterface.md) describes the component in charge of defining a parameter of type boolean. It support default `boolean` value.

```php
use Chevere\Components\Parameter\BooleanParameter;

(new BooleanParameter)
    ->withDefault(true);
```

### Float Parameter

[FloatParameterInterface](../reference/Chevere/Interfaces/Parameter/FloatParameterInterface.md) describes the component in charge of defining a parameter of type float. It support default `float` value.

```php
use Chevere\Components\Parameter\FloatParameter;

(new FloatParameter)
    ->withDefault(12.3);
```

### Integer Parameter

[IntegerParameterInterface](../reference/Chevere/Interfaces/Parameter/IntegerParameterInterface.md) describes the component in charge of defining a parameter of type integer. It support `integer` default value.

```php
use Chevere\Components\Parameter\IntegerParameter;

(new IntegerParameter)
    ->withDefault(123);
```

### String Parameter

[StringParameterInterface](../reference/Chevere/Interfaces/Parameter/StringParameterInterface.md) describes the component in charge of defining a parameter of type string. It support regex and `string` default value.

```php
use Chevere\Components\Parameter\StringParameter;
use Chevere\Components\Regex\Regex;

(new StringParameter)
    ->withDefault('id-000')
    ->withRegex(new Regex('/^id-[\d]+$/'));
```

The above parameter will require an argument like `id-123` to validate.

## Parameters

[ParameterInterface](../reference/Chevere/Interfaces/Parameter/ParameterInterface.md) describe the component in charge of collecting objects implementing the [ParametersInterface](../reference/Chevere/Interfaces/Parameter/ParametersInterface.md).

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

Variadic parameters can be passed to add multiple either required or optional parameter types.

## Arguments

[ArgumentsInterface](../reference/Chevere/Interfaces/Parameter/ArgumentsInterface.md) describe the component in charge of checking if given arguments match the declared Parameters.

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
