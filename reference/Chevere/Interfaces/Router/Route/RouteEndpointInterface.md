---
editLink: false
---

# RouteEndpointInterface

`Chevere\Interfaces\Router\Route\RouteEndpointInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/Route/RouteEndpointInterface.php)

## Extends

- [DescriptionInterface](../../Common/DescriptionInterface.md)

## Description

Describes the component in charge of defining a route endpoint.

Note: Parameters must be automatically determined from known `$controller` parameters.

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

1. [MethodInterface](../../Http/MethodInterface.md) `$method`
2. [ControllerInterface](../../Action/ControllerInterface.md) `$controller`

---

### method()

Provides access to the `$method` instance.

::: tip RETURN
[MethodInterface](../../Http/MethodInterface.md)
:::

---

### controller()

Provides access to the `$controller` instance.

::: tip RETURN
[ControllerInterface](../../Action/ControllerInterface.md)
:::

---

### withDescription()

Return an instance with the specified `$description`.

#### Parameters

1. string `$description`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$description`.

---

### withoutParameter()

Return an instance with the specified `$parameter` removed.

#### Parameters

1. string `$parameter`

::: danger THROWS
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$parameter` removed.

---

### parameters()

Provides access to the parameters.

::: tip RETURN
array
:::

```php
return [
    'name' => [
        'name' => 'name',
        'regex' => '/^\w+$/',
        'description' => 'User name',
        'isRequired' => true,
    ],
];
```

---

### description()

Provides access to the description.

::: tip RETURN
string
:::

---

### getDescription()

Defines the description.

::: tip RETURN
string
:::

---
