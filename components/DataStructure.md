# DataStructure

The DataStructure component is in charge of providing typed immutable-like data structures, is built on top of [php-ds](https://github.com/php-ds/ext-ds).

::: tip
Data structures are provisioned as stand-alone classes and/or traits, which adds data structure functionality directly.
:::

## Map

The Map component is in charge of extending [DS\Map](https://www.php.net/manual/en/class.ds-map.php) functionality to provide **the** array replacement for Chevere.

[MapInterface](../reference/Chevere/Interfaces/DataStructure/MapInterface.md) describes the interface for the component in charge of defining a Map utility.

### Creating Map

Create a Map by passing named arguments of any type.

```php
use Chevere\Components\DataStructure\Map;

$map = new Map(foo: $foo, bar: $bar);
```

### Putting value

The `withPut` method is used to put a value to the Map at the given key.

```php
$map = $map->withPut(key: 'id', $id);
```

### Asserting keys

The `assertHasKey` method is used to assert if the Map contains the given key(s).

```php
$map->assertHasKey(key: 'foo');
$map->assertHasKey(key: 'notFound'); // throws Throwable
```

### Get value

The `get` method is used to retrieve the Map value for the given key.

```php
$getFoo = $map->get(key: 'foo'); // $foo
$getBar = $map->get(key: 'bar'); // $bar
$getId = $map->get(key: 'id'); // $id
```

### Typed Map

The [MappedInterface](../reference/Chevere/Interfaces/DataStructure/MappedInterface.md) describes the interface for a component supporting mapping, like [Map](#map) which doesn't specify any typing.

::: tip
⏩ Use [MapTrait](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/DataStructures/Traits/MapTrait.php) quickly implement the `MappedInterface`.
:::

With this, expose your own setters and getters accordingly to your typing and internally simply rely in the functionality provided by the MapTrait.
