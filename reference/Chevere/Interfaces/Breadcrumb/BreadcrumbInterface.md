# BreadcrumbInterface

`Chevere\Interfaces\Breadcrumb\BreadcrumbInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Breadcrumb/BreadcrumbInterface.php)

## Extends

- [ToArrayInterface]()
- [ToStringInterface]()

## Methods

### has()

> Returns a boolean indicating whether the instance has the given position.

#### Parameters

- int `$pos`

#### Return

bool

---

### hasAny()

> Returns a boolean indicating whether the instance has any items.

#### Return

bool

---

### pos()

> Returns the current breadcrumb position.

#### Return

int

---

### withAddedItem()

> Return an instance with the specified string item added.

This method MUST retain the state of the current instance, and return
an instance that contains the specified item.

#### Parameters

- string `$item`

#### Return

BreadcrumbInterface

---

### withRemovedItem()

> Return an instance with the specified waypoint pos removed.

This method MUST retain the state of the current instance, and return
an instance that contains the specified waypoint pos removed.

#### Parameters

- int `$pos`

#### Return

BreadcrumbInterface

---

### toArray()

> Returns an array, representing the object itself or some of its data/properties.

#### Return

array

---

### toString()

> Returns a string, representing the object itself or some of its data/properties.

#### Return

string

---

