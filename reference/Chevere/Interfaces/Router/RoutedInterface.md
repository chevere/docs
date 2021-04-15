---
editLink: false
---

# RoutedInterface

`Chevere\Interfaces\Router\RoutedInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Router/RoutedInterface.php)

## Description

Describes the component in charge of defining a routed route.

## Methods

### __construct

::: warning Parameters
- *controllerName*: [ControllerNameInterface](../Controller/ControllerNameInterface.md)
- *arguments*: array
:::

---

### controllerName

Provides access to the `$controllerName` instance.

::: tip Return
[ControllerNameInterface](../Controller/ControllerNameInterface.md)
:::

---

### getController

Provides access to a new `$controllerName` instance.

::: tip Return
[ControllerInterface](../Controller/ControllerInterface.md)
:::

---

### arguments

Provides access to the `$arguments` instance.

::: tip Return
array
:::

```php
return [
    'name' => 'value',
]
```

---
