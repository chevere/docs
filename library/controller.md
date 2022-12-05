# Controller

The Controller component is a special type of action in charge of handling external-driven instructions. It is the same as [Action](action.md), but it takes only input string parameters.

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

## HttpController

An HttpController is a special controller meant to be used in the context of HTTP requests. The HttpController extends Controller by adding request parameters (GET, POST, FILES and Middleware).

### Accept

HttpController enables to define accepted parameters for GET, POST and FILES. In the example below `MyController` defines which parameters will accept and on runtime, it will check against these accept methods to throw an error when trying to define parameters not accepted.

```php
use Chevere\Controller\HttpController;

use function Chevere\Parameter\parameters;
use function Chevere\Parameter\stringParameter;

class MyController extends HttpController
{
    public function acceptGet(): ParametersInterface
    {
        return parameters(
            foo: stringParameter('/^[a-z]+$/'),
        );
    }

    public function acceptPost(): ParametersInterface
    {
        return parameters(
            bar: stringParameter('/^[1-9]+$/'),
        );
    }

    public function acceptFiles(): ParametersInterface
    {
        return parameters(
            myFile: arrayParameter(),
        );
    }
}
```
