# ClassMap

The [ClassMap](../reference/Chevere/Components/ClassMap/ClassMap.md) component is in charge of collecting full-qualified class names.

## Creating ClassMap

```php
use Chevere\Components\ClassMap\ClassMap;

$classMap = new ClassMap();
```

## Adding class mappings

The `withPut` method is used to add a mapping for a  fully-qualified class name to a given key.

```php
$classMap = $classMap->withPut(
    className: 'SomeClassName',
    key: 'my-key'
);
```

## Has class name

The `has` method is used to check if the mapping contains a given class name.

```php
$classMap->has(className: 'otherClassName'); // false
```

## Has key

The `hasKey` method is used to check if the mapping contains a class name for the given key.

```php
$classMap->hasKey(key: 'my-key'); // true
```

## Get key

The `key` method is used to get the mapping key for the given class name.

```php
$classMap->key(className: 'SomeClassName'); // my-key
```

## Get all keys

The `keys` method returns an array of all keys.

```php
$classMap->keys(); // ['my-key',];
```

## Get class name

The `className` method is used to get the class name mapped to the given key.

```php
$classMap->className(key: 'my-key'); // className
```
