---
editLink: false
---

# MapInterface

`Chevere\Interfaces\DataStructure\MapInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/DataStructure/MapInterface.php)

## Extends

- [MappedInterface](./MappedInterface.md)
- [GetGeneratorInterface](./GetGeneratorInterface.md)
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
- *...namedValues*: mixed
:::

::: tip Return
self
:::

---

### assertHasKey

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

### getGenerator

Provides the generator.

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---
