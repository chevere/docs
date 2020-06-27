# Cache

Cache refers to a system in charge of storing application states. It provides the ability to store _parts_ of the application, making easier to create performing running routines.

### How it works

Since a `.php` file can return _something_, it can be used to store _anything_. The code below illustrates how `file.php` returns a string.

```php
<?php
return 'Hey there!';
```

From there, the return value can be assigned to a variable.

```php
$var = include 'file.php'; // Hey there!
```

As the return can be any scalar, an object, a serialized string, etc, it can be used to store _anything_. The cache system wraps around this concept, providing an easy way to create, and interact with cached entries.

As cache file-system based, it is both portable and performing thanks to [OPCache](https://www.php.net/manual/en/book.opcache.php).

## Working with Cache

> 🚧 The system supports all variable types except type `resource`.

### Creating the Cache instance

The Cache instance is created by passing the target cache directory.

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

The `puts` method provides access to the cache put, which is a string containing the cache keys, file path name and hash.

> 👍🏾 It is a good practice to store the file hashes and run frequent checks on these to avoid unwanted modifications.

### Cache: EXISTS

The `exists` method is used to determine if cache exists at `$key`.

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\Cache\CacheKey;

$exists = $cache->exists($key); // true *if exists
```

### Cache: GET

The `get` method is used to retrieve a cached entry at the given `$key`. It returns the cached `$var`.

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\Cache\CacheKey;

$var = $cache->get($key);
```

### Cache: REMOVE

The `withRemove` method is used to remove the cache at the given `$key`.

```php
use Chevere\Components\Cache\Cache;
use Chevere\Components\Cache\CacheKey;

$cache = $cache->withRemove($key);
```