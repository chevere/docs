# Response

The [Response](../reference/Chevere/Components/Response/Response.md) component is in charge of handling responses.

## Creating Response

```php
use Chevere\Components\Response\Response;

$response = new Response(foo: 'foo');
```

## With data

The `withData` method is used to set the Response data.

```php
/**
 * @var mixed $foo
 * @var mixed $bar
 */
$response = $response
    ->withData(foo: $foo, bar: $bar);
```

## With status

The `withStatus` method is used to set Response status code.

```php
$response = $response->withStatus(code: 0);
```

### Status codes

| Code          | Description |
| ------------- | ----------- |
| `0` (default) | Success     |
| Nonzero value | Failure     |

## UUID

The `uuid` method is used to access to the Response [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).

```php
$response->uuid();
```

## Token

The `token` method is used to access to the Response token.

```php
$response->token();
```

## Data

The `data` method is used to access to the Response data.

```php
$response->data();
```

## Status

The `status` method is used to access to the Response status.

```php
$response->status();
```
