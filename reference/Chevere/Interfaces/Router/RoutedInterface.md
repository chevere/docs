---
editLink: false
---

# RoutedInterface

`Chevere\Interfaces\Router\RoutedInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/RoutedInterface.php)

## Description

Describes the component in charge of defining a routed route.

## Methods

### __construct()

**Parameters:**

- *controllerName*: [ControllerNameInterface](../Action/ControllerNameInterface.md)
- *arguments*: array

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
