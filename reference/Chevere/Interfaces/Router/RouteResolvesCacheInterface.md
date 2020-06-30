# RouteResolvesCacheInterface

`Chevere\Interfaces\Router\RouteResolvesCacheInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Router/RouteResolvesCacheInterface.php)

## Methods

### __construct()

#### Parameters

- [CacheInterface](../Cache/CacheInterface.md) `$cache`

---

### has()

#### Parameters

- int `$id`

#### Return

bool

---

### get()

#### Parameters

- int `$id`

#### Return

[RouteResolve](../../Components/Router/RouteResolve.md)

---

### put()

#### Parameters

- int `$id`
- [RouteResolve](../../Components/Router/RouteResolve.md) `$routeResolve`

#### Return

void

---

### remove()

#### Parameters

- int `$id`

#### Return

void

---

### puts()

#### Return

array

---

