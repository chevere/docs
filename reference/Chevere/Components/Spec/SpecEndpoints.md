---
editLink: false
---

# SpecEndpoints

`Chevere\Components\Spec\SpecEndpoints`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Spec/SpecEndpoints.php)

## Implements

- [SpecEndpointsInterface](../../Interfaces/Spec/SpecEndpointsInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [MappedInterface](../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### withPut

::: warning Parameters
- *routeEndpointSpec*: [RouteEndpointSpecInterface](../../Interfaces/Spec/Specs/RouteEndpointSpecInterface.md)
:::

::: tip Return
[SpecEndpointsInterface](../../Interfaces/Spec/SpecEndpointsInterface.md)
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
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
string
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
