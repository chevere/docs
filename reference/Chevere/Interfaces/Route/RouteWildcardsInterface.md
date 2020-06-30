# RouteWildcardsInterface

`Chevere\Interfaces\Route\RouteWildcardsInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Route/RouteWildcardsInterface.php)

## Extends

- [DsMapInterface]()
- [Countable]()

## Methods

### withAddedWildcard()

> Return an instance with the specified RouteWildcardInterface.

This method MUST retain the state of the current instance, and return
an instance that contains the specified RouteWildcardInterface.

This method should allow to override wildcards.

#### Parameters

- [RouteWildcardInterface](./RouteWildcardInterface.md) `$wildcard`

#### Return

RouteWildcardsInterface

---

### count()

#### Return

int

---

### has()

> Returns a boolean indicating whether the instance has a given RouteWildcardInterface.

#### Parameters

- string `$wildcardName`

#### Return

bool

---

### get()

> Provides access to the target RouteWildcardInterface instance.

#### Parameters

- string `$wildcardName`

#### Return

[RouteWildcardInterface](./RouteWildcardInterface.md)

---

### hasPos()

> Returns a boolean indicating whether the instance has RouteWildcardInterface in the given pos.

#### Parameters

- int `$pos`

#### Return

bool

---

### getPos()

> Provides access to the target RouteWildcardInterface instance in the given pos.

#### Parameters

- int `$pos`

#### Return

[RouteWildcardInterface](./RouteWildcardInterface.md)

---

### getGenerator()

#### Return

Generator

---

### keys()

#### Return

array

---

### map()

#### Return

Ds\Map

---

