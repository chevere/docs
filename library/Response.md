# Response

The `Chevere/Response/Response` component is in charge of handling responses.

## Creating Response

Create a response by passing named data.

```php
use Chevere\Response\Response;

$response = new Response(key: 'value');
```

## With data

The `withData` method is used to set the Response data.

```php
$response = $response
    ->withData(foo: $foo, bar: $bar);
```

## With code

The `withCode` method is used to set Response code.

```php
$response = $response->withCode(code: 0);
```

### Response codes

| Code           | Description |
| -------------- | ----------- |
| `0` (default)  | Success     |
| Non-zero value | Failure     |

## UUID

The `uuid` method is used to access to the Response [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) (V4).

```php
$uuid = $response->uuid();
```

## Token

The `token` method is used to access to the Response token.

```php
$token = $response->token();
```

## Data

The `data` method is used to access to the Response data.

```php
$data = $response->data();
```

## Code

The `code` method is used to access to the Response code.

```php
$code = $response->code();
```
