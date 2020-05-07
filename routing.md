# Routing

- [Routing](#routing)
  - [Introduction](#introduction)
  - [Routing spec](#routing-spec)
    - [Tree](#tree)
    - [Paths](#paths)
    - [Route names](#route-names)
    - [HTTP Endpoints](#http-endpoints)
      - [Wildcard parameters](#wildcard-parameters)
  - [Generating Routing Spec](#generating-routing-spec)
    - [Console](#console)
    - [Code](#code)

## Introduction

The Routing class is in charge of automatically generating HTTP routing, wich refers to the system that describes how HTTP requests resolve to application instructions. A Routing is a class implementing [RoutingInterface](Chevere\Components\Routing\Interfaces\RoutingInterface).

Generated HTTP routing will be cached, and used to resolve incoming HTTP requests and to generate the [Spec](OmgWhatSTHESPEC?).

## Routing spec

The routing spec refers to how routes must be defined in order to be able to use Routing. 

### Tree

Tree below shows how a routing spec directory looks like.

```bash
/var/routes
├── articles
│   ├── {id}
│   │   ├── GET.php
│   │   └── RouteName.php
│   ├── GET.php
│   └── RouteName.php
└── signup
    ├── POST.php
    └── RouteName.php
```

### Paths

File system folders will reflect HTTP routes, the table below shows how system paths are interpreted as HTTP route paths for the tree above.

| Path                       | HTTP route    | HTTP method |
| -------------------------- | ------------- | ----------- |
| /var/routes/articles/      | /articles     | GET         |
| /var/routes/articles/{id}/ | /articles/123 | GET         |
| /var/routes/signup/        | /signup       | POST        |

Each folder must define a `RouteName.php` file and one `<methodName>.php` for each HTTP method.

> 👍 The system support wildcards using curly braces like `{id}`.

### Route names

A `RouteName.php` defines the route name, it must return an object implementing [RouteNameInterface](Chevere\Components\Routes\Interfaces\RouteNameInterface).

```php
<?php

use Chevere\Components\Routes\RouteName;

return new RouteName('article-by-id');
```

The code above names route `/articles/{id}` as `article-by-id`.

> ⚠ Route names must be unique for each `RouteName.php`

### HTTP Endpoints

A HTTP endpoint is the binding of a HTTP method to a Controller.

A HTTP endpoint is defined by using `<methodName>.php` naming convention, where `<methodName>` is the HTTP method name according to [RFC 7231](https://tools.ietf.org/html/rfc7231) and it must return an object implementing [ControllerInterface](Chevere\Components\Controller\Interfaces\ControllerInterface).

Accepted HTTP methods are `CONNECT, DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT, TRACE`.

```php
<?php

use App\Controllers\TheController;

return TheController;
```

The code above binds HTTP request `POST /signup` to `TheController`.

#### Wildcard parameters

All route wildcards will be configured to match the [controller paramaters](controllers.md) defined for the given route.

If a route implements the wildcard `{wildcard}`, the controllers must define the parameter `wildcard`.

> 🙃 When implementing two or more HTTP endpoints all controllers must define the same wildcard parameters.


## Generating Routing Spec

### Console

The [Console](console.md) includes a built-in command to generate routes. The command makes trivial to bla bla.

```bash
vendor/bin/chevere route-create /articles/{id}
vendor/bin/chevere route-push -r /articles/{id} -m GET -c TheController
```

### Code