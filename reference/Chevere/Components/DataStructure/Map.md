---
editLink: false
---

# Map

`Chevere\Components\DataStructure\Map`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/DataStructure/Map.php)

## Implements

- [MapInterface](../../Interfaces/DataStructure/MapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [MappedInterface](../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### __construct

::: warning Parameters
- *...namedArguments*: mixed
:::

---

### __clone

::: tip Return
void
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

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
void
:::

---

### get

::: warning Parameters
- *key*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
void
:::

---

### keys

::: tip Return
array
:::

---

### count

::: tip Return
int
:::

---

### getGenerator

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---
