# ClassMap

The ClassMap component is in charge of collecting full-qualified class names.

## Creating ClassMap

```php
use Chevere\ClassMap\ClassMap;

$classMap = new ClassMap();
```

## Adding class mappings

The `withPut` method is used to add mapping for a  full-qualified class name:

```php
$classMap = $classMap->withPut(
    key_a: 'SomeClassName',
    my_key: 'stdClass'
);
```

## Has class name

The `has` method is used to check if the mapping contains a given class name.

```php
$classMap->has('otherClassName'); // false
```

## Has key

The `hasKey` method is used to check if the mapping contains a class name for the given key.

```php
$classMap->hasKey('my_key'); // true
```

## Get key

The `key` method is used to get the mapping key for the given class name.

```php
$classMap->key('SomeClassName'); // key_a
```

## Get all keys

The `keys` method returns an array of all keys.

```php
$classMap->keys(); // ['key_a','my_key'];
```

## Get class name

The `className` method is used to get the class name mapped to the given key.

```php
$classMap->className('my_key'); // stdClass
```
