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

Parameters are defined in the `getParameters` method (same as an action). Parameter types provided must be of type [StringParameter](Parameter.md#string-parameter).

```php
use Chevere\Parameter\Interfaces\ParametersInterface;
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\stringParameter;

public function getParameters(): ParametersInterface
{
    return
        parameters(
            id: stringParameter(),
            name: stringParameter(),
        );
}
```
