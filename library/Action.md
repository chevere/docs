# Action

The Action component is in charge of providing context for executing any given instruction. Its purpose is to provide a typed layer for handling input instructions to a system.

This component enables to define input parameters, its regex validation, default values, description and expected return parameters.

## Defining an Action

An action implements the `ActionInterface`. You can extend `Action` to quick create an action:

```php
use Chevere\Action\Action;

final class SomeAction extends Action
{
    // ...
}
```

### Description

The `getDescription` method is used to define the action description, which is a short summary explaining the purpose of the action.

```php
public function getDescription(): string
{
    return 'It gets the user email.';
}
```

### Input Parameters

The `getParameters` method is used to define the action Parameters, which will be used to provide matching [run](#run) method arguments.

💡 **Related:** Check the [Parameter](Parameter.md) documentation.

```php
use Chevere\Parameter\Interfaces\ParametersInterface;
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\integerParameter;

public function getParameters(): ParametersInterface
{
    return
        parameters(
            id: integerParameter(
                description: 'The user id.',
            )
        );
}
```

### Response Parameters

The `getResponseParameters` method is used to define the  parameters which will be checked against the response data provided in the [run](#run) method.

```php
use Chevere\Parameter\Interfaces\ParametersInterface;
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\stringParameter;

public function getResponseParameters(): ParametersInterface
{
    return parameters(
        email: stringParameter()
    );
}
```

### Run

The `run` method is used to define the action logic that will be executed by the action runner.

```php
use Chevere\Parameter\Interfaces\ArgumentsInterface;
use Chevere\Response\Interfaces\ResponseInterface;

public function run(ArgumentsInterface $arguments): ResponseInterface
{
    $id = $arguments->getInteger('id');

    return $this->getResponse(
        email: (new User($id))->email
    );
}
```

In the example above, an exception will be thrown if the response fails to provide the expected `Chevere\Parameter\StringParameter` type for `email`.

## Running actions

Use `actionRun` function to run an action. This will return an object implementing `Chevere\Action\Interfaces\ActionRunInterface`.

```php
use function Chevere\Action\actionRun;

$run = actionRun($action, id: 123);
```
