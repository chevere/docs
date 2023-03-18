# HttpController

Namespace `Chevere\HttpController`

The HttpController component is a special [controller](controller.md) meant to be used in the context of HTTP requests. The HttpController extends Controller by adding request [parameters](parameter.md) (query string, body, files) and Middleware.

HttpController implements the `Interfaces\HttpControllerInterface`.

## Accept Query

Define accepted parameters for query string using the `acceptQuery` method.

```php
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\arrayp;
use function Chevere\Parameter\stringp;

public function acceptQuery(): ArrayTypeParameterInterface
{
    return arrayp(
        foo: stringp('/^[a-z]+$/'),
    );
}
```

## Accept Body

Define accepted parameters for body using the `acceptBody` method.

```php
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\arrayp;
use function Chevere\Parameter\stringp;

public function acceptBody(): ArrayTypeParameterInterface
{
    return arrayp(
        bar: stringp('/^[1-9]+$/'),
    );
}
```

## Accept Files

Define accepted parameters for FILES using the `acceptFiles` method.

```php

use Chevere\Parameter\Interfaces\ArrayParameterInterface;
use function Chevere\Parameter\arrayp;
use function Chevere\Parameter\filep;

public function acceptFiles(): ArrayTypeParameterInterface
{
    return arrayp(
        myFile: filep(),
    );
}
```

## With Query

Set query parameters using the `withQuery` method. It will only accept arguments complying with [Accept Query](#accept-query).

```php
$controller = $controller
    ->withQuery($_GET);
```

## With Body

Set body parameters using the `withBody` method. It will only accept arguments complying with [Accept Body](#accept-body).

```php
$controller = $controller
    ->withBody($_POST);
```

## With Files

Set files parameters using the `withFiles` method. It will only accept arguments complying with [Accept Files](#accept-files).

```php
$controller = $controller
    ->withFiles($_FILES);
```

## With Middleware

Define middleware using `withMiddleware` method by passing a collection of [PSR Middleware](https://www.php-fig.org/psr/psr-15/) objects.

```php
use Chevere\Controller\HttpMiddleware;

$middleware = new HttpMiddleware(
    new PsrMiddleware(),
    new AnotherPsrMiddleware()
);
$controller = $controller
    ->withMiddleware($middleware);
```

Middleware priority goes from top to bottom, first in first out (FIFO).

## Query

Use method `query` to read query parameters.

```php
$query = $controller->query();
```

## Body

Use method `body` to read the body parameters.

```php
$post = $controller->body();
```

## Files

Use method `files` to read the files parameters.

```php
$files = $controller->files();
```

## Middleware

Use method `middleware` to read the `HttpMiddleware` collection.

```php
$middleware = $controller->middleware();
// within $this context:
$this->middleware();
```
