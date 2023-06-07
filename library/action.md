# Action

Namespace `Chevere\Action`

The Action component is in charge of providing context for executing any instruction. Its purpose is to provide a typed layer for handling input instructions to a system.

## Defining an Action

An action implements the `Interfaces\ActionInterface`.

👉 You can extend `Action` to quick create an action:

```php
use Chevere\Action\Action;

final class SomeAction extends Action
{
    // ...
}
```

## Description

The `description` method is used to define the action description, a short summary explaining the purpose of the action.

```php
public static function description(): string
{
    return 'It gets the user email.';
}
```

## Run

The `run` method is used to define the logic that will be executed. The return type must be of type `array`.

💡 You can define as many arguments you need, of any type.

```php
public function run(User $user): array
{
    // ...
    return [
        'email' => $user->email
    ];
}
```

### Attributes

Attributes can be used to provide context for run parameters.

👉 Refer to [Attribute](attribute.md) for parameter attributes.

## Response Parameters

The `acceptResponse` method is used to define the parameters which will be checked against the response data provided in the [run](#run) method.

```php
use Chevere\Parameter\Interfaces\ArrayTypeParameterInterface;
use function Chevere\Parameter\arrayp;
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\string;

public function acceptResponse(): ArrayTypeParameterInterface
{
    return arrayp(
        email: string()
    );
}
```

## Get Response

Use `getResponse` method to **run the action** and return an object implementing `Chevere\Response\Interfaces\ResponseInterface`.

All parameter checking will be executed on your behalf. Note: Do no use `run` as it won't perform any checking.

```php
$response = $action
    ->getResponse(name: 'godlike');
```
