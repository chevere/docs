---
editLink: false
---

# RouteEndpointSpecs

`Chevere\Components\Spec\Specs\RouteEndpointSpecs`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Spec/Specs/RouteEndpointSpecs.php)

## Implements

- [RouteEndpointSpecsInterface](../../../Interfaces/Spec/Specs/RouteEndpointSpecsInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [MappedInterface](../../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### withPut()

**Parameters:**

- *routeEndpointSpec*: [RouteEndpointSpecInterface](../../../Interfaces/Spec/Specs/RouteEndpointSpecInterface.md)

::: tip RETURN
[RouteEndpointSpecsInterface](../../../Interfaces/Spec/Specs/RouteEndpointSpecsInterface.md)
:::

---

### has()

**Parameters:**

- *methodName*: string

::: tip RETURN
bool
:::

---

### get()

**Parameters:**

- *methodName*: string

::: danger THROWS
- [TypeException](../../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[RouteEndpointSpecInterface](../../../Interfaces/Spec/Specs/RouteEndpointSpecInterface.md)
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
