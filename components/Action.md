# Action

The Action components are in charge of providing a context for executing any given instruction. Action is the basic building block for incoming actions to the application.

## Defining an Action

[ActionInterface](../reference/Chevere/Interfaces/Action/ActionInterface.md) describes the interface for the component in charge of defining an action.

There's a base `Chevere\Components\Action\Action` available to extend. Code below defines `SomeAction` class by extending `Chevere\Components\Action\Action`.

```php
use Chevere\Components\Action\Action;

final class SomeAction extends Action
{
    // ...
}
```

### Description

The `getDescription` method is used to define the action description, which is what the action does (by default).

```php
public function getDescription(): string
{
    return 'It says "Hello, <name>!"';
}
```

### Parameters

The `getParameters` method is used to define the action parameters, which later will be checked against arguments in the [run](#run) method.

It must return an object implementing [ParametersInterface](../reference/Chevere/Interfaces/Parameter/ParametersInterface.md).

```php
use Chevere\Interfaces\Parameter\ParametersInterface;
use Chevere\Components\Parameter\Parameters;
use Chevere\Components\Parameter\IntegerParameter;

public function getParameters(): ParametersInterface
{
    return (new Parameters)
        ->withAddedRequired(
            id: (new IntegerParameter)
                    ->withDescription('The user id.')
        );
}
```

### Response Data Parameters

The `getResponseDataParameters` method is used to define the response data parameters, which later will be checked against the response data provided in the [run](#run) method.

```php
use Chevere\Interfaces\Parameter\ParametersInterface;
use Chevere\Components\Parameter\Parameters;
use Chevere\Components\Parameter\IntegerParameter;

public function getResponseDataParameters(): ParametersInterface
{
    return (new Parameters)
        ->withAddedRequired(
            email: new StringParameter
        );
}
```

### Run

The `run` method is used to define the actual action instruction that will carried. It pass a variadic number of arguments which are checked against the defined action parameters.

It must return an object implementing [ResponseSuccessInterface](../reference/Chevere/Interfaces/Response/ResponseSuccessInterface.md).

```php
use Chevere\Components\Parameter\IntegerParameter;
use Chevere\Components\Parameter\Parameters;
use Chevere\Components\Response\ResponseSuccess;
use Chevere\Interfaces\Parameter\ArgumentsInterface;
use Chevere\Interfaces\Parameter\ParametersInterface;
use Chevere\Interfaces\Response\ResponseSuccessInterface;

public function run(ArgumentsInterface $arguments): ResponseSuccessInterface
{
    $id = $arguments->getInteger('id');
    $user = new User($id);
    return $this->getResponseSuccess([
        'email' => $user->email
    ]);
}
```

The `$arguments` passed will be typed against the defined action parameters.

## Controller

Controller is a special type of action in charge of handling user-triggered instructions and to drive it towards your application instructions. It extends on top of Action, adding an extra layer of context.

### Defining a Controller

[ControllerInterface](../reference/Chevere/Interfaces/Action/ControllerInterface.md) describes the interface for the component in charge of defining a Controller.

There's a base `Chevere\Components\Action\Controller` available to extend. Code below defines `SomeController` class by extending `Chevere\Components\Action\Controller`.

```php
use Chevere\Components\Actions\Controller;

final class SomeController extends Controller
{
    // ...
}
```

### Parameters (Controller)

Controller defines [parameters](#parameters) just like an Action, but all parameters must implement [StringParameterInterface](../reference/Chevere/Interfaces/Parameter/StringParameterInterface.md). As Controller is designed to be used for handling user-triggered instructions like HTTP endpoints, commands and any other possible layer, the input arguments are of type `string`.

## Context Parameters

Controller adds context to provide runtime variables that aren't directly taken from the user input. The `getContextParameters` method is used to define the action parameters, which later will be checked against arguments in the [run](#run) method.

It must return an object implementing [ParametersInterface](../reference/Chevere/Interfaces/Parameter/ParametersInterface.md).

```php
use Chevere\Interfaces\Parameter\ParametersInterface;
use Chevere\Components\Parameter\Parameters;
use Chevere\Components\Parameter\IntegerParameter;

public function getContextParameters(): ParametersInterface
{
    return (new Parameters)
        ->withAddedRequired(
            min: (new IntegerParameter)->withDefault(10)
        );
}
```

On runtime, the context will be added by running the `withContextArguments` method:

```php
use Chevere\Interfaces\Parameter\ParametersInterface;
use Chevere\Components\Parameter\Parameters;
use Chevere\Components\Parameter\IntegerParameter;

$controller = (new SomeController)
    ->withContextArguments(min: 200);
```
