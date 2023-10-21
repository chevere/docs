# Http

![Http](../src/packages/http/http-logo.svg)

Namespace `Chevere\Http`

The Http package provides tooling for building HTTP components.

::: tip 💡 Http introduction
 Read [Chevere Http](https://rodolfoberrios.com/2023/06/13/http/) at Rodolfo's blog for a compressive introduction to this package.
:::

## Installing

Http is available through [Packagist](https://packagist.org/packages/chevere/http) and the repository source is at [GitHub](https://github.com/chevere/http).

```sh
composer require chevere/http
```

## Controller

The Http Controller component is a special [controller](../library/controller.md) meant to be used in the context of HTTP requests. It extends [Action](../library/action.md) by adding request [parameters](../library/parameter.md) (query string, body, files) and attributes for statuses and headers.

### Accept Query

Define accepted parameters for query string using the `acceptQuery` method.

```php
use Chevere\Parameter\Interfaces\ArrayStringParameterInterface;
use function Chevere\Parameter\arrayp;
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\string;

public static function acceptQuery(): ArrayStringParameterInterface
{
    return arrayp(
        foo: string('/^[a-z]+$/'),
    );
}
```

### Accept Body

Define accepted parameters for body using the `acceptBody` method.

```php
use Chevere\Parameter\Interfaces\ArrayTypeParameterInterface;
use function Chevere\Parameter\arrayp;
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\string;

public static function acceptBody(): ArrayTypeParameterInterface
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

public static function acceptFiles(): ArrayTypeParameterInterface
{
    return arrayp(
        myFile: file(),
    );
}
```

### With Query

Set query parameters using the `withQuery` method. It will only accept arguments complying with [Accept Query](#accept-query).

```php
$controller = $controller
    ->withQuery($_GET);
```

### With Body

Set body parameters using the `withBody` method. It will only accept arguments complying with [Accept Body](#accept-body).

```php
$controller = $controller
    ->withBody($_POST);
```

### With Files

Set files parameters using the `withFiles` method. It will only accept arguments complying with [Accept Files](#accept-files).

```php
$controller = $controller
    ->withFiles($_FILES);
```

### Query

Use method `query` to read query parameters.

```php
$query = $controller->query();
```

### Body

Use method `body` to read the body parameters.

```php
$post = $controller->body();
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
class MyResourceGet extends Controller
```

Use function `getRequest` to read the `Request` attribute.

```php
use function Chevere\Http\getRequest;

getRequest(MyResourceGet::class);
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
class MyResourceGet extends Controller
```

Use function `getResponse` to read the `Response` attribute.

```php
use function Chevere\Http\getResponse;

getResponse(MyResourceGet::class);
```

## HTTP Methods

### ConnectMethod

`CONNECT`

Establish a tunnel to the server identified by the target resource.

```php
use Chevere\Http\Methods\ConnectMethod;

$connect = new ConnectMethod();
```

### DeleteMethod

`DELETE`

Remove all current representations of the target resource.

```php
use Chevere\Http\Methods\DeleteMethod;

$delete = new DeleteMethod();
```

### GetMethod

`GET`

Transfer a current representation of the target resource.

```php
use Chevere\Http\Methods\GetMethod;

$get = new GetMethod();
```

### HeadMethod

`HEAD`

Same as GET, but only transfer the status line and header section.

```php
use Chevere\Http\Methods\HeadMethod;

$head = new HeadMethod();
```

### OptionsMethod

`OPTIONS`

Describe the communication options for the target resource.

```php
use Chevere\Http\Methods\OptionsMethod;

$options = new OptionsMethod();
```

### PatchMethod

`PATCH`

Apply partial modifications described in the request entity to the target resource.

```php
use Chevere\Http\Methods\PatchMethod;

$path = new PatchMethod();
```

### PostMethod

`POST`

Perform resource-specific processing on the request payload.

```php
use Chevere\Http\Methods\PostMethod;

$post = new PostMethod();
```

### PutMethod

`PUT`

Replace all current representations of the target resource with the request payload.

```php
use Chevere\Http\Methods\PutMethod;

$put = new PutMethod();
```

### TraceMethod

`TRACE`

Perform a message loop-back test along the path to the target resource.

```php
use Chevere\Http\Methods\TraceMethod;

$trace = new TraceMethod();
```
