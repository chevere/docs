# Cache

The Cache component is in charge of providing a filesystem-based persistent application cache layer. It is intended to be used to cache application states accelerated on top of [OPcache](https://www.php.net/manual/book.opcache.php).

[CacheInterface](../reference/Chevere/Interfaces/Cache/CacheInterface.md) describes the interface for the component in charge of handling cache.

::: tip Learn by Example
Check the Router [make](https://github.com/chevere/examples/tree/master/03.Http#00router-makephp) and [resolve](https://github.com/chevere/examples/tree/master/03.Http#01router-resolvephp) for a working use-case of the Cache component.
:::

## Creating Cache

Cache works per directory, with keys represented by PHP return files in the filesystem.

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\FileSystem\Dir;
use Chevere\Components\FileSystem\Path;
use function Chevere\Components\Filesystem\dirForPath;

$cache = new Cache(dirForPath('/to-cache/'));
```

## Put

The `withPut` method is used to cache a variable. The code below shows how to cache an entry identified by the key `the_cache_key`.

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\Cache\CacheKey;
use Chevere\Components\Variable\VarExportable;

$cache = $cache->withPut(
    new CacheKey('the_cache_key'),
    new VarExportable($var)
);
```

`VarExportable` is required to check if the `$var` to cache can be actually cached.

## Puts

The `puts` method provides access to the cache put, which is an `array` containing details about `PUT` operations on the cache instance.

```php
$puts = $cache->puts();
```

## Check

The `exists` method is used to determine if cache exists at `$key`.

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\Cache\CacheKey;

$key = new CacheKey('the_cache_key');
$exists = $cache->exists($key);
```

## Get

The `get` method is used to retrieve a cached entry at the given `$key`. It returns the cached `$var`.

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\Cache\CacheKey;

$key = new CacheKey('the_cache_key');
$var = $cache->get($key);
```

## Remove

The `withRemove` method is used to remove the cache at the given `$key`.

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\Cache\CacheKey;

$cache = $cache->withRemove($key);
```
