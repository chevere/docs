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

class ResourceGet extends Controller
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

Define accepted parameters for `$_FILES` using the `acceptFiles` method.

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

### With Request

Use method `withRequest` to inject a [PSR-7 ServerRequest](https://www.php-fig.org/psr/psr-7/#31-psrhttpmessageserverrequestinterface) instance. This will assert the request against the defined `accept*` methods.

```php
use Psr\Http\Message\ServerRequestInterface;

$controller = $controller
    ->withRequest($request);
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

Use method `body` to return the body typed.

```php
$string = $controller->body()->string();
```

### Files

Use method `files` to access the files parameters, in the format of `$_FILES` arguments.

```php
$files = $controller->files();
$files->required('myFile')->array(); // $_FILES['myFile']
```

Use method `uploadedFiles` to read the files as a map of [PSR-7 UploadedFile](https://www.php-fig.org/psr/psr-7/#16-uploaded-files) instances.

```php
$uploadedFiles = $controller->uploadedFiles();
$myFile = $uploadedFiles->get('myFile');
```

## ControllerException

Use `ControllerException` to throw errors at the controller layer.

```php
use Chevere\Http\Controller;
use Chevere\Http\Exceptions\ControllerException;

class ResourceGet extends Controller
{
    public function __invoke(): void
    {
        throw new ControllerException('Resource not found', 404);
    }
}
```

### Problem details for HTTP APIs (RFC 9457)

Problem details for HTTP APIs [RFC 9457](https://www.rfc-editor.org/info/rfc9457/) provide a standardized way to convey machine-readable details of errors in HTTP responses. You can use `ControllerException` to return problem details in a structured format.

```php
use Chevere\Http\Controller;
use Chevere\Http\Exceptions\ControllerException;

class ResourcePatch extends Controller
{
    public function __invoke(): void
    {
        $this->addError('email', 'Disposable email addresses are not permitted');
        throw new ControllerException(code: 422, errors: $this->errors());
    }
}
```

Both `ControllerInterface` and `ControllerException` provide the public `errors` method to access the errors associated with the controller or exception.

### Exception with Return

With `ControllerException` you can define a `return` property matching the controller `acceptReturn` context. This will enable to return a structured response to the client, while still throwing an exception.

```php
use Chevere\Http\Attributes\Response;
use Chevere\Http\Controller;
use Chevere\Http\Exceptions\ControllerException;
use Chevere\Http\Header;
use Chevere\Http\Status;
use Chevere\Parameter\Interfaces\ArrayParameterInterface;
use function Chevere\Parameter\arrayp;
use function Chevere\Parameter\string;

class ResourceGet extends Controller
{
    public function __invoke(): array
    {
        if($happyPath) {
            return [
                'message' => 'Your account is confirmed. You can now continue.',
                'link' => [
                    'href' => '/apps',
                    'text' => 'Go to Apps ->',
                ],
            ];
        }
        throw new ControllerException(
            'Verification link not found',
            404,
            return: [
                'message' => 'The verification link may have expired, been already used, or is invalid.',
                'link' => [
                    'href' => '/signup',
                    'text' => 'Return to Signup',
                ],
            ]
        );
    }

    public static function acceptReturn(): ArrayParameterInterface
    {
        return arrayp(
            message: string(),
            link: arrayp(
                href: string(),
                text: string()
            )
        );
    }
}
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

### Middleware with Arguments

Use `MiddlewareNameWithArgumentsTrait` to define Middleware with arguments:

```php
use Chevere\Http\Interfaces\MiddlewareNameInterface;
use Chevere\Http\Traits\MiddlewareNameWithArgumentsTrait;
use Nyholm\Psr7\Factory\Psr17Factory;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;

class AllowListMiddleware implements MiddlewareInterface
{
    use MiddlewareNameWithArgumentsTrait;

    private string $allowList;

    public function setUp(string $allowList): void
    {
        $this->allowList = $allowList;
    }

    public static function with(string $allowList): MiddlewareNameInterface
    {
        return static::middlewareName(...get_defined_vars());
    }

    public function process(
        ServerRequestInterface $request,
        RequestHandlerInterface $handler,
    ): ResponseInterface {
        if ($this->allowList === '') {
            return $handler->handle($request);
        }
        $remoteAddress = $request->getServerParams()['REMOTE_ADDR'] ?? '';
        if ($remoteAddress === '') {
            return (new Psr17Factory())
                ->createResponse(
                    400,
                    'Unable to determine client IP address'
                );
        }
        if (! isIpAllowed($remoteAddress, $this->allowList)) {
            return (new Psr17Factory())
                ->createResponse(
                    403,
                    'Access denied from your IP address'
                );
        }

        return $handler->handle($request);
    }
}
```

This allows to pass MiddlewareName with constructor arguments, as when defining [routes](https://chevere.org/packages/router):

```php
$middlewareName = AllowListMiddleware::with('192.168.1.1');
```

## Attributes

Use [attributes](https://www.php.net/manual/en/language.attributes.overview.php) to add context for [Controller](#controller) and [Middleware](#middleware). The context defined by the attributes is understood by the [Router](https://chevere.org/packages/router) and [Schwager](https://chevere.org/packages/schwager) packages, to hint status codes, headers and to generate HTTP API documentation.

### Description

Use the `Description` attribute to add a description explaining the purpose of a Controller or Middleware.

```php
use Chevere\Http\Attributes\Description;

#[Description('This is a description')]
class ResourceGet extends Controller
```

Use function `descriptionAttribute` to read the `Description` attribute.

```php
use function Chevere\Http\descriptionAttribute;

descriptionAttribute(ResourceGet::class);
```

### Request

Use the `Request` attribute to define request metadata for a Controller or Middleware. It supports to define multiple Header arguments.

```php
use Chevere\Http\Attributes\Request;
use Chevere\Http\Header;
use Chevere\Http\Controller;

#[Request(
    new Header('Accept', 'application/json'),
    new Header('Connection', 'keep-alive')
)]
class ResourceGet extends Controller
```

Use function `requestAttribute` to read the `Request` attribute.

```php
use function Chevere\Http\requestAttribute;

requestAttribute(ResourceGet::class);
```

### Response

Use the `Response` attribute to define response metadata for a Controller or Middleware. It supports to define Status and multiple Header arguments.

```php
use Chevere\Http\Attributes\Response;
use Chevere\Http\Header;
use Chevere\Http\Controller;

#[Response(
    new Status(200, error: 400),
    new Header('Content-Disposition', 'attachment'),
    new Header('Content-Type', 'application/json')
)]
class ResourceGet extends Controller
```

Use function `responseAttribute` to read the `Response` attribute.

```php
use function Chevere\Http\responseAttribute;

responseAttribute(ResourceGet::class);
```
