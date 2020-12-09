# Routing

The Routing component is in charge of providing the ability to configure a file system based [Router](Router.md).

## Routing scheme

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

### Paths

File system folders will reflect HTTP routes, the table below shows how system paths are interpreted as HTTP route paths for the [tree](#routing-scheme) above.

| Path                        | Name          | HTTP route    | HTTP method |
| --------------------------- | ------------- | ------------- | ----------- |
| /var/routing/articles/      | articles      | /articles     | GET         |
| /var/routing/articles/{id}/ | article-by-id | /articles/123 | GET         |
| /var/routing/signup/        | signup        | /signup       | POST        |

Each folder must define a `RouteName.php` file and one `<methodName>.php` for each applicable HTTP method.

Variables in the form of `{var}` are used to define route parameters known as [wildcards](#wildcards).

### Route names

A `RouteName.php` file must return an object implementing [RouteNameInterface](../reference/Chevere/Interfaces/Route/RouteNameInterface.md) and it must be unique.

The `/var/routing/articles/{id}/RouteName.php` file below name route `/articles/{id}` as `article-by-id`.

```php
# /var/routing/articles/{id}/RouteName.php
use Chevere\Components\Routes\RouteName;

return new RouteName('article-by-id');
```

### HTTP Endpoints

HTTP endpoints are defined by using `<methodName>.php` naming convention, where `<methodName>` is the HTTP method name according to [RFC 7231](https://tools.ietf.org/html/rfc7231) and it must return an object implementing [ControllerInterface](../reference/Chevere/Interfaces/Controller/ControllerInterface.md).

Accepted HTTP methods are `CONNECT, DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT, TRACE`.

The `/var/routing/signup/POST.php` file below binds HTTP request `POST /signup` to `SignupController`.

```php
# /var/routing/signup/POST.php
use App\Controllers\SignupController;

return new SignupController;
```

> 🧙🏾 Method `HEAD` is automatically added when `GET`.
> 👍🏾 It is recommended to create a _different_ controller for each HTTP endpoint. A controller resolving multiple HTTP endpoints is a bad practice.

#### Wildcards

Wildcards in a route path like `{id}` in `/articles/{id}`, are used to define route parameters which will be automatically configured to reflect the [Controller](Action.md#controller) parameters defined for the given route.

Note that controllers in the alleged route must define the same base wildcard parameters.

## Generating Router

The purpose of the routing component is to provide a router implementing [RouterInterface](../reference/Chevere/Interfaces/Router/RouterInterface.md). On it's most simple usage, you will parse a directory using the build-in tooling to generate a router.

### RoutingDescriptorsMaker

This component allows to create the routing descriptors, which is the collection of routes interpreted from the file system.

```php
use Chevere\Components\Routing\RoutingDescriptorsMaker;
use function Chevere\Components\Filesystem\dirForString;

$routingDescriptorsMaker = new RoutingDescriptorsMaker(
    dirForString('/var/routing/')
);
$routingDescriptors = $routingDescriptorsMaker->descriptors();
```

### routerForRoutingDescriptors

The function `routerForRoutingDescriptors` allows to easily generate a router from `RoutingDescriptors`. In the code below, `$router` is generated from `$routingDescriptors` and bound to `my-group`.

```php
use function Chevere\Components\Routing\routerForRoutingDescriptors;

$router = routerForRoutingDescriptors($routingDescriptors, 'my-group');
```

### Real example

In the example below, dir `routing/` contains sub-routing groups `api` and `web`. In this example, routing is being grouped in top folders as group name for better organization.

```sh
./routing
├── api
│   └── api
│       ├── RouteName.php
│       └── users
│           ├── {id}
│           │   ├── GET.php
│           │   └── RouteName.php
│           └── RouteName.php
└── web
    ├── GET.php
    └── RouteName.php
```

In the script below, the system iterates over `api` and `web` to generate a `$routerForGroup` for each folder, which is then merged in `$router`.

Generated router is cached with a simple strategy using the [Cache](Cache.md) component.

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\Cache\CacheKey;
use Chevere\Components\Router\Router;
use Chevere\Components\Routing\RoutingDescriptorsMaker;
use Chevere\Components\Spec\SpecMaker;
use Chevere\Components\Spec\SpecPath;
use Chevere\Components\VarExportable\VarExportable;
use function Chevere\Components\Filesystem\dirForString;
use function Chevere\Components\Routing\routerForRoutingDescriptors;

$dir = dirForString(__DIR__ . '/');
$cacheDir = $dir->getChild('cache/');
$routingDir = $dir->getChild('routing/');
$router = new Router;
foreach (['api', 'web'] as $group) {
    $routingDescriptorsMaker = new RoutingDescriptorsMaker(
        $routingDir->getChild("$group/")
    );
    $routerForGroup = routerForRoutingDescriptors(
        routingDescriptorsFor(),
        $group
    );
    foreach ($routerForGroup->routables()->getGenerator() as $routable) {
        $router = $router->withAddedRoutable($routable, $group);
    }
}
(new Cache($cacheDir->getChild('router/')))
    ->withAddedItem(
        new CacheKey('public'),
        new VarExportable($router->routeCollector())
    );
echo "Cached HTTP router\n";
$publicDir = $dir->getChild('public/');
$specDir = $publicDir->getChild('spec/');
$specMaker = new SpecMaker(new SpecPath('/spec'), $specDir, $router);
echo 'Spec made at ' . $specDir->path()->absolute() . "\n";

```

In the last lines of the code above the system creates the application [Spec](Spec.md) at `public/spec/` by passing the router. Generated spec `index.json` looks like this:

```json
{
    "groups": {
        "api": {
            "name": "api",
            "spec": "\/spec\/api\/routes.json",
            "routes": {
                "api-user-get": {
                    "name": "api-user-get",
                    "spec": "\/spec\/api\/api-user-get\/route.json",
                    "path": "\/api\/users\/{id:\\d+}\/",
                    "regex": "~^(?|\/api\/users\/(\\d+)\/)$~",
                    "wildcards": {
                        "id": "^\\d+$"
                    },
                    "endpoints": {
                        "GET": {
                            "method": "GET",
                            "spec": "\/spec\/api\/api-user-get\/GET.json",
                            "description": "Transfer a current representation of the target resource",
                            "parameters": {}
                        }
                    }
                }
            }
        },
        "web": {
            "name": "web",
            "spec": "\/spec\/web\/routes.json",
            "routes": {
                "web-index": {
                    "name": "web-index",
                    "spec": "\/spec\/web\/web-index\/route.json",
                    "path": "\/",
                    "regex": "#\/#",
                    "wildcards": {},
                    "endpoints": {
                        "GET": {
                            "method": "GET",
                            "spec": "\/spec\/web\/web-index\/GET.json",
                            "description": "Transfer a current representation of the target resource",
                            "parameters": {}
                        }
                    }
                }
            }
        }
    }
}
```
