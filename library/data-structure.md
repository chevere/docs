# DataStructure

The DataStructure component provides typed immutable-like data structures, built on top of [php-ds](https://github.com/php-ds/ext-ds).

## Map

The Map component is in charge of extending [DS\Map](https://www.php.net/ds-map) functionality.

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

### Counting keys

The `count` method returns the number of keys mapped.

```php
$count = $map->count(); // integer
```

### Accessing keys

The `keys` method is used to retrieve the map keys as an array.

```php
$keys = $map->keys();
```

### Checking keys

The `has` method is used to check if the Map contains the given key(s).

```php
$map->has('foo'); // true
$map->has('notFound'); // throws Throwable
```

### Asserting keys

The `assertHas` method is used to assert if the Map contains the given key(s).

```php
$map->assertHas('foo'); // true
$map->assertHas('notFound'); // throws Throwable
```

### Get value

The `get` method is used to retrieve the Map value for the given key.

```php
$getFoo = $map->get('foo'); // $foo
$getBar = $map->get('bar'); // $bar
```
