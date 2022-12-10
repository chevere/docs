# ClassMap

Namespace `Chevere\ClassMap`

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
    key1: 'SomeClass',
    key2: 'AnotherClass'
);
```

## Has class name

The `has` method is used to check if the mapping contains a given class name.

```php
$true = $classMap->has('SomeClass');
$false = $classMap->has('OtherClassName');
```

## Has key

The `hasKey` method is used to check if the mapping contains a class name for the given key.

```php
$true = $classMap->hasKey('key1');
$false = $classMap->hasKey('key3');
```

## Get key

The `key` method is used to get the mapping key `string` for the given class name.

```php
$key1 = $classMap->key('SomeClass');
```

## Get all keys

The `keys` method returns an `array` of all keys.

```php
$array = $classMap->keys();
// ['key1', 'key2'];
```

## Get class name

The `className` method is used to get the class name mapped to the given key.

```php
$classMap->className('key1');
// AnotherClass
```
