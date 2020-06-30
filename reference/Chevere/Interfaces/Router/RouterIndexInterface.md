# RouterIndexInterface

`Chevere\Interfaces\Router\RouterIndexInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Router/RouterIndexInterface.php)

## Extends

- [ToArrayInterface]()

## Methods

### withAdded()

> Return an instance with the specified values.

This method MUST retain the state of the current instance, and return
an instance that contains the specified values.

#### Parameters

- [RoutableInterface](./RoutableInterface.md) `$routable`
- string `$group`

#### Return

RouterIndexInterface

---

### hasRouteName()

#### Parameters

- string `$routeName`

#### Return

bool

---

### getRouteIdentifier()

#### Parameters

- string `$routeName`

#### Return

[RouteIdentifierInterface](./RouteIdentifierInterface.md)

---

### hasGroup()

#### Parameters

- string `$group`

#### Return

bool

---

### getGroupRouteNames()

#### Parameters

- string `$group`

#### Return

array

---

### getRouteGroup()

#### Parameters

- string `$routeName`

#### Return

string

---

### toArray()

> Returns an array, representing the object itself or some of its data/properties.

#### Return

array

---

