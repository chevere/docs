# DataStructure

Namespace `Chevere\DataStructure`

The DataStructure component provides typed immutable-like data structures, built on top of [php-ds](https://github.com/php-ds/ext-ds).

## Map

The Map component is in charge of extending [DS\Map](https://www.php.net/ds-map) functionality.

### Creating Map

Create a Map by passing named arguments of any type.

```php
use Chevere\DataStructure\Map;

$map = new Map(
    foo: $foo,
    bar: $bar
);
```

### Putting values

The `withPut` method is used to put value(s) to the Map.

```php
$map = $map->withPut(
    foo: $foo,
    bar: $bar
);
```

### Counting keys

The `count` method returns the number of keys mapped.

```php
$integer = $map->count();
```

### Accessing keys

The `keys` method is used to retrieve the map keys as an array.

```php
$array = $map->keys();
```

### Checking keys

The `has` method is used to check if the Map contains the given key(s).

```php
$true = $map->has('foo');
$false = $map->has('notFound');
```

### Asserting keys

The `assertHas` method is used to assert if the Map contains the given key(s). It throws a `Throwable` when failing to assert.

```php
$map->assertHas('foo');
$map->assertHas('notFound');
```

### Get value

The `get` method is used to retrieve the Map value for the given key.

```php
$foo = $map->get('foo');
$bar = $map->get('bar');
```
