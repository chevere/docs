# Controller

Namespace `Chevere\Controller`

The Controller component is a special type of [Action](action.md) in charge of handling incoming instructions. Its `run` method only takes parameters of type `string`.

Controller is intended to use them wired to:

* Web Servers (see [Http](../packages/http.md) and [Router](../packages/router.md))
* CLI applications
* Application runners

## Defining a Controller

A Controller implements the `Interfaces\ControllerInterface`. You can extend `Controller` to quick create a compliant Controller:

```php
use Chevere\Controller\Controller;

class SomeController extends Controller
{
    // ...
}
```

## Run Parameters

Parameters are defined in the `run` method, same as an [Action](action.md#run), but it just takes strings.

```php
public function run(
    string $pepito,
    string $paysTwice
): array
{
    // ...
}
```

## Parameter Attributes

Use [Description](attribute.md#regex) and [Regex](attribute.md#regex) attributes to hint run input parameters.

```php
use Chevere\Attributes\Regex;

public function run(
    #[Regex('/^[a-z]$/')]
    string $pepito,
    #[Regex('/^[a-zA-Z]+$/')]
    string $paysTwice
): array
{
    // ...
}
```
