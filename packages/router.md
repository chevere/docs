# Router

![Router](../src/packages/router/router-logo.svg)

The `Chevere/Router` package provides a strict, strong typed router for [HttpController](../library/controller.md#httpcontroller).

## Installing

Router is available through [Packagist](https://packagist.org/packages/chevere/router) and the repository source is at [GitHub](https://github.com/chevere/router).

```sh
composer require chevere/router
```

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
            path: '/page/{id}',
            GET: new PageGetController(),
            POST: new PagePostController(),
        ),
    ),
    api: routes(
        route(
            path: '/api',
            GET: new ApiGetController(),
        ),
        route(
            path: '/api/page',
            DELETE: new ApiDeletePageController(),
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

Route path can define **wildcards**, enabling to pass dynamic route-path-based arguments to Controllers. In the example below, wildcard `{id}` determines a dynamic `run` argument for `PageGetController`.

```php
use function Chevere\Router\route;

route(
    path: '/page/{id}',
    GET: new PageGetController(),
),
```

At `PageGetController` we define the regex for this `{id}` wildcard by using `StringAttribute` annotation.

```php
use Chevere\Controller\HttpController;
use Chevere\Parameter\Attributes\StringAttribute;

class PageGetController extends HttpController
{
    public function run(
        #[StringAttribute('/^[1-9]\d*/')]
        string $id
    ): array {
        // ...
    }
}
```

For the request `/page/123` the system will first check match of `123` against `/^[1-9]\d*/` and then it will pass `123` to the `run` method. Requests failing to match the defined regex will throw a HTTP 404 error.

### Additional attributes

Route may define **Name** and **view** attributes. In the example below the Route at `/` gets a name and view binding.

```php
use Chevere\Controller\HttpMiddleware;
use function Chevere\Router\route;

route(
    path: '/',
    name: 'My Homepage',
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
