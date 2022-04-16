# Controller

The Controller component is a special type of action in charge of handling external-driven instructions. It is the same as [Action](Action.md), but it takes only input string parameters.

Controller is intended to use them wired to:

* CLI applications
* Web Servers
* Application runners

💡 If you don't need to wire instructions to these devices you should be using [Action](Action.md), which doesn't restrict the input parameter type.

## Defining a Controller

A Controller implements the `ControllerInterface`. You can extend `Controller` to quick create a controller:

```php
use Chevere\Controller\Controller;

final class SomeController extends Controller
{
    // ...
}
```

### Controller input parameters

Parameters are defined in the `run` method (same as an action), but it just takes strings.

```php
public function run(string $pepito, string $paysTwice): array
{
    return [];
}
```
