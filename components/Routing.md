# Routing

The Routing class is in charge of automatically generating HTTP routing. A Routing is a class implementing [RoutingInterface](Chevere\Interfaces\Routing\RoutingInterface).

Generated HTTP routing will be cached, and used to resolve HTTP requests to application instructions and to generate the [Spec](OmgWhatSTHESPEC?).

## How it works

Routing works with routes defined in the file system. It makes routing by taking advantage of the file system and naming conventions. 

### Tree

Tree below shows how a routing spec directory looks like. Routes are defined in a folder-based structure.


```shell
/var/routes
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

File system folders will reflect HTTP routes, the table below shows how system paths are interpreted as HTTP route paths for the tree above.

| Path                       | Name          | HTTP route    | HTTP method |
| -------------------------- | ------------- | ------------- | ----------- |
| /var/routes/articles/      | articles      | /articles     | GET         |
| /var/routes/articles/{id}/ | article-by-id | /articles/123 | GET         |
| /var/routes/signup/        | signup        | /signup       | POST        |

Each folder must define a `RouteName.php` file and one `<methodName>.php` for each applicable HTTP method.

### Route names

A `RouteName.php` must return an object implementing [RouteNameInterface](Chevere\Components\Routes\Interfaces\RouteNameInterface).

> ⚠ Route names must be unique for each `RouteName.php`
 
```php
<?php

use Chevere\Components\Routes\RouteName;

return new RouteName('article-by-id');
```

The code above names route `/articles/{id}` as `article-by-id`.

### HTTP Endpoints

> 🧞 A HTTP endpoint is the binding of a HTTP method to a Controller.

HTTP endpoints are defined by using `<methodName>.php` naming convention, where `<methodName>` is the HTTP method name according to [RFC 7231](https://tools.ietf.org/html/rfc7231) and it must return an object implementing [ControllerInterface](Chevere\Interfaces\Controller\ControllerInterface).

Accepted HTTP methods are `CONNECT, DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT, TRACE`.

> 🧙 HTTP HEAD method will be automatically wired when declaring HTTP GET method and missing the `HEAD.php` HTTP endpoint.

```php
<?php

use App\Controllers\SignupController;

return new SignupController;
```

The `POST.php` file above binds HTTP request `POST /signup` to `SignupController`.

> 👍🏾 It is recommended to create a _different_ controller for each HTTP endpoint. A controller resolving multiple HTTP endpoints is a bad practice.

#### Wildcards from Controller parameters

Wildcards in a route will be automatically configured to reflect the [Controller](controller.md) parameters defined for the given route endpoints. If a route defines the wildcard `{id}`, Controllers in the route must at least declare the parameter `id`.

> ⚠ Controllers in the alleged route must define the same base wildcard parameters.

## Generating Routing

### Console

The [Console](console.md#routing) includes a section for built-in routing commands to ease the routing process.

### Programmatically

Routing can be also created programmatically as Chevere includes a Routing iterator. In the example below, a Router object is created from route endpoints at `/var/routes/`.

```php

use Chevere\Components\Router\RouterMaker;
use Chevere\Components\Routing\FsRoutesMaker;
use Chevere\Components\Routing\Routing;

$dir = new DirFromString('/var/routes/');
$routing = new Routing(
    new FsRoutesMaker($dir),
    new RouterMaker
);
$router = $routing->router();
```