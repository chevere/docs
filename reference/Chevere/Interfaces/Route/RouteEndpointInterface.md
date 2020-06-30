# RouteEndpointInterface

`Chevere\Interfaces\Route\RouteEndpointInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Route/RouteEndpointInterface.php)

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

#### Parameters

- [MethodInterface](../Http/MethodInterface.md) `$method`
- [ControllerInterface](../Controller/ControllerInterface.md) `$controller`

---

### method()

#### Return

[MethodInterface](../Http/MethodInterface.md)

---

### controller()

#### Return

[ControllerInterface](../Controller/ControllerInterface.md)

---

### withDescription()

#### Parameters

- string `$description`

#### Return

RouteEndpointInterface

---

### description()

#### Return

string

---

### withoutParameter()

#### Parameters

- string `$parameter`

#### Return

RouteEndpointInterface

---

### parameters()

#### Return

array

---

