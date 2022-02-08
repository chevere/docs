# Http

The Http component is in charge of providing typed HTTP methods according to [RFC 7231](https://tools.ietf.org/html/rfc7231).

[MethodInterface](../reference/Chevere/Interfaces/Http/MethodInterface.md) describes the interface for the component in charge of defining an a HTTP method.

## ConnectMethod

`CONNECT` defined by [ConnectMethod](../reference/Chevere/Components/Http/Methods/ConnectMethod.md).

Establish a tunnel to the server identified by the target resource.

```php
use Chevere\Http\Methods\ConnectMethod;

$connect = new ConnectMethod();
```

## DeleteMethod

`DELETE` defined by [DeleteMethod](../reference/Chevere/Components/Http/Methods/DeleteMethod.md).

Remove all current representations of the target resource.

```php
use Chevere\Http\Methods\DeleteMethod;

$delete = new DeleteMethod();
```

## GetMethod

`GET` defined by [GetMethod](../reference/Chevere/Components/Http/Methods/GetMethod.md).

Transfer a current representation of the target resource.

```php
use Chevere\Http\Methods\GetMethod;

$get = new GetMethod();
```

## HeadMethod

`HEAD` defined by [HeadMethod](../reference/Chevere/Components/Http/Methods/HeadMethod.md).

Same as GET, but only transfer the status line and header section.

```php
use Chevere\Http\Methods\HeadMethod;

$head = new HeadMethod();
```

## OptionsMethod

`OPTIONS` defined by [OptionsMethod](../reference/Chevere/Components/Http/Methods/OptionsMethod.md).

Describe the communication options for the target resource.

```php
use Chevere\Http\Methods\OptionsMethod;

$options = new OptionsMethod();
```

## PatchMethod

`PATCH` defined by [PatchMethod](../reference/Chevere/Components/Http/Methods/PatchMethod.md).

Apply partial modifications described in the request entity to the target resource.

```php
use Chevere\Http\Methods\PatchMethod;

$path = new PatchMethod();
```

## PostMethod

`POST` defined by [PostMethod](../reference/Chevere/Components/Http/Methods/PostMethod.md).

Perform resource-specific processing on the request payload.

```php
use Chevere\Http\Methods\PostMethod;

$post = new PostMethod();
```

## PutMethod

`PUT` defined by [PutMethod](../reference/Chevere/Components/Http/Methods/PutMethod.md).

Replace all current representations of the target resource with the request payload.

```php
use Chevere\Http\Methods\PutMethod;

$put = new PutMethod();
```

## TraceMethod

`TRACE` defined by [TraceMethod](../reference/Chevere/Components/Http/Methods/TraceMethod.md).

Perform a message loop-back test along the path to the target resource.

```php
use Chevere\Http\Methods\TraceMethod;

$trace = new TraceMethod();
```
