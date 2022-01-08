---
editLink: false
---

# MapInterface

`Chevere\Interfaces\DataStructure\MapInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/DataStructure/MapInterface.php)

## Extends

- [MappedInterface](./MappedInterface.md)
- [GetIteratorInterface](./GetIteratorInterface.md)
- [KeysInterface](./KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of providing an immutable Ds\Map interface.

## Methods

### __construct

::: warning Parameters
- *...namedArguments*: mixed
:::

---

### withPut

::: warning Parameters
- *key*: string
- *values*: mixed
:::

::: tip Return
self
:::

---

### has

::: warning Parameters
- *...keys*: string
:::

::: tip Return
bool
:::

---

### assertHas

::: warning Parameters
- *...keys*: string
:::

::: tip Return
void
:::

---

### get

::: warning Parameters
- *key*: string
:::

::: tip Return
void
:::

---

### keys

Provides access to the object keys.

::: tip Return
array
:::

---

### getIterator

::: tip Return
[Iterator](https://www.php.net/manual/class.iterator)
:::

---
