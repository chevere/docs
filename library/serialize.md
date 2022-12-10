# Serialize

Namespace `Chevere\Serialize`

The Serialize component is in charge of handling variable serialize and deserialize.

## Serialize a variable

The `Serialize` component is in charge of handling serialize.

```php
use Chevere\Serialize\Serialize;

$serialize = new Serialize($foo);
```

The `__toString` method is used to access the serialized variable.

```php
$string = $serialize->__toString();
```

## Deserialize a variable

The `Deserialize` component is in charge of handling deserialize.

```php
use Chevere\Serialize\Deserialize;

$deserialize = new Deserialize($bar);
```

### Access variable

The `variable` method is used to access the deserialized variable.

```php
$mixed = $deserialize->variable();
```

### Variable type

The `type` method is used to access the deserialized variable [type](type.md).

```php
$type = $deserialize->type();
```
