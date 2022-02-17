# Action

`🚧 OUTDATED DOCS`

The Action component is in charge of providing a context for executing any given instruction.

## Defining an Action

```php
use Chevere\Action\Action;

final class SomeAction extends Action
{
    // ...
}
```

### Description

The `getDescription` method is used to define the action description. This is a short summary explaining the purpose of the action.

```php
public function getDescription(): string
{
    return 'It says "Hello, <name>!"';
}
```

### Parameters

The `getParameters` method is used to define the action Parameters, which will be used to provide matching [run](#run) method arguments.

```php
use Chevere\Interfaces\Parameter\ParametersInterface;
use Chevere\Parameter\Parameters;
use Chevere\Parameter\IntegerParameter;

public function getParameters(): ParametersInterface
{
    return new Parameters(
        id: (new IntegerParameter)
                ->withDescription('The user id.')
    );
}
```

### Response Data

The `getResponseParameters` method is used to define the response data parameters, which will be checked against the response data provided in the [run](#run) method.

```php
use Chevere\Interfaces\Parameter\ParametersInterface;
use Chevere\Parameter\Parameters;
use Chevere\Parameter\IntegerParameter;

public function getResponseParameters(): ParametersInterface
{
    return new Parameters(
        email: new StringParameter()
    );
}
```

### Run

The `run` method is used to define the actual action instruction that will carried. It pass a variadic number of arguments which are checked against the defined action parameters.

It must return a [Response](../reference/Chevere/Components/Response/Response.md) object.

```php
use Chevere\Interfaces\Parameter\ArgumentsInterface;
use Chevere\Interfaces\Response\ResponseInterface;

public function run(ArgumentsInterface $arguments): ResponseInterface
{
    $id = $arguments->getInteger('id');

    return $this->getResponse(
        email: (new User($id))->email
    );
}
```

Passed named arguments will be typed against the defined action parameters.
