---
editLink: false
---

# Routables

`Chevere\Components\Router\Routables`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Router/Routables.php)

## Implements

- [RoutablesInterface](../../Interfaces/Router/RoutablesInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [MappedInterface](../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### withPut

::: warning Parameters
- *routable*: [RoutableInterface](../../Interfaces/Router/RoutableInterface.md)
:::

::: tip Return
[RoutablesInterface](../../Interfaces/Router/RoutablesInterface.md)
:::

---

### has

::: warning Parameters
- *name*: string
:::

::: tip Return
bool
:::

---

### get

::: warning Parameters
- *name*: string
:::

::: danger Throws
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[RoutableInterface](../../Interfaces/Router/RoutableInterface.md)
:::

---

### __construct

---

### __clone

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
