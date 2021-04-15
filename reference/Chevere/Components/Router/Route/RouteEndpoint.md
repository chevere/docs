---
editLink: false
---

# RouteEndpoint

`Chevere\Components\Router\Route\RouteEndpoint`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Router/Route/RouteEndpoint.php)

## Implements

- [RouteEndpointInterface](../../../Interfaces/Router/Route/RouteEndpointInterface.md)
- [DescriptionInterface](../../../Interfaces/Common/DescriptionInterface.md)

## Constants

### KNOWN_METHODS

Type `array`

```php
array (
  'CONNECT' => 'Chevere\\Components\\Http\\Methods\\ConnectMethod',
  'DELETE' => 'Chevere\\Components\\Http\\Methods\\DeleteMethod',
  'GET' => 'Chevere\\Components\\Http\\Methods\\GetMethod',
  'HEAD' => 'Chevere\\Components\\Http\\Methods\\HeadMethod',
  'OPTIONS' => 'Chevere\\Components\\Http\\Methods\\OptionsMethod',
  'PATCH' => 'Chevere\\Components\\Http\\Methods\\PatchMethod',
  'POST' => 'Chevere\\Components\\Http\\Methods\\PostMethod',
  'PUT' => 'Chevere\\Components\\Http\\Methods\\PutMethod',
  'TRACE' => 'Chevere\\Components\\Http\\Methods\\TraceMethod',
)
```

## Methods

### __construct

::: warning Parameters
- *method*: [MethodInterface](../../../Interfaces/Http/MethodInterface.md)
- *controller*: [ControllerInterface](../../../Interfaces/Controller/ControllerInterface.md)
:::

---

### method

::: tip Return
[MethodInterface](../../../Interfaces/Http/MethodInterface.md)
:::

---

### controller

::: tip Return
[ControllerInterface](../../../Interfaces/Controller/ControllerInterface.md)
:::

---

### withDescription

::: warning Parameters
- *description*: string
:::

::: tip Return
[RouteEndpointInterface](../../../Interfaces/Router/Route/RouteEndpointInterface.md)
:::

---

### description

::: tip Return
string
:::

---

### withoutParameter

::: warning Parameters
- *parameter*: string
:::

::: tip Return
[RouteEndpointInterface](../../../Interfaces/Router/Route/RouteEndpointInterface.md)
:::

---

### parameters

::: tip Return
array
:::

---

### getDescription

::: tip Return
string
:::

---
