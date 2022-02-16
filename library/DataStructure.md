# DataStructure

The `Chevere\Components\DataStructure` namespace provides components for providing typed immutable-like data structures, is built on top of [php-ds](https://github.com/php-ds/ext-ds).

## Map

The [Map](../reference/Chevere/Components/DataStructure/Map.md) component is in charge of extending [DS\Map](https://www.php.net/ds-map) functionality to provide **the** array replacement for Chevere.

### Creating Map

Create a Map by passing named arguments of any type.

```php
use Chevere\DataStructure\Map;

$map = new Map(foo: $foo, bar: $bar);
```

### Putting value

The `withPut` method is used to put a value to the Map at the given key.

```php
$map = $map->withPut(foo: $foo, bar: $bar);
```

### Checking keys

The `has` method is used to check if the Map contains the given key(s).

```php
$map->has(key: 'foo'); // true
$map->has(key: 'notFound'); // throws Throwable
```

### Asserting keys

The `assertHas` method is used to assert if the Map contains the given key(s).

```php
$map->assertHas(key: 'foo'); // true
$map->assertHas(key: 'notFound'); // throws Throwable
```

### Get value

The `get` method is used to retrieve the Map value for the given key.

```php
$getFoo = $map->get(key: 'foo'); // $foo
$getBar = $map->get(key: 'bar'); // $bar
```

### Typed Map

The [MappedInterface](../reference/Chevere/Interfaces/DataStructure/MappedInterface.md) describes the interface for a component supporting mapping, like [Map](#map) which doesn't specify any typing.

::: tip
Use [MapTrait](../reference/Chevere/Components/DataStructure/Traits/MapTrait.md) to implement the `MappedInterface`.
:::
