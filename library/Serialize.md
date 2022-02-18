# Serialize

The `Chevere/Components/Serialize` namespace is in charge of handling variable serialize and deserialize.

## Serialize a variable

The `Chevere/Serialize/Serialize` component is in charge of handling deserialize.

```php
use Chevere\Serialize\Serialize;

$serialize = new Serialize($foo);
```

The `__toString` method is used to access the serialized variable.

```php
$string = $serialize->__toString();
```

## Deserialize a variable

The `Chevere/Serialize/Deserialize` component is in charge of handling deserialize.

```php
use Chevere\Serialize\Deserialize;

$deserialize = new Deserialize(serialized: $bar);
```

### Access variable

The `var` method is used to access the deserialized variable.

```php
$var = $deserialize->var();
```

### Variable type

The `type` method is used to access the deserialized variable [type](Type.md).

```php
$type = $deserialize->type();
```
