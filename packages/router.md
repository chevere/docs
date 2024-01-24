# Router

![Router](../src/packages/router/router-logo.svg)

Namespace `Chevere\Router`

The Router package provides a strict, strong typed router for HTTP requests.

::: tip 💡 Router introduction
 Read [Router for PHP](https://rodolfoberrios.com/2022/12/07/chevere-router/) at Rodolfo's blog for a compressive introduction to this package.
:::

## Installing

Router is available through [Packagist](https://packagist.org/packages/chevere/router) and the repository source is at [chevere/router](https://github.com/chevere/router).

```sh
composer require chevere/router
```

## Features

* Define path, name, view, middleware and HTTP method to controller binding using named arguments.
* HTTP method binding works with [Controller](./http.md#controller) objects.
* Path variables inherits regex from parameter attributes at controller layer.
  * Can be implicit (`{id}`) or explicit (`{id:[0-9]+}`).
  * Detects conflicts for all endpoints.
* Supports route groups.
* Supports [PSR middleware](https://www.php-fig.org/psr/psr-15/).

## Creating a Router

To create a Router, define a group name and its routes.

In the example below, the `web` group defines two routes and its corresponding endpoints for [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) to HTTP controller binding. Another group `api`, defines routing for API endpoints.

Consider Router groups as namespaces, which resolves in the same website context. HTTP method `HEAD` is automatic added when defining `GET`.

```php
use function Chevere\Router\bind;
use function Chevere\Router\route;
use function Chevere\Router\router;
use function Chevere\Router\routes;

router(
    web: routes(
        route(
            path: '/',
            name: 'rootWeb',
            GET: WebGetController::class,
        ),
        route(
            path: '/comment/{id}',
            name: 'comment',
            GET: CommentGetController::class,
            POST: CommentPostController::class,
        ),
    ),
    api: routes(
        route(
            path: '/api',
            name: 'rootApi',
            GET: ApiGetController::class,
        ),
        route(
            path: '/api/order/{id}',
            name: 'orders',
            DELETE: bind(
                OrderDeleteController::class,
                OrderDeleteMiddleware::class
            )
        ),
    )
);
```

## Bind

Use function `bind` to create an object implementing `BindInterface`. This is used to bind Controller, Middleware and view for an endpoint.

```php
use function Chevere\Router\bind;

bind(
    controller: MyController::class,
    middleware: SomeMiddleware::class,
    view: 'MyNamedView'
);
```

## Route

Route is the building block for Router, on its most elemental representation it defines a path that will be routed to a HTTP endpoint. In the example below, the [run method](https://chevere.org/packages/action#main-logic) of `WebGetController` will be executed when resolving requests to `GET /`, after passing `CorsMiddleware`.

```php
use function Chevere\Router\route;

route(
    path: '/',
    name: 'rootWeb',
    middleware: CorsMiddleware::class,
    GET: WebGetController::class,
);
```

### Variables

Route path can define **variables**, enabling to pass dynamic route-path-based arguments to Controllers. In the example below, variable `{id}` determines a dynamic `run` argument for `ProductGetController`.

```php
use function Chevere\Router\route;

route(
    path: '/product/{id}',
    GET: ProductGetController::class,
),
```

At `ProductGetController` define the regex for this `{id}` variable by using `StringAttr` attribute.

```php
use Chevere\Http\Controller;
use Chevere\Parameter\Attributes\StringAttr;

class ProductGetController extends Controller
{
    public function main(
        #[StringAttr('/^[1-9]\d*/')]
        string $id
    ): array {
        // ...
    }
}
```

For the request `/product/123` the system will first check match of `123` against `/^[1-9]\d*/` and then it will pass `123` to the `run` method. Requests failing to match the defined regex will throw a HTTP 404 error.

### Middleware

Route can define **HTTP Middleware**, which is a collection of objects implementing `Psr\Http\Server\MiddlewareInterface`. In the example below, `CheckAuthToken` determines the validity of the request and `RedirectIfLoggedIn` will redirect to another location (usually the user profile). Middleware can be also applied for each HTTP Controller binding using the [bind](#bind) function.

```php
use function Chevere\Router\route;
use function Chevere\Router\middlewares;

route(
    path: '/',
    middleware: middlewares(
        CheckAuthToken::class,
        RedirectIfLoggedIn::class,
    ),
    GET: bind(
        controller: WebGetController::class,
        middleware: RootLogger::class
    ),
);
```

### View

Route endpoints can define a view value by passing the `view` argument to the [bind](#bind) function.

```php
route(
    path: '/',
    GET: bind(
        controller: WebGetController::class,
        view: 'web-home'
    )
);
```
