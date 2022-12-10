# Http

Namespace `Chevere\Http`

The Http component is in charge of providing typed HTTP methods according to [RFC 7231](https://tools.ietf.org/html/rfc7231).

The `Interfaces\MethodInterface` describes the interface for the component in charge of defining a HTTP method.

## ConnectMethod

`CONNECT`

Establish a tunnel to the server identified by the target resource.

```php
use Chevere\Http\Methods\ConnectMethod;

$connect = new ConnectMethod();
```

## DeleteMethod

`DELETE`

Remove all current representations of the target resource.

```php
use Chevere\Http\Methods\DeleteMethod;

$delete = new DeleteMethod();
```

## GetMethod

`GET`

Transfer a current representation of the target resource.

```php
use Chevere\Http\Methods\GetMethod;

$get = new GetMethod();
```

## HeadMethod

`HEAD`

Same as GET, but only transfer the status line and header section.

```php
use Chevere\Http\Methods\HeadMethod;

$head = new HeadMethod();
```

## OptionsMethod

`OPTIONS`

Describe the communication options for the target resource.

```php
use Chevere\Http\Methods\OptionsMethod;

$options = new OptionsMethod();
```

## PatchMethod

`PATCH`

Apply partial modifications described in the request entity to the target resource.

```php
use Chevere\Http\Methods\PatchMethod;

$path = new PatchMethod();
```

## PostMethod

`POST`

Perform resource-specific processing on the request payload.

```php
use Chevere\Http\Methods\PostMethod;

$post = new PostMethod();
```

## PutMethod

`PUT`

Replace all current representations of the target resource with the request payload.

```php
use Chevere\Http\Methods\PutMethod;

$put = new PutMethod();
```

## TraceMethod

`TRACE`

Perform a message loop-back test along the path to the target resource.

```php
use Chevere\Http\Methods\TraceMethod;

$trace = new TraceMethod();
```
