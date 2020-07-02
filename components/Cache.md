# Cache

Cache refers to the system in charge of storing application states. It provides the ability to store _parts_ of the application, making easier to create performing running routines.

### How it Works

Cache works on the file system, using `.php` files that return a PHP value. In the code below `file.php` returns a string.

```php
<?php
return 'Hey there!';
```

The return value can be assigned to a variable:

```php
$var = include 'file.php'; // Hey there!
```

The return value (cached value) can be of **any*** type and the cache system wraps around this concept, providing an easy way to create, and interact with these PHP return files.

## Limitations

The Cache component doesn't support to cache type `resource`.

## Creating the Cache instance

Cache works per directory, with keys represented by PHP return files in the file system.

Cache implements the [CacheInterface](../reference/Chevere/Interfaces/Cache/CacheInterface.md) and it requires a working directory where cache will be stored.

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\FileSystem\DirFromString;

$cache = new Cache(
    new DirFromString('/to-cache/')
);
```

### Cache: PUT

The `withPut` method is used to cache a variable. The code below shows how to cache an entry identified by the key `the_cache_key`.

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\Cache\CacheKey;
use Chevere\Components\Variable\VarExportable;

$key = new CacheKey('the_cache_key');
$cache = $cache->withPut(
    $key,
    new VarExportable($var)
);
```

#### Cache: PUTS

The `puts` method provides access to the cache put log, which is an array containing details about `PUT` operations..

### Cache: EXISTS

The `exists` method is used to determine if cache exists at `$key`.

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\Cache\CacheKey;

$key = new CacheKey('the_cache_key');
$exists = $cache->exists($key);
```

### Cache: GET

The `get` method is used to retrieve a cached entry at the given `$key`. It returns the cached `$var`.

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\Cache\CacheKey;

$key = new CacheKey('the_cache_key');
$var = $cache->get($key);
```

### Cache: REMOVE

The `withRemove` method is used to remove the cache at the given `$key`.

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\Cache\CacheKey;

$cache = $cache->withRemove($key);
```