---
editLink: false
---

# SpecIndexMapInterface

`Chevere\Interfaces\Spec\SpecIndexMapInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Spec/SpecIndexMapInterface.php)

## Extends

- [MappedInterface](../DataStructure/MappedInterface.md)
- [GetGeneratorInterface](../DataStructure/GetGeneratorInterface.md)
- [KeysInterface](../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting route spec endpoints.

## Methods

### withPut

Return an instance with the specified `$specEndpoints` for `$routeName`.

::: warning Parameters
- *routeName*: string
- *specEndpoints*: [SpecEndpointsInterface](./SpecEndpointsInterface.md)
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$specEndpoints` for `$routeName`.

---

### hasKey

Indicates whether the instance has a spec endpoints identified by `$routeName`.

::: warning Parameters
- *routeName*: string
:::

::: tip Return
bool
:::

---

### get

Returns the route endpoint spec identified by its `$key`.

::: warning Parameters
- *routeName*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[SpecEndpointsInterface](./SpecEndpointsInterface.md)
:::

---

### getGenerator

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---

### keys

Provides access to the object keys.

::: tip Return
array
:::

---
