# Controller

Controller is the basic building block for incoming actions to your application. A controller will be in charge of handling the user input arguments, and to drive it towards your application instructions.

## Defining Controllers

A Controller implements the [ControllerInterface](../reference/Chevere/Interfaces/Controller/ControllerInterface.md) and there's a base `Chevere\Components\Controller\Controller` controller that you can use.

Code below defines `SampleController` class by extending `Controller`.

```php
<?php

declare(strict_types=1);

namespace App\Controllers;

use Chevere\Components\Controller\Controller;

final class SampleController extends Controller
{
    // ...
}
```

### Controller Methods

#### getDescription()

This method is used to define the controller description, which is what the controller does (by default).

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

It must return a  an object implementing [ControllerParametersInterface](../reference/Chevere/Interfaces/Controller/ControllerParametersInterface.md), which is a collection of objects implementing [ControllerParameterInterface](../reference/Chevere/Interfaces/Controller/ControllerParameterInterface.md).

```php
use Chevere\Interfaces\Controller\ControllerParametersInterface;
use Chevere\Components\Controller\ControllerParameters;
use Chevere\Components\Controller\ControllerParameter;
use Chevere\Components\Controller\ControllerParameterOptional;

public function getParameters(): ControllerParametersInterface
{
    return (new ControllerParameters)
        ->withAdded(
            (new ControllerParameter('id'))
                ->withRegex('/^\d+$/')
                ->withDescription('The user id.')
        )
        ->withAdded(
            (new ControllerParameterOptional('alias'))
                ->withRegex('/^\w+$/')
                ->withDescription('The user alias.')
        );
}
```

For the code above, the argument value for parameter `id` must match against `/^d+$/` and it is required. In the other hand `alias` is an optional parameter that matches against `/^\w+$/`.

##### Parameter

Each controller parameter implements [ControllerParameterInterface](../reference/Chevere/Interfaces/Controller/ControllerParameterInterface.md).

#### run()

The `run` method defines the instruction to run. It is responsible of issuing a controller response.

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

## Advanced controllers

### Pluggable

Controllers can be fully [pluggable](Pluggable.md) allowing to extend its the operation at runtime. You can use plugs to safely alter the controller behavior.

### Serviceable

Controllers can implement [service](Service.md) which allows to explicitly define the services required by a given controller.

## Controller Runner

The component in charge of running a controller is defined by the [ControllerRunnerInterface](../reference/Chevere/Interfaces/Controller/ControllerRunnerInterface.md). A controller runner take a controller and execute it against the provided controller arguments.
