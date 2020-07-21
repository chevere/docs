---
editLink: false
---

# ServiceProvidersInterface

`Chevere\Interfaces\Service\ServiceProvidersInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Service/ServiceProvidersInterface.php)

## Implements

- [DsMapInterface](../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting service providers in a serviceable interface.

## Methods

### __construct()

#### Parameters

1. [ServiceableInterface](./ServiceableInterface.md) `$serviceable`

---

### withAdded()

Return an instance with the specified added `$method`.

#### Parameters

1. string `$method`

::: danger THROWS
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md)
If `$method` doesn't exists in `$serviceable`.
- ⚠ Unknown type `LogicException` declared in `@throws` tag`
- ⚠ Unknown type `ArgumentCountException` declared in `@throws` tag`
- ⚠ Unknown type `UnexpectedValueException` declared in `@throws` tag`
- [OverflowException](../../Exceptions/Core/OverflowException.md)
If `$method` has been already added.
:::

::: tip RETURN
ServiceProvidersInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified added `$method`.

The `$method` argument must be a public method in `$serviceable` taking
one single `$argument` for the concrete service class implementing `ServiceInterface`.

---

### getGenerator()

```php
yield $method => $serviceName
```

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### keys()

Provides access to the map keys.

::: tip RETURN
array
:::

---

### mapCopy()

Provides a deep copy of the internal map.

::: tip RETURN
Ds\Map
:::

---
