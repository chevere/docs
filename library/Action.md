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

## Description

The `getDescription` method is used to define the action description, which is a short summary explaining the purpose of the action.

```php
public function getDescription(): string
{
    return 'It gets the user email.';
}
```

## Run

The `run` method is used to define the logic that will be executed. In the example below, an exception will be thrown if run response fails to provide the expected [response parameter](#response-parameters) signature.

```php
use Chevere\Parameter\Interfaces\ArgumentsInterface;
use Chevere\Response\Interfaces\ResponseInterface;

public function run(string $name): ResponseInterface
{
    // ...
    return $this->getResponse(
        email: (new User($name))->email
    );
}
```

💡 Attributes can be used to provide more context for run parameters and save some boilerplate.

### Description attribute

The DescriptionAttribute will define the paramater description.

```php
use Chevere\Common\Attributes\DescriptionAttribute;

public function run(
    #[DescriptionAttribute('The user name.')]
    string $name
) {
    // ...
}
```

### Regex attribute

The RegexAttribute applied to `string` will require the paramater to validate the given regular expression.

```php
use Chevere\Regex\Attributes\RegexAttribute;

public function run(
    #[RegexAttribute('/^\w$/')]
    string $name
) {
    // ...
}
```

## Response Parameters

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

## Running actions

Use `actionRun` function to run an action. This will return an object implementing `Chevere\Action\Interfaces\ActionRunInterface`.

```php
use function Chevere\Action\actionRun;

$run = actionRun($action, name: 'rodolfo');
```
