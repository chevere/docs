# Router

![Router](../src/packages/router/router-logo.svg)

Namespace `Chevere\Router`

The Router package provides a strict, strong typed router for HTTP requests.

::: tip 💡 Router introduction
 Read [Router for PHP](https://rodolfoberrios.com/2022/12/07/chevere-router/) at Rodolfo's blog for a compressive introduction to this package.
:::

## Installing

Router is available through [Packagist](https://packagist.org/packages/chevere/router) and the repository source is at [GitHub](https://github.com/chevere/router).

```sh
composer require chevere/router
```

## Features

* Define path, name, view, middleware and HTTP method to controller binding using named arguments.
* HTTP method binding works with [HttpController](../library/http-controller.md) objects.
* Wildcards (`{id}` in the code above) inherits regex from parameter attributes at controller layer.
  * Can be implicit (`{id}`) or explicit (`{id:[0-9]+}`).
  * Detects conflicts for all endpoints.
* Supports route groups, define `web`, `api`, `admin` and any group you may need to add.
* Supports [PSR middleware](https://www.php-fig.org/psr/psr-15/).

## Creating a Router

To create a Router, define a group name and its routes.

In the example below, the `web` group defines two routes and its corresponding endpoints for [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) to HTTP controller binding. Another group `api`, defines routing for API endpoints.

💡 Consider Router groups as namespaces, which resolves in the same website context.

```php
use function Chevere\Router\router;
use function Chevere\Router\routes;
use function Chevere\Router\route;

router(
    web: routes(
        route(
            path: '/',
            GET: new HomeGetController(),
        ),
        route(
            path: '/product/{id}',
            GET: new ProductGetController(),
            POST: new ProductPostController(),
        ),
    ),
    api: routes(
        route(
            path: '/api',
            GET: new ApiGetController(),
        ),
        route(
            path: '/api/product',
            DELETE: new ApiDeleteProductController(),
        ),
    )
);
```

🪄 HTTP method `HEAD` is automatic added when defining `GET`.

## Routes

A Route is the building block for Router, on its most elemental representation it defines a path that will be routed to a HTTP endpoint.

In the example below, the [run method](../library/action.md#run) of `HomeGetController` will be executed when resolving requests to `/`.

```php
use function Chevere\Router\route;

route(
    path: '/',
    GET: new HomeGetController(),
);
```

### Wildcards

Route path can define **wildcards**, enabling to pass dynamic route-path-based arguments to Controllers. In the example below, wildcard `{id}` determines a dynamic `run` argument for `ProductGetController`.

```php
use function Chevere\Router\route;

route(
    path: '/product/{id}',
    GET: new ProductGetController(),
),
```

At `ProductGetController` we define the regex for this `{id}` wildcard by using `StringRegex` annotation.

```php
use Chevere\Controller\HttpController;
use Chevere\Parameter\Attributes\StringRegex;

class ProductGetController extends HttpController
{
    public function run(
        #[StringRegex('/^[1-9]\d*/')]
        string $id
    ): array {
        // ...
    }
}
```

For the request `/product/123` the system will first check match of `123` against `/^[1-9]\d*/` and then it will pass `123` to the `run` method. Requests failing to match the defined regex will throw a HTTP 404 error.

### Additional attributes

Route may define **name** and **view** attributes. In the example below the Route at `/` gets a name and view binding.

```php
use Chevere\Controller\HttpMiddleware;
use function Chevere\Router\route;

route(
    path: '/',
    name: 'My Home',
    view: 'home/default',
    GET: new HomeGetController(),
);
```

### Middleware

Route can define **HTTP Middleware**, which is a collection of objects implementing `Psr\Http\Server\MiddlewareInterface`. In the example below, `CheckAuthToken` determines the validity of the request and `RedirectIfLoggedIn` will redirect to another location (usually the user profile).

```php
use Chevere\Controller\HttpMiddleware;
use function Chevere\Router\route;

route(
    path: '/',
    middleware: new HttpMiddleware(
        new CheckAuthToken(),
        new RedirectIfLoggedIn(),
    )
    GET: new HomeGetController(),
);
```
