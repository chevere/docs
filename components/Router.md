# Router

The Router component is in charge of handling routeables. [RouterInterface](../reference/Chevere/Interfaces/Router/RouterInterface.md) describes the component in charge of defining a router, which is a collection of objects implementing [RouteableInterface](../reference/Chevere/Interfaces/Router/RoutableInterface.md).

The router component is built on top of [FastRoute](https://github.com/nikic/FastRoute), but with added context for the chevere realm.

::: tip Learn by Examples
Check the Router [examples](https://github.com/chevere/examples/tree/master/03.Http#00router-makephp) to learn directly playing with code.
:::

## Routing

The Routing component is in charge of providing the ability to configure a file system based [Router](Router.md) by defining files and folders as route components.

### Routing Filesystem Structure

Routes are defined in a folder-based structure. Tree below shows how a routing directory looks like.

```sh
/var/routing
├── articles <- route /articles
│   ├── {id} <- route /articles/{id}
│   │   ├── GET.php
│   │   └── RouteName.php
│   ├── GET.php
│   └── RouteName.php
└── signup <- route /signup
    ├── POST.php
    └── RouteName.php
```

### Routing Paths

File-system folder paths will reflect HTTP route paths. Table below shows how system paths are interpreted as HTTP route paths for the [tree](#routing-filesystem-structure) above.

| Path                        | Name          | HTTP route    | HTTP method |
| --------------------------- | ------------- | ------------- | ----------- |
| /var/routing/articles/      | articles      | /articles     | GET         |
| /var/routing/articles/{id}/ | article-by-id | /articles/123 | GET         |
| /var/routing/signup/        | signup        | /signup       | POST        |

Each folder must define a single [`RouteName.php`](#routenamephp) file and many [`<methodName>.php`](#methodnamephp) for each applicable HTTP method.

Variables in the form of `{var}` are used to define dynamic route parameters known as [wildcards](#wildcards).

#### `RouteName.php`

A `RouteName.php` file must return an object implementing [RouteNameInterface](../reference/Chevere/Interfaces/Route/RouteNameInterface.md) and it must be unique.

The `/var/routing/articles/{id}/RouteName.php` file below name route `/articles/{id}` as `article-by-id`.

```php
# /var/routing/articles/{id}/RouteName.php
use Chevere\Components\Routes\RouteName;

return new RouteName('article-by-id');
```

#### `<methodName>.php`

HTTP endpoints are defined by using `<methodName>.php` naming convention, where `<methodName>` is the HTTP method name according to [RFC 7231](https://tools.ietf.org/html/rfc7231) and it must return a [Controller](Action.md#controller).

Accepted HTTP methods are `CONNECT, DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT, TRACE`.

The `/var/routing/signup/POST.php` file below binds HTTP request `POST /signup` to `SignupController`.

```php
# /var/routing/signup/POST.php
use App\Controllers\SignupController;

return new SignupController;
```

::: tip
It is recommended to create a _different_ [Controller](Action.md#controller) for each HTTP endpoint. A controller resolving multiple HTTP endpoints is a bad practice.
:::

Note: Method `HEAD` is automatically added when adding `GET`.

#### Wildcards

Wildcards are expressed as `{var}`  for folder-names as `{id}` in `/articles/{id}`.

Wildcards are used to define route parameters which will be automatically configured to reflect the [Controller](Action.md#controller) parameters defined for the given route.

Note that controllers in the alleged route must define the same base wildcard parameters.

### Generating Router

Routing component allows to parse a directory using the build-in tooling to generate a Router.

#### RoutingDescriptorsMaker

The RoutingDescriptorsMaker component create the routing descriptors, which is the collection of routes interpreted from the file system.

[RoutingDescriptorsInterface](../reference/Chevere/Interfaces/Routing/RoutingDescriptorsInterface.md) describes the interface for the component in charge of defining a RoutingDescriptorsMaker.

```php
use Chevere\Components\Routing\RoutingDescriptorsMaker;
use function Chevere\Components\Filesystem\dirForPath;

$routingDescriptorsMaker = new RoutingDescriptorsMaker(
    dirForPath('/var/routing/')
);
$routingDescriptors = $routingDescriptorsMaker->descriptors();
```

#### routerForRoutingDescriptors

The function `routerForRoutingDescriptors` allows to generate a router from RoutingDescriptors (see [RoutingDescriptorsMaker](#routingdescriptorsmaker)).

In the code below, `$router` is generated from `$routingDescriptors` and bound to `my-group`.

```php
use function Chevere\Components\Routing\routerForRoutingDescriptors;

$router = routerForRoutingDescriptors($routingDescriptors, 'my-group');
```
