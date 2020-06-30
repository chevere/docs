---
editLink: false
---

# RouterCacheInterface

`Chevere\Interfaces\Router\RouterCacheInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Router/RouterCacheInterface.php)

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

**Parameters**

1. [CacheInterface](../Cache/CacheInterface.md) `$cache`

---

### routesCache()

::: tip RETURN
[RoutesCacheInterface](./RoutesCacheInterface.md)
:::

---

### routeResolvesCache()

::: tip RETURN
[RouteResolvesCacheInterface](./RouteResolvesCacheInterface.md)
:::

---

### hasRegex()

::: tip RETURN
bool
:::

---

### hasIndex()

::: tip RETURN
bool
:::

---

### getRegex()

::: tip RETURN
[RouterRegexInterface](./RouterRegexInterface.md)
:::

---

### getIndex()

::: tip RETURN
[RouterIndexInterface](./RouterIndexInterface.md)
:::

---

### withPut()

**Parameters**

1. [RouterInterface](./RouterInterface.md) `$router`

::: tip RETURN
RouterCacheInterface
:::

---

### remove()

::: tip RETURN
void
:::

---

### puts()

::: tip RETURN
array
:::

---

