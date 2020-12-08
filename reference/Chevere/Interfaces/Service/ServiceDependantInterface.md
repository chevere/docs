---
editLink: false
---

# ServiceDependantInterface

`Chevere\Interfaces\Service\ServiceDependantInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Service/ServiceDependantInterface.php)

## Description

Describes the component in charge of defining a class with explicit dependencies.

## Methods

### withDependencies()

#### Parameters

1. mixed `$namedArguments`

::: tip RETURN
ServiceDependantInterface
:::

---

### getDependencies()

A class mapping for class name -> construct argument name

::: tip RETURN
[ClassMapInterface](../ClassMap/ClassMapInterface.md)
:::

---

### assertDependencies()

::: danger THROWS
- [LogicException](../../Exceptions/Core/LogicException.md) 
:::

::: tip RETURN
void
:::

---
