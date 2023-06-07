# Controller

Namespace `Chevere\Controller`

The Controller component is a special type of [Action](action.md) in charge of handling incoming instructions. Its `run` method only takes parameters of type `string`.

Controller is intended to use them wired to:

* Web Servers (see [HttpController](http-controller.md) and [Router](../packages/router.md))
* CLI applications
* Application runners

## Defining a Controller

A Controller implements the `Interfaces\ControllerInterface`. You can extend `Controller` to quick create a compliant Controller:

```php
use Chevere\Controller\Controller;

final class SomeController extends Controller
{
    // ...
}
```

## Run Parameters

Parameters are defined in the `run` method, same as an [Action](action.md#run), but it just takes strings.

```php
public function run(string $pepito, string $paysTwice): array
{
    // ...
}
```

## Parameter Attribute

Use [StringRegex](attribute.md#stringregex) to hint run parameters. This enables to validate these parameters against a [Regex](regex.md) match when using the [getResponse](action.md#get-response) method.

```php
use Chevere\Attribute\StringRegex;

public function run(
    #[StringRegex('/^[a-z]$/')]
    string $pepito,
    #[StringRegex('/^[a-zA-Z]+$/', 'What it does')]
    string $paysTwice
): array
{
    // ...
}
```
