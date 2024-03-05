# DataStructure

![DataStructure](/src/packages/data-structure-logo.svg)

## Summary

DataStructure provides Map and Vector data structures.

## Installing

DataStructure is available through [Packagist](https://packagist.org/packages/chevere/data-structure) and the repository source is at [chevere/data-structure](https://github.com/chevere/data-structure).

```sh
composer require chevere/data-structure
```

## Map

A Map is a sequential collection of key-value pairs. Keys can be of type `integer` and `string`.

Create a Map by passing named arguments of any type.

```php
use Chevere\DataStructure\Map;

$map = new Map(foo: $foo, bar: $bar);
```

### Put Map values

The `withPut` method is used to put value(s) to the Map.

```php
$map = $map
    ->withPut(
        foo: $foo,
        bar: $bar
    );
```

### Counting Map keys

The `count` method returns the number of keys mapped.

```php
$map->count();
// 2
```

### Map keys

The `keys` method is used to retrieve the map keys as an array.

```php
$map->keys();
// ['foo', 'bar']
```

### Has Map keys

The `has` method is used to check if the Map contains the given key(s).

```php
$map->has('foo'); // true
$map->has('notFound'); // false
```

### Assert has Map keys

The `assertHas` method is used to assert if the Map contains the given key(s). It throws an exception when failing to assert.

```php
$map->assertHas('foo');
$map->assertHas('notFound');
```

### Get Map value

The `get` method is used to retrieve the Map value for the given key.

```php
$foo = $map->get('foo');
$bar = $map->get('bar');
```

## Vector

A Vector is a sequence of values of any type. Keys are of type integer.

Create a Vector by passing values.

```php
use Chevere\DataStructure\Vector;

$vector = new Vector($value1, $value2,);
```

### Counting Vector keys

The `count` method returns the number of keys in the vector.

```php
$vector->count();
// 2
```

### Vector keys

The `keys` method is used to retrieve the map keys as an array.

```php
$map->keys();
// [0, 1]
```

### Push Vector values

The `withPush` method is used to add one or more elements to the end of the sequence.

```php
$with = $vector->withPush($value,);
```

### Set Vector values

The `withSet` method is used to set the value at the given position.

```php
$with = $vector->withSet(0, $value);
```

### Unshift Vector values

The `withUnshift` method is used to prepend one or more elements at the beginning of the sequence.

```php
$with = $vector->withUnshift($value,);
```

### Insert Vector values

The `withInsert` method is used to insert values at a given position.

```php
$with = $vector->withInsert($pos, ...$values);
```

### Remove Vector values

The `withRemove` method is used to remove one or more values at a given position.

```php
$with = $vector->withRemove($pos,);
```

### Has Vector values

The `has` method is used to check if the Vector contains the given value(s).

```php
$vector->has($value); // true
$vector->has($notFound); // false
```

### Assert Vector has values

The `assertHas` method is used to assert if the Vector contains the given value(s). It throws an exception when failing to assert.

```php
$vector->assertHas($value);
```

### Get Vector value

The `get` method is used to retrieve the Vector value at the given position.

```php
$value = $vector->get($pos);
```

## Find values

The `find` method is used to find the position for the given value.

```php
$pos = $vector->find($value);
```

## Contains values

The `contains` method is used to check if the Vector contains the given value(s).

```php
$vector->contains($value); // bool
```
