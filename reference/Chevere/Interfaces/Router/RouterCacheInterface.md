# RouterCacheInterface

`Chevere\Interfaces\Router\RouterCacheInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Router/RouterCacheInterface.php)

## Constants

### KEY_REGEX

Type `string`

```php
'regex'
```

### KEY_INDEX

Type `string`

```php
'index'
```


## Methods

### __construct()

#### Parameters

- [CacheInterface](../Cache/CacheInterface.md) `$cache`

---

### routesCache()

#### Return

[RoutesCacheInterface](./RoutesCacheInterface.md)

---

### routeResolvesCache()

#### Return

[RouteResolvesCacheInterface](./RouteResolvesCacheInterface.md)

---

### hasRegex()

#### Return

bool

---

### hasIndex()

#### Return

bool

---

### getRegex()

#### Return

[RouterRegexInterface](./RouterRegexInterface.md)

---

### getIndex()

#### Return

[RouterIndexInterface](./RouterIndexInterface.md)

---

### withPut()

#### Parameters

- [RouterInterface](./RouterInterface.md) `$router`

#### Return

RouterCacheInterface

---

### remove()

#### Return

void

---

### puts()

#### Return

array

---

