# Cache

Namespace `Chevere\Cache`

![Cache](../src/packages/cache/cache-logo.svg)

The Cache package provides a filesystem-based cache for PHP. Its purpose is to enable a richer abstraction around file returns which are cached with [OPcache](https://www.php.net/opcache). It is intended to be used to cache and accelerate application state.

## Installing

Cache is available through [Packagist](https://packagist.org/packages/chevere/cache) and the repository source is at [GitHub](https://github.com/chevere/cache).

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

The `withPut` method is used to cache a PHP [storable variable](../library/variable-support.md#storablevariable).

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

## Get

The `get` method is used to retrieve a cached entry at the given `$key`. It returns the cached `$var`.

```php
use Chevere\Cache\Cache;

$var = $cache->get($key);
```

## With Remove

The `withRemove` method is used to remove a item from the Cache repository at the given `$key`.

```php
$cache = $cache->withRemove($key);
```
