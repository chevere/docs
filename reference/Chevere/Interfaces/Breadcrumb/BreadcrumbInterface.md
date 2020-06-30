---
editLink: false
---

# BreadcrumbInterface

`Chevere\Interfaces\Breadcrumb\BreadcrumbInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Breadcrumb/BreadcrumbInterface.php)

## Implements

- [ToArrayInterface](../To/ToArrayInterface.md)
- [ToStringInterface](../To/ToStringInterface.md)

## Methods

### has()

Returns a boolean indicating whether the instance has the given position.

**Parameters**

1. int `$pos`

::: tip RETURN
bool
:::

---

### hasAny()

Returns a boolean indicating whether the instance has any items.

::: tip RETURN
bool
:::

---

### pos()

Returns the current breadcrumb position.

::: danger THROWS
[BreadcrumbException](../../Exceptions/Breadcrumb/BreadcrumbException.md)
if there's no item
:::
::: tip RETURN
int
:::

---

### withAddedItem()

Return an instance with the specified string item added.

**Parameters**

1. string `$item`

::: tip RETURN
BreadcrumbInterface
:::
This method MUST retain the state of the current instance, and return
an instance that contains the specified item.

---

### withRemovedItem()

Return an instance with the specified waypoint pos removed.

**Parameters**

1. int `$pos`

::: danger THROWS
[BreadcrumbException](../../Exceptions/Breadcrumb/BreadcrumbException.md)
if the item specified by $pos doesn't exists
:::
::: tip RETURN
BreadcrumbInterface
:::
This method MUST retain the state of the current instance, and return
an instance that contains the specified waypoint pos removed.

---

### toArray()

Returns an array, representing the object itself or some of its data/properties.

::: tip RETURN
array
:::

---

### toString()

Returns a string, representing the object itself or some of its data/properties.

::: tip RETURN
string
:::

---

