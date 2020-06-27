# Controller

Controllers are the basic building block for incoming actions to your application. They are in charge of handling the user input arguments and to drive it towards your application instructions.

## Defining Controllers

```php
<?php

declare(strict_types=1);

namespace App\Controllers;

use Chevere\Components\Controller\Controller;
use Chevere\Components\Controller\ControllerResponse;
use Chevere\Interfaces\Controller\ControllerArgumentsInterface;
use Chevere\Interfaces\Controller\ControllerResponseInterface;

final class SampleController extends Controller
{
    public function run(ControllerArgumentsInterface $args): ControllerResponseInterface
    {
        return new ControllerResponse(true);
    }
}
```

In this `SampleController` the `run` method returns a success controller response without any data. It doesn't add a description neither declare any parameter.

### Description

The `getDescription` method is used to describe what the controller does.

```php
public function getDescription(): string
{
    return 'It says "Hello, <name>!"';
}
```
> 👍🏾 It is generally a good practice to explicit define what a controller does.

### Parameters

The `getParameters` method is used to describe the controller parameters. Each controller parameter is defined with a name and a regular expression for the expected argument value.

```php
public function getParameters(): ControllerParametersInterface
{
    return (new ControllerParameters)
        ->withParameter(
            new ControllerParameter('name', new Regex('/^\w+$/'))
        );
}
```
For the code above, the argument value for parameter `name` must match against `/^\w+$/`.

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

### Run

The `run` method is used to handle the controller arguments. The method will pass the argument `$args` and is responsible of issuing a response.

```php
public function run(ControllerArgumentsInterface $args): ControllerResponseInterface
{
    $name = $args->get('name'); // string "rodolfo"

    return (new ControllerResponse(true)) // bool true=success
        ->withData(["Hello, $name!"]); // array ["Hello, rodolfo!"]
}
```

#### Arguments passed 

The argument passed to `run` method (`$args`) implements `Chevere\Interfaces\Controller\ControllerArgumentsInterface` and it will always reflect the parameters declaration.

#### Response

Response of `run` method is an object implementing `Chevere\Interfaces\Controller\ControllerResponseInterface`, which can be success or fail and optionally append an `array` of data by using the `withData` method.

## Parameters

The `Chevere\Components\Controller\ControllerParameters` class is a simple data structure used to create the controller parameters collection. 

```php
$parameters = (new ControllerParameters)
    ->withParameter($parameter);
```

### Controller Parameter

The `Chevere\Components\Controller\ControllerParameter` class is used to create a controller parameter by passing the parameter name and its regex.

```php
$regex = new Regex('/^[0-9]+$/');
$parameter = new ControllerParameter('id', $regex);
```

#### Parameter optional

By default, a controller parameter is created as required. Use `withIsRequired` method to make it optional by passing `false`.

```php
$parameter = $parameter
    ->withIsRequired(false); 
```

#### Parameter description

By default, a controller parameter is created without any description. Use `withDescription` method to add a description.

```php
$parameter = $parameter
    ->withDescription('The numeric ID for the order');
```

## Arguments

The `Chevere\Components\Controller\ControllerArguments` class is used to interact with the controller passed arguments.

Arguments will be passed in the `run` method which will be executed only if the parameters provided meets the requirements.

## Example Controller

The `HelloYouController` below is a controller which responds success with `["Hello, $name$alias!"]` data.

The parameter `name` is required, matching alphanumeric and underscore. The parameter `alias` is optional and matches `1` or more non-whitespace chars, it also describes the purpose of the `alias` parameter as `"How people call you"`.

```php
<?php

declare(strict_types=1);

namespace App\Controllers;

use Chevere\Components\Controller\Controller;
use Chevere\Components\Controller\ControllerParameter;
use Chevere\Components\Controller\ControllerParameters;
use Chevere\Components\Controller\ControllerResponse;
use Chevere\Interfaces\Controller\ControllerArgumentsInterface;
use Chevere\Interfaces\Controller\ControllerParametersInterface;
use Chevere\Interfaces\Controller\ControllerResponseInterface;

final class HelloYouController extends Controller
{
    public function getParameters(): ControllerParametersInterface
    {
        return (new ControllerParameters)
            ->withParameter(
                new ControllerParameter(
                    'name',
                    new Regex('/^\w+$/')
                )
            )
            ->withParameter(
                (new ControllerParameter(
                    'alias',
                    new Regex('/\S+/')
                )
                    ->withIsRequired(false)
                    ->withDescription('How people call you')
            );
    }

    public function run(ControllerArgumentsInterface $args): ControllerResponseInterface
    {
        $name = $args->get('name');
        $alias = '';
        if($args->has('alias')) {
            $alias = ' ('.$args->get('alias').')';
        }

        return (new ControllerResponse(true))
            ->withData(["Hello, $name$alias!"]);
    }
}
```

If the passed arguments are  `name=rodolfo` and `alias=Don*Chevere` it will return a success response with `["Hello, rodolfo (Don*Chevere)"]`.

## Running a Controller

The `Chevere\Components\Controller\ControllerRunner` class is in charge of executing the controller instructions. It can be used to run any controller in the system.

```php
$controller = new HelloYouController;
$runner = new ControllerRunner($controller);
$arguments = new ControllerArguments(
    $controller->parameters(),
    [
        'name' => 'rodolfo',
        'alias' => 'Don*Chevere',
    ]
);
$ran = $runner->ran($args);
echo $ran->hasThrowable()
    ? $ran->throwable->getMessage()
    : implode(' ', $ran->data);

exit $ran->code();
```

The controller runner `ran` method returns an object implementing `Chevere\Interfaces\Controller\ControllerRanInterface`. This object will contain the response and data for the controller `run` for the passed `$args`.

> 👍🏾 It is a good practice to create different controllers for each actor you may need. Don't do magic all-in-one controllers aiming to be used by different actors. Don't fall into the laziness.

## Implementing Plugins

TODO.