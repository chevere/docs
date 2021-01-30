---
editLink: false
---

# Map

`Chevere\Components\DataStructure\Map`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/DataStructure/Map.php)

## Implements

- [MapInterface](../../Interfaces/DataStructure/MapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [MappedInterface](../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### __construct()

**Parameters:**

- *...namedArguments*: mixed

---

### __clone()

::: tip RETURN
void
:::

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

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
void
:::

---

### get()

**Parameters:**

- *key*: string

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
void
:::

---

### keys()

::: tip RETURN
array
:::

---

### count()

::: tip RETURN
int
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---
