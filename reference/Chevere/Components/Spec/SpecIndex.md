---
editLink: false
---

# SpecIndex

`Chevere\Components\Spec\SpecIndex`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Spec/SpecIndex.php)

## Implements

- [SpecIndexInterface](../../Interfaces/Spec/SpecIndexInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [MappedInterface](../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### withAddedRoute()

**Parameters:**

- *routeName*: string
- *routeEndpointSpec*: [RouteEndpointSpecInterface](../../Interfaces/Spec/Specs/RouteEndpointSpecInterface.md)

::: tip RETURN
[SpecIndexInterface](../../Interfaces/Spec/SpecIndexInterface.md)
:::

---

### has()

**Parameters:**

- *routeName*: string
- *methodName*: string

::: tip RETURN
bool
:::

---

### get()

**Parameters:**

- *routeName*: string
- *methodName*: string

::: tip RETURN
string
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
