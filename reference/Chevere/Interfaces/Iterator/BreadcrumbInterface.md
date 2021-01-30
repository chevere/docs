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

### has()

Indicates whether the instance has the given position.

**Parameters:**

- *pos*: int

::: tip RETURN
bool
:::

---

### pos()

Returns the current breadcrumb position.

::: tip RETURN
int
:::

---

### withAddedItem()

Return an instance with the specified added item.

**Parameters:**

- *item*: string

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified added item.

---

### withRemovedItem()

Return an instance with the specified pos removed.

**Parameters:**

- *pos*: int

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified pos removed.

---

### toArray()

Returns an array representation of the object.

::: tip RETURN
array
:::

```php
return [0 => 'item',];
```

---

### toString()

Returns an string representation of the object.

::: tip RETURN
string
:::

```php
return '[item0][item1][itemN]...[itemN+1]';
```

---
