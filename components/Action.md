# Action

Action is the basic building block for incoming actions to your application. An action will be in charge of defining a runtime context.

## Defining Actions

An Action implements the [ActionInterface](../reference/Chevere/Interfaces/Action/ActionInterface.md) and there's a base `Chevere\Components\Action\Action` action that you can use.

Code below defines `SomeAction` class by extending `Chevere\Components\Action\Action`.

```php
<?php

declare(strict_types=1);

namespace App\Controllers;

use Chevere\Components\Action\Action;

final class SomeAction extends Action
{
    // ...
}
```

### Action Methods

#### getDescription()

This method is used to define the action description, which is what the action does (by default).

```php
public function getDescription(): string
{
    return 'It says "Hello, <name>!"';
}
```

#### description()

This method is used to access the actual object instance description.

#### getParameters()

This method is used to define the default parameters.

It must return an object implementing [ParametersInterface](../reference/Chevere/Interfaces/Controller/ParametersInterface.md), which is a collection of objects implementing [ControllerParameterInterface](../reference/Chevere/Interfaces/Controller/ControllerParameterInterface.md).

```php
use Chevere\Interfaces\Parameter\ParametersInterface;
use Chevere\Components\Parameter\Parameters;
use Chevere\Components\Parameter\IntegerParameter;

public function getParameters(): ParametersInterface
{
    return (new Parameters)
        ->withAddedRequired(
            (new IntegerParameter('id'))
                ->withDescription('The user id.'),
        );
}
```

For the code above, the argument value for parameter `id` must match against `/^d+$/` and it is required. In the other hand `alias` is an optional parameter that matches against `/^\w+$/`.

##### Parameter

Each controller parameter implements [ControllerParameterInterface](../reference/Chevere/Interfaces/Controller/ControllerParameterInterface.md).

#### run()

The `run` method defines the instruction to run. It is responsible of issuing a response implementing [ResponseSuccessInterface](../reference/Chevere/Interfaces/Response/ResponseSuccessInterface.md).

##### Call

The argument passed to `run` method implements [ControllerArgumentsInterface](../reference/Chevere/Interfaces/Controller/ControllerArgumentsInterface.md) and it will always reflect the parameters declaration.

```php
use Chevere\Interfaces\Controller\ControllerArgumentsInterface;
use Chevere\Interfaces\Controller\ControllerResponseInterface;
use Chevere\Components\Controller\ControllerResponse;

public function run(ControllerArgumentsInterface $args): ControllerResponseInterface
{
    // I can read $args...
    return new ControllerResponse(true, []);
}
```

##### Response

Response of `run` method is an object implementing [ControllerResponseInterface](../reference/Chevere/Interfaces/Controller/ControllerResponseInterface.md), which can be success (`true`) or failure (`false`) and it must provide an array for the response data.
****