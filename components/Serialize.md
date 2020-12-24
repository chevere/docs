# Serialize

The Serialize component is in charge of handling variable serializing.

## Serialize a variable

[SerializeInterface](../reference/Chevere/Interfaces/Serialize/SerializeInterface.md) describes the interface for the component in charge of handling [serialize](https://www.php.net/serialize).

```php
use Chevere\Components\Serialize\Serialize;

$serialize = new Serialize(var: $foo);
```

The `toString` method is used to access the serialized variable.

```php
$serialize->toString();
```

## Unserialize a variable

[UnserializeInterface](../reference/Chevere/Interfaces/Serialize/UnserializeInterface.md) describes the interface for the component in charge of handling [unserialize](https://www.php.net/unserialize).

```php
use Chevere\Components\Serialize\Unserialize;

$unserialize = new Unserialize(serialized: $bar);
```

### Access variable

The `var` method is used to access the unserialized variable.

```php
$unserialize->var(); // mixed
```

### Variable type

The `type` method is used to access the unserialized variable type.

```php
$unserialize->type(); // TypeInterface
```
