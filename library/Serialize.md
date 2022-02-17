# Serialize

`🚧 OUTDATED DOCS`

The [Serialize](../reference/Chevere/Components/Serialize/Serialize.md) component is in charge of handling variable [serialize](https://www.php.net/serialize).

## Serialize a variable

```php
use Chevere\Serialize\Serialize;

$serialize = new Serialize(var: $foo);
```

The `toString` method is used to access the serialized variable.

```php
$serialize->toString();
```

## Deserialize a variable

The [Deserialize](../reference/Chevere/Components/Serialize/Deserialize.md) component is in charge of handling [unserialize](https://www.php.net/unserialize).

```php
use Chevere\Serialize\Deserialize;

$deserialize = new Deserialize(serialized: $bar);
```

### Access variable

The `var` method is used to access the deserialized variable.

```php
$deserialize->var();
```

### Variable type

The `type` method is used to access the deserialized variable [type](Type.md).

```php
$deserialize->type();
```
