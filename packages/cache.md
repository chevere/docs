# Cache

![Cache](/src/packages/cache-logo.svg)

Namespace `Chevere\Cache`

The Cache package provides a filesystem-based cache for PHP. Its purpose is to enable a richer abstraction around file returns which are cached with [OPcache](https://www.php.net/opcache). It is intended to be used to cache and accelerate application state.

## Installing

Cache is available through [Packagist](https://packagist.org/packages/chevere/cache) and the repository source is at [chevere/cache](https://github.com/chevere/cache).

```sh
composer require chevere/cache
```

## Creating Cache

Create a Cache repository by passing the cache working directory. The system will read and write cache from files stored in this directory.

```php
use Chevere\Cache\Cache;
use function Chevere\Filesystem\directoryForPath;

$directory = directoryForPath(__DIR__);
$cache = new Cache($directory);
```

## With Put

The `withPut` method is used to cache PHP [storable variable](./var-support.md#storablevariable).

```php
use Chevere\Cache\Cache;
use Chevere\VariableSupport\StorableVariable;

$storable = new StorableVariable($var);
$cache = $cache->withPut(
    key: $storable,
);
```

## Puts

The `puts` method provides access to an `array` containing details about [With Put](#with-put) operations on the Cache repository.

```php
$array = $cache->puts();
```

## Exists

The `exists` method is used to determine if cache exists for `$key`.

```php
$boolean = $cache->exists($key);
```

## Get Item

The `get` method is used to retrieve a cached Item at the given `$key`.

```php
$item = $cache->get($key);
```

### Get Item variable

The `get` method returns the PHP variable for the Cache Item.

```php
$mixed = $item->get();
```

### Get Item variable typed

The `get<Type>` methods does the same as [get](#get-item-variable), but it type-hint the return value.

```php
$array => $item->getArray();
$boolean => $item->getBoolean();
$float => $item->getFloat();
$integer => $item->getInteger();
$object => $item->getObject();
$string => $item->getString();
```

## With Remove

The `withRemove` method is used to remove a Item from the Cache repository at the given `$key`.

```php
$cache = $cache->withRemove($key);
```
