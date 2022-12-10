# Response

Namespace `Chevere\Response`

The Response component is in charge of providing a common response interface.

## Creating Response

Create a response by passing named data.

```php
use Chevere\Response\Response;

$response = new Response(
    key: 'value',
    user: 'rodo',
);
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

The `uuid` method is used to access to the Response [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) (V4) `string`.

```php
$string = $response->uuid();
```

## Token

The `token` method is used to access to the Response token `string`.

```php
$tstring = $response->token();
```

## Data

The `data` method is used to access to the Response data `array`.

```php
$array = $response->data();
```

## Code

The `code` method is used to access to the Response code `int`.

```php
$integer = $response->code();
```
