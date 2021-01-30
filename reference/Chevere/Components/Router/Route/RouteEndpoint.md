---
editLink: false
---

# RouteEndpoint

`Chevere\Components\Router\Route\RouteEndpoint`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Router/Route/RouteEndpoint.php)

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

### __construct()

**Parameters:**

- *method*: [MethodInterface](../../../Interfaces/Http/MethodInterface.md)
- *controller*: [ControllerInterface](../../../Interfaces/Action/ControllerInterface.md)

---

### method()

::: tip RETURN
[MethodInterface](../../../Interfaces/Http/MethodInterface.md)
:::

---

### controller()

::: tip RETURN
[ControllerInterface](../../../Interfaces/Action/ControllerInterface.md)
:::

---

### withDescription()

**Parameters:**

- *description*: string

::: tip RETURN
[RouteEndpointInterface](../../../Interfaces/Router/Route/RouteEndpointInterface.md)
:::

---

### description()

::: tip RETURN
string
:::

---

### withoutParameter()

**Parameters:**

- *parameter*: string

::: tip RETURN
[RouteEndpointInterface](../../../Interfaces/Router/Route/RouteEndpointInterface.md)
:::

---

### parameters()

::: tip RETURN
array
:::

---

### getDescription()

::: tip RETURN
string
:::

---
