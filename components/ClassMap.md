# ClassMap

The ClassMap component is in charge of collecting full-qualified class names.

[ClassMapInterface](../reference/Chevere/Interfaces/ClassMap/ClassMapInterface.md) describes the interface for the component in charge of defining a ClassMap.

## Creating ClassMap

```php
use Chevere\Components\ClassMap\ClassMap;

$classMap = new ClassMap();
```

## Adding class mappings

The `withPut` method is used to add a class name mapping to a given key.

```php
$classMap = $classMap->WithPut('className', 'my-key');
```

## Has class name

The `has` method is used to check if the mapping contains a given class name.

```php
$classMap->has('otherClassName'); // false
```

## Has key

The `hasKey` method is used to check if the mapping contains a class name for the given key.

```php
$classMap->hasKey('my-key'); // true
```

## Get key

The `key` method is used to get the mapping key for the given class name.

```php
$classMap->key('className'); // my-key
```

## Get class name

The `className` method is used to get the class name mapped to the given key.

```php
$classMap->getCLass('my-key'); // className
```
