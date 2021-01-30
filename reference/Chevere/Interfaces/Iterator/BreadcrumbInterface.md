---
editLink: false
---

# BreadcrumbInterface

`Chevere\Interfaces\Iterator\BreadcrumbInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Iterator/BreadcrumbInterface.php)

## Extends

- [ToArrayInterface](../Common/ToArrayInterface.md)
- [ToStringInterface](../Common/ToStringInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describe a general purpose iterator companion.

## Methods

### has

Indicates whether the instance has the given position.

::: warning Parameters
- *pos*: int
:::

::: tip Return
bool
:::

---

### pos

Returns the current breadcrumb position.

::: tip Return
int
:::

---

### withAddedItem

Return an instance with the specified added item.

::: warning Parameters
- *item*: string
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified added item.

---

### withRemovedItem

Return an instance with the specified pos removed.

::: warning Parameters
- *pos*: int
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified pos removed.

---

### toArray

Returns an array representation of the object.

::: tip Return
array
:::

```php
return [0 => 'item',];
```

---

### toString

Returns an string representation of the object.

::: tip Return
string
:::

```php
return '[item0][item1][itemN]...[itemN+1]';
```

---
