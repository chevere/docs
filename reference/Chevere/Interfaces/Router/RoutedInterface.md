---
editLink: false
---

# RoutedInterface

`Chevere\Interfaces\Router\RoutedInterface`

[view source](https://github.com/chevere/chevere/blob/master/Router/RoutedInterface.php)

## Description

Describes the component in charge of defining a routed route.

## Methods

### __construct()

#### Parameters

1. [ControllerNameInterface](../Action/ControllerNameInterface.md) `$controllerName`
2. array `$arguments`

---

### controllerName()

Provides access to the `$controllerName` instance.

::: tip RETURN
[ControllerNameInterface](../Action/ControllerNameInterface.md)
:::

---

### getController()

Provides access to a new `$controllerName` instance.

::: tip RETURN
[ControllerInterface](../Action/ControllerInterface.md)
:::

---

### arguments()

Provides access to the `$arguments` instance.

::: tip RETURN
array
:::

```php
return [
    'name' => 'value',
]
```

---
