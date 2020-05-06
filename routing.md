# Routing

- [Routing](#routing)
  - [Introduction](#introduction)
  - [Routing Spec](#routing-spec)
    - [Paths](#paths)
    - [Route Name](#route-name)
    - [HTTP Methods to Controllers](#http-methods-to-controllers)
  - [Generating Routing Spec](#generating-routing-spec)

## Introduction

The Routing class is in charge of automatically generating HTTP routing. A Routing is a class implementing [RoutingInterface](Chevere\Components\Routing\Interfaces\RoutingInterface).

HTTP routing refers to the system that resolves HTTP requests to application instructions.

## Routing Spec

The routing spec refers to how routes must be defined in order to be able to use Routing.

### Paths

File system folders will reflect HTTP routes interpreted by Routing. The table below shows hows system paths are interpreted as HTTP route paths.

| System path                | HTTP route    |
| -------------------------- | ------------- |
| /var/routes/articles/      | /articles     |
| /var/routes/articles/{id}/ | /articles/123 |
| /var/routes/signup/        | /signup       |

Each folder must define a `RouteName.php` file and one `<methodName>.php` for each HTTP method.

### Route Name

A `RouteName.php` defines the route name, it must return an object implementing [RouteNameInterface](Chevere\Components\Routes\Interfaces\RouteNameInterface).

```php
// /var/routes/articles/{id}/RouteName.php
use Chevere\Components\Routes\RouteName;

return new RouteName('article-by-id');
```

The code above names route `/articles/{id}` as `article-by-id`.

> ⚠ Route names must be unique for each `RouteName.php` in the file system.

### HTTP Methods to Controllers

HTTP Methods are defined following `<methodName>.php` naming format, where `<methodName>` is the HTTP method name according to RFC 7231 and it must return an object implementing [ControllerInterface](Chevere\Components\Controller\Interfaces\ControllerInterface).

Accepted HTTP methods are: `CONNECT, DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT, TRACE`.

```php
// /var/routes/articles/{id}/PATCH.php
use App\Controllers\TheController;

return TheController;
```

The code above binds `PATCH /articles/{id}` to `TheController`.

> 👍 Routing supports wildcards, which will be automatically wired to matching controller parameters.

## Generating Routing Spec

The [Console] includes a built-in command to generate routes. This way, no single PHP file needs to be created manually.

```bash
vendor/bin/chevere route-create /articles/{id}
vendor/bin/chevere route-push -r /articles/{id} -m GET -c TheController
```