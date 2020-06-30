# RouteResolvesCacheInterface

`Chevere\Interfaces\Router\RouteResolvesCacheInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Router/RouteResolvesCacheInterface.php)

## Methods

### __construct()

**Parameters**

1. [CacheInterface](../Cache/CacheInterface.md) `$cache`

---

### has()

**Parameters**

1. int `$id`

::: tip RETURN
bool
:::


---

### get()

**Parameters**

1. int `$id`

::: tip RETURN
[RouteResolve](../../Components/Router/RouteResolve.md)
:::


---

### put()

**Parameters**

1. int `$id`
2. [RouteResolve](../../Components/Router/RouteResolve.md) `$routeResolve`

::: tip RETURN
void
:::


---

### remove()

**Parameters**

1. int `$id`

::: tip RETURN
void
:::


---

### puts()

::: tip RETURN
array
:::


---

