---
sidebarDepth: 3
---

# Http

## Summary

Http is a library for creating HTTP components (Controller, Middleware, Header, Status) for [chevere/router](https://chevere.org/packages/router). It is compatible with the following [PHP-FIG](https://www.php-fig.org) PSR:

- PSR-7: HTTP message interfaces
- PSR-17: HTTP Factories
- PSR-18: HTTP Client

Read [Chevere Http](https://rodolfoberrios.com/2023/06/13/http/) at Rodolfo's blog for a compressive introduction to this package.

## Installing

Http is available through [Packagist](https://packagist.org/packages/chevere/http) and the repository source is at [chevere/http](https://github.com/chevere/http).

```sh
composer require chevere/http
```

## Controller

The Controller in Http is a special Controller meant to be used in the context of HTTP requests. It extends [Action](https://chevere.org/packages/action) by adding request [parameters](https://chevere.org/packages/parameter) (query string, body, files) and attributes for statuses and headers.

```php
use Chevere\Http\Controller;

class UsersPostController extends Controller
{
    // ...
}
```

### Accept Headers

Define accepted parameters for headers using the `acceptHeaders` method.

```php
use Chevere\Parameter\Interfaces\ArrayStringParameterInterface;
use function Chevere\Parameter\arrayString;
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\string;

public static function acceptHeaders(): ArrayStringParameterInterface
{
    return arrayString(
        ...['Webhook-Id' => string()],
    );
}
```

### Accept Query

Define accepted parameters for query string using the `acceptQuery` method.

```php
use Chevere\Parameter\Interfaces\ArrayStringParameterInterface;
use function Chevere\Parameter\arrayString;
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\string;

public static function acceptQuery(): ArrayStringParameterInterface
{
    return arrayString(
        foo: string('/^[a-z]+$/'),
    );
}
```

### Accept Body

Define accepted parameters for body using the `acceptBody` method.

```php
use Chevere\Parameter\Interfaces\ArrayParameterInterface;
use function Chevere\Parameter\arrayp;
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\string;

public static function acceptBody(): ArrayParameterInterface
{
    return arrayp(
        bar: string('/^[1-9]+$/'),
    );
}
```

### Accept Files

Define accepted parameters for FILES using the `acceptFiles` method.

```php

use Chevere\Parameter\Interfaces\ArrayParameterInterface;
use function Chevere\Parameter\arrayp;
use function Chevere\Parameter\file;

public static function acceptFiles(): ArrayParameterInterface
{
    return arrayp(
        myFile: file(),
    );
}
```

### With Server Request

Use method `withServerRequest` to inject a [PSR-7 ServerRequest](https://www.php-fig.org/psr/psr-7/#31-psrhttpmessageserverrequestinterface) instance. This will assert the request against the defined `accept*` methods.

```php
use Psr\Http\Message\ServerRequestInterface;

$controller = $controller
    ->withServerRequest($request);
```

### Headers

Use method `headers` to read headers parameters.

```php
$headers = $controller->headers();
$header = $headers->required('Webhook-Id');
```

### Query

Use method `query` to read query parameters.

```php
$query = $controller->query();
$foo = $query->required('foo');
```

### Body

Use method `bodyParsed` to read the body parameters parsed.

```php
$parsed = $controller->bodyParsed();
$bar = $parsed->required('bar')->int();
```

Use method `bodyStream` to return the body stream.

```php
$stream = $controller->bodyStream();
```

Use method `body` to return the body casted.

```php
$cast = $controller->body();
```

### Files

Use method `files` to read the files parameters.

```php
$files = $controller->files();
```

## Middleware

Define [PSR Middleware](https://www.php-fig.org/psr/psr-15/) collections using `middlewares` function.

```php
use function Chevere\Http\middlewares;

$middlewares = middlewares(
    MiddlewareOne::class,
    MiddlewareTwo::class
);
```

Middleware priority goes from top to bottom, first in first out (FIFO).

## Attributes

Use [attributes](https://www.php.net/manual/en/language.attributes.overview.php) to add context for [Controller](#controller) and [Middleware](#middleware).

### Request

Request metadata can be defined using the `Request` attribute. It supports to define multiple Header arguments.

```php
use Chevere\Http\Attributes\Request;
use Chevere\Http\Header;
use Chevere\Http\Controller;

#[Request(
    new Header('Accept', 'application/json'),
    new Header('Connection', 'keep-alive')
)]
class ResourceGetController extends Controller
```

Use function `getRequest` to read the `Request` attribute.

```php
use function Chevere\Http\getRequest;

getRequest(ResourceGetController::class);
```

### Response

Response metadata can be defined using the `Response` attribute. It supports to define Status and multiple Header arguments.

```php
use Chevere\Http\Attributes\Response;
use Chevere\Http\Header;
use Chevere\Http\Controller;

#[Response(
    new Status(200),
    new Header('Content-Disposition', 'attachment'),
    new Header('Content-Type', 'application/json')
)]
class ResourceGetController extends Controller
```

Use function `getResponse` to read the `Response` attribute.

```php
use function Chevere\Http\getResponse;

getResponse(ResourceGetController::class);
```
