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

Describes the component in charge of defining an immutable map.

## Methods

### __construct()

#### Parameters

1. mixed `...$namedArguments`

---

### withPut()

#### Parameters

1. string `$key`
2.  `$value`

::: tip RETURN
self
:::

---

### assertHasKey()

#### Parameters

1. string `...$keys`

::: tip RETURN
void
:::

---

### get()

#### Parameters

1. string `$key`

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
