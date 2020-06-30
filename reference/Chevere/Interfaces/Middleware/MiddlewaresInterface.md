# MiddlewaresInterface

`Chevere\Interfaces\Middleware\MiddlewaresInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Middleware/MiddlewaresInterface.php)

## Extends

- [DsMapInterface]()
- [Countable]()

## Methods

### withAddedMiddleware()

> Return an instance with the specified $middleware.

This method MUST retain the state of the current instance, and return
an instance that contains the specified $middleware.

#### Parameters

- Psr\Http\Server\MiddlewareInterface `$middleware`

#### Return

MiddlewaresInterface

---

### has()

> Returns a boolean indicating whether the instance has the given MiddlewareNameInterface.

#### Parameters

- Psr\Http\Server\MiddlewareInterface `$middleware`

#### Return

bool

---

### keys()

#### Return

array

---

### map()

#### Return

Ds\Map

---

### count()

#### Return

void

---

