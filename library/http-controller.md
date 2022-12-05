# HttpController

An HttpController is a special [controller](controller.md) meant to be used in the context of HTTP requests. The HttpController extends Controller by adding request parameters (GET, POST, FILES) and Middleware.

## Accept

HttpController enables to define accepted parameters for GET, POST and FILES.

In the examples below `MyController` defines parameters accepted. On runtime, it will check against these and throw an error when trying to define parameters not accepted.

### Accept GET

```php
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\stringParameter;

public function acceptGet(): ParametersInterface
{
    return parameters(
        foo: stringParameter('/^[a-z]+$/'),
    );
}
```

### Accept POST

```php
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\stringParameter;

public function acceptPost(): ParametersInterface
{
    return parameters(
        bar: stringParameter('/^[1-9]+$/'),
    );
}
```

### Accept FILES

```php
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\stringParameter;

public function acceptFiles(): ParametersInterface
{
    return parameters(
        myFile: arrayParameter(),
    );
}
```
