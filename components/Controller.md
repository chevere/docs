# Controller

Controller is the basic building block for incoming actions to your application. A controller will be in charge of handling the user input arguments and to drive it towards your application instructions.

A Controller implements the [ControllerInterface](../reference/Chevere/Interfaces/Controller/ControllerInterface.md).

## Defining Controllers

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

### Run

The `run` method defines the instruction to run when the controller will be executed. It is responsible of issuing a response.

The argument passed to `run` method implements [ControllerArgumentsInterface](../reference/Chevere/Interfaces/Controller/ControllerArgumentsInterface.md) and it will always reflect the parameters declaration.

```php
use Chevere\Interfaces\Controller\ControllerArgumentsInterface;
use Chevere\Interfaces\Controller\ControllerResponseInterface;
use Chevere\Components\Controller\ControllerResponse;

public function run(
    ControllerArgumentsInterface $args
): ControllerResponseInterface
{
    return new ControllerResponse(true);
}
```

#### Response

Response of `run` method is an object implementing [ControllerResponseInterface](../reference/Chevere/Interfaces/Controller/ControllerResponseInterface.md), which can be success or fail and include some data.

### Description

The `getDescription` method is used to describe what the controller does.

```php
public function getDescription(): string
{
    return 'It says "Hello, <name>!"';
}
```

### Parameters

The `getParameters` method is used to describe the controller parameters by returning an object implementing [ControllerParametersInterface](../reference/Chevere/Interfaces/Controller/ControllerParametersInterface.md).

```php
use Chevere\Interfaces\Controller\ControllerParametersInterface;
use Chevere\Components\Controller\ControllerParameters;
use Chevere\Components\Controller\ControllerParameter;

public function getParameters(): ControllerParametersInterface
{
    return (new ControllerParameters)
        ->withAdded(
            new ControllerParameter(
                'name',
                new Regex('/^\w+$/')
            )
        );
}
```

#### Parameter

Each controller parameter implements [ControllerParameterInterface](../reference/Chevere/Interfaces/Controller/ControllerParameterInterface.md), which wraps the parameter name and its regex.

```php
use Chevere\Components\Controller\ControllerParameter;
use Chevere\Components\Regex\Regex;

$regex = new Regex('/^[0-9]+$/');
$parameter = new ControllerParameter('id', $regex);
```

> For the code above, the argument value for parameter `name` must match against `/^\w+$/`.

#### Parameter Optional

By default, a controller parameter is created as required. Use `withIsRequired` method to make it optional by passing `false`.

```php
$parameter = $parameter->withIsRequired(false); 
```

#### Parameter Description

By default, a controller parameter is created without any description. Use `withDescription` method to add a description.

```php
$parameter = $parameter
    ->withDescription('The numeric ID for the order');
```

### setUp & tearDown

The `setUp` method is executed before the `run` method. The `tearDown` method is executed after the `run` method.

Both methods allows to provide any kind of logic you may need to prepare/clean before and after executing `run` method.

```php
private resource $resource;

public function setUp(): void
{
    $this->resource = fopen('php://output', 'r+');
}

public function tearDown(): void
{
    fclose($this->resource);
}
```