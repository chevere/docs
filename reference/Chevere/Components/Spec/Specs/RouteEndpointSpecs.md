---
editLink: false
---

# RouteEndpointSpecs

`Chevere\Components\Spec\Specs\RouteEndpointSpecs`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Spec/Specs/RouteEndpointSpecs.php)

## Implements

- [RouteEndpointSpecsInterface](../../../Interfaces/Spec/Specs/RouteEndpointSpecsInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [MappedInterface](../../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### withPut

::: warning Parameters
- *routeEndpointSpec*: [RouteEndpointSpecInterface](../../../Interfaces/Spec/Specs/RouteEndpointSpecInterface.md)
:::

::: tip Return
[RouteEndpointSpecsInterface](../../../Interfaces/Spec/Specs/RouteEndpointSpecsInterface.md)
:::

---

### has

::: warning Parameters
- *methodName*: string
:::

::: tip Return
bool
:::

---

### get

::: warning Parameters
- *methodName*: string
:::

::: danger Throws
- [TypeException](../../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[RouteEndpointSpecInterface](../../../Interfaces/Spec/Specs/RouteEndpointSpecInterface.md)
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
