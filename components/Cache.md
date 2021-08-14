# Cache

The [Cache](../reference/Chevere/Components/Cache/Cache.md) component is in charge of providing a filesystem-based application cache layer. It is intended to be used to cache application states accelerated on top of [OPcache](https://www.php.net/opcache).

::: tip Learn by Example
Check the Router [make](https://github.com/chevere/examples/tree/main/03.Http#00router-makephp) and [resolve](https://github.com/chevere/examples/tree/main/03.Http#01router-resolvephp) for a working use-case of the Cache component.
:::

## Creating Cache

Create a Cache by passing the cache working directory.

```php
use Chevere\Components\Cache\Cache;
use function Chevere\Components\Filesystem\dirForPath;

$cache = new Cache(dir: dirForPath('/to-cache/'));
```

## Cache Key

The [CacheKey](../reference/Chevere/Components/Cache/CacheKey.md) component provides cache keys to be used with the cache component. This is used to [put](#put), [get](#get), [exists](#exists) and [remove](#remove) cache.

```php
use Chevere\Components\Cache\CacheKey;

$key = new CacheKey(key: 'the_cache_key'),
```

## Put

The `withPut` method is used to cache a `var` which must be of type [VarStorable](../reference/Chevere/Components/VarStorable/VarStorable.md).

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\Cache\CacheKey;
use Chevere\Components\Variable\VarStorable;

$cache = $cache->withPut(
    key: $key,
    var: new VarStorable($var)
);
```

> Cache keys represent PHP return files in the filesystem.

## Puts

The `puts` method provides access to the cache put, which is an `array` containing details about `PUT` operations on the cache instance.

```php
$puts = $cache->puts();
```

## Exists

The `exists` method is used to determine if cache exists for `$key`.

```php
use Chevere\Components\Cache\Cache;

$exists = $cache->exists($key);
```

## Get

The `get` method is used to retrieve a cached entry at the given `$key`. It returns the cached `$var`.

```php
use Chevere\Components\Cache\Cache;

$var = $cache->get($key);
```

## Remove

The `withRemove` method is used to remove the cache at the given `$key`.

```php
use Chevere\Components\Cache\Cache;

$cache = $cache->withRemove($key);
```
