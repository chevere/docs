---
editLink: false
---

# Map

`Chevere\Components\DataStructure\Map`

[view source](https://github.com/chevere/chevere/blob/master/DataStructure/Map.php)

## Implements

- [MapInterface](../../Interfaces/DataStructure/MapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [MappedInterface](../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### __construct()

#### Parameters

1. mixed `...$namedArguments`

---

### __clone()

::: tip RETURN
void
:::

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

1. string `...$key`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
void
:::

---

### get()

#### Parameters

1. string `$key`

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