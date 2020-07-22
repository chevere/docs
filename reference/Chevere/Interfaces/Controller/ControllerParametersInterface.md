---
editLink: false
---

# ControllerParametersInterface

`Chevere\Interfaces\Controller\ControllerParametersInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Controller/ControllerParametersInterface.php)

## Implements

- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `ControllerParameterInterface`.

## Methods

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### toArray()

Provides access to an array representation.

::: tip RETURN
array
:::

```php
return [
    'name' => $controllerParameter,
];
```

---

### withAdded()

Return an instance with the specified controller parameter instance.

#### Parameters

1. [ControllerParameterInterface](./ControllerParameterInterface.md) `$controllerParameter`

::: tip RETURN
ControllerParametersInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified controller parameter instance.

---

### hasParameterName()

Indicates whether the instance has a parameter identified by `$name`.

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
- ⚠ Unknown type `OutOfBoundsException` declared in `@throws` tag`
:::

::: tip RETURN
[ControllerParameterInterface](./ControllerParameterInterface.md)
:::

---
