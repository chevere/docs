# Action

The Action component is in charge of providing context for executing any instruction. Its purpose is to provide a typed layer for handling input instructions to a system.

## Defining an Action

An action implements the `Chevee\Action\Interfaces\ActionInterface`.

👉 You can extend `Action` to quick create an action:

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

The `run` method is used to define the logic that will be executed. The return type must be of type `array`.

💡 You can define as many arguments you need, of any type.

```php
use Chevere\Parameter\Interfaces\ArgumentsInterface;
use Chevere\Response\Interfaces\ResponseInterface;

public function run(string $name): array
{
    // ...
    return [
        'email' => $user->email
    ];
}
```

👉 Attributes can be used to provide more context for run parameters and save some boilerplate.

### Description attribute

The DescriptionAttribute will define the paramater description.

```php
use Chevere\Common\Attributes\DescriptionAttribute;

public function run(
    #[DescriptionAttribute('The user name.')]
    string $name
): array {
    // ...
}
```

### Regex attribute

The RegexAttribute applied to `string` will require the paramater to validate the defined regular expression.

```php
use Chevere\Regex\Attributes\RegexAttribute;

public function run(
    #[RegexAttribute('/^\w$/')]
    string $name
): array {
    // ...
}
```

## Response Parameters

The `getResponseParameters` method is used to define the parameters which will be checked against the response data provided in the [run](#run) method.

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

## Container

Action supports [Container](Container.md), enabling to provide services for Actions. A service should be understood as any *persistent* reference, which doesn't depend on the `run` signature.

👏 You can use *any* PSR-compatible container.

### Requiring services

The `getContainerParameters` method is used to define the services **required** by the Action.

```php
use Chevere\Parameter\Interfaces\ParametersInterface;
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\objectParameter;
use PDO;
use Redis;

public function getContainerParameters(): ParametersInterface
{
    return parameters(
        pdo: objectParameter(PDO::class),
        redis: objectParameter(Redis::class),
    );
}
```

For the code above, the action runner a `InvalidArgumentException` will be thrown if both `pdo` and `redis` services aren't provided. Also, a `TypeError` if `pdo` or `redis` doesn't implement the required interface.

### Injecting a container

Use `withContainer` method to pass container implementing `Psr\Container\ContainerInterface` to the action.

```php
use Chevere\Container\Container;

$action = new SomeAction();
$action = $action->withContainer($container);
```

For the code above, a `InvalidArgumentException` will be thrown if `$container` doesn't provide the services required by `SomeAction`.

### Accesing the container

Use `container` method to access the action container instance.

```php
public function run(string $name): array
{
    $container = $this->container();
    $pdo = $container->get('pdo');
    // ...
}
```

## Running actions

Use `runner` function to run an action. This will return an object implementing `Chevere\Response\Interfaces\ResponseInterface`.

```php
use function Chevere\Action\actionRun;

// ...
$response = $action->runner(name: 'godlike');
```
