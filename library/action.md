# Action

Namespace `Chevere\Action`

The Action component is in charge of providing context for executing any instruction. Its purpose is to provide a typed layer for handling input instructions to a system.

## Defining an Action

An action implements the `Interfaces\ActionInterface`.

👉 You can extend `Action` to quick create an action:

```php
use Chevere\Action\Action;

class SomeAction extends Action
{
    // ...
}
```

### Attributes

Attributes can be used to provide context for Action (class) and run method parameters.

👉 Refer to [Attribute](attribute.md) for parameter attributes.

## Run

The `run` method is used to define the logic that will be executed. In the example below the `Regex` attribute adds input validation for email addresses on `@chevere.org` only.

```php
use Chevere\Attributes\Regex;

protected function run(
    #[Regex('/^[\w-\.]+@chevere\.org$/')]
    string $email
): int
{
    // ...
    return $id;
}
```

## Response Parameters

The `acceptResponse` method is used to define the parameter which will be checked against the response typed in the [run](#run) method.

```php
use Chevere\Parameter\Interfaces\ParameterInterface;
use function Chevere\Parameter\integer;

public static function acceptResponse(): ParameterInterface
{
    return integer(minimum: 1);
}
```

The example above defines to accept a response of type integer with a minimum value of `1`. If `run` return is `0` if will raise an exception.

## Get Response

Use `getResponse` method to **run the action**. It returns a `CastArgumentInterface` object.

```php
$response = $action
    ->getResponse(email: 'godlike@chevere.org');
$string = $response->string();
```
