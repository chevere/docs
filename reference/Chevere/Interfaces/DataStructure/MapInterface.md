---
editLink: false
---

# MapInterface

`Chevere\Interfaces\DataStructure\MapInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/DataStructure/MapInterface.php)

## Extends

- [MappedInterface](./MappedInterface.md)
- [GetGeneratorInterface](./GetGeneratorInterface.md)
- [KeysInterface](./KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of providing an immutable Ds\Map interface.

## Methods

### __construct()

**Parameters:**

- *...namedArguments*: mixed

---

### withPut()

**Parameters:**

- *...namedValues*: mixed

::: tip RETURN
self
:::

---

### assertHasKey()

**Parameters:**

- *...keys*: string

::: tip RETURN
void
:::

---

### get()

**Parameters:**

- *key*: string

::: tip RETURN
void
:::

---

### keys()

Provides access to the object keys.

::: tip RETURN
array
:::

---

### getGenerator()

Provides the generator.

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---
