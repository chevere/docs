---
editLink: false
---

# RouteEndpointInterface

`Chevere\Interfaces\Route\RouteEndpointInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Route/RouteEndpointInterface.php)

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

**Parameters**

1. [MethodInterface](../Http/MethodInterface.md) `$method`
2. [ControllerInterface](../Controller/ControllerInterface.md) `$controller`

---

### method()

::: tip RETURN
[MethodInterface](../Http/MethodInterface.md)
:::

---

### controller()

::: tip RETURN
[ControllerInterface](../Controller/ControllerInterface.md)
:::

---

### withDescription()

**Parameters**

1. string `$description`

::: tip RETURN
RouteEndpointInterface
:::

---

### description()

::: tip RETURN
string
:::

---

### withoutParameter()

**Parameters**

1. string `$parameter`

::: tip RETURN
RouteEndpointInterface
:::

---

### parameters()

::: tip RETURN
array
:::

---

