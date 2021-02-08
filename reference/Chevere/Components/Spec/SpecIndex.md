---
editLink: false
---

# SpecIndex

`Chevere\Components\Spec\SpecIndex`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Spec/SpecIndex.php)

## Implements

- [SpecIndexInterface](../../Interfaces/Spec/SpecIndexInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [MappedInterface](../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### withAddedRoute

::: warning Parameters
- *routeName*: string
- *routeEndpointSpec*: [RouteEndpointSpecInterface](../../Interfaces/Spec/Specs/RouteEndpointSpecInterface.md)
:::

::: tip Return
[SpecIndexInterface](../../Interfaces/Spec/SpecIndexInterface.md)
:::

---

### has

::: warning Parameters
- *routeName*: string
- *methodName*: string
:::

::: tip Return
bool
:::

---

### get

::: warning Parameters
- *routeName*: string
- *methodName*: string
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
