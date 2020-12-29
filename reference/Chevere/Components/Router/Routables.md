---
editLink: false
---

# Routables

`Chevere\Components\Router\Routables`

[view source](https://github.com/chevere/chevere/blob/master/Router/Routables.php)

## Implements

- [RoutablesInterface](../../Interfaces/Router/RoutablesInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [MappedInterface](../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### withPut()

#### Parameters

1. [RoutableInterface](../../Interfaces/Router/RoutableInterface.md) `$routable`

::: tip RETURN
[RoutablesInterface](../../Interfaces/Router/RoutablesInterface.md)
:::

---

### has()

#### Parameters

1. string `$name`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. string `$name`

::: danger THROWS
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[RoutableInterface](../../Interfaces/Router/RoutableInterface.md)
:::

---

### __construct()

---

### __clone()

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
