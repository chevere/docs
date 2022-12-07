# HttpController

An HttpController is a special [controller](controller.md) meant to be used in the context of HTTP requests. The HttpController extends Controller by adding request [parameters](parameter.md) (GET, POST, FILES) and Middleware.

All HttpController implement the `Chevere\Controller\HttpControllerInterface`.

## Accept GET

Define accepted parameters for GET using the `acceptGet` method.

```php
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\stringParameter;

public function acceptGet(): ParametersInterface
{
    return parameters(
        foo: stringParameter('/^[a-z]+$/'),
    );
}
```

## Accept POST

Define accepted parameters for POST using the `acceptPost` method.

```php
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\stringParameter;

public function acceptPost(): ParametersInterface
{
    return parameters(
        bar: stringParameter('/^[1-9]+$/'),
    );
}
```

## Accept FILES

Define accepted parameters for FILES using the `acceptFiles` method.

```php
use function Chevere\Parameter\parameters;
use function Chevere\Parameter\stringParameter;

public function acceptFiles(): ParametersInterface
{
    return parameters(
        myFile: arrayParameter(),
    );
}
```

## With GET

Set GET parameters using the `withGet` method. It will only accept arguments complying with [Accept GET](#accept-get).

```php
$controller = $controller->withGet($_GET);
```

## With POST

Set POST parameters using the `withPost` method. It will only accept arguments complying with [Accept POST](#accept-post).

```php
$controller = $controller->withPost($_POST);
```

## With FILES

Set FILES parameters using the `withFiles` method. It will only accept arguments complying with [Accept FILES](#accept-files).

```php
$controller = $controller->withFiles($_FILES);
```

## GET

Use method `get` to read the GET parameters.

```php
$get = $controller->get();
// within $this context:
$this->get();
```

## POST

Use method `post` to read the POST parameters.

```php
$post = $controller->post();
// within $this context:
$this->post();
```

## FILES

Use method `files` to read the FILES parameters.

```php
$files = $controller->files();
// within $this context:
$this->files();
```
