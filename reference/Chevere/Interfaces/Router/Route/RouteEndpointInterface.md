---
editLink: false
---

# RouteEndpointInterface

`Chevere\Interfaces\Router\Route\RouteEndpointInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Router/Route/RouteEndpointInterface.php)

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

### __construct

::: warning Parameters
- *method*: [MethodInterface](../../Http/MethodInterface.md)
- *controller*: [ControllerInterface](../../Action/ControllerInterface.md)
:::

---

### method

Provides access to the `$method` instance.

::: tip Return
[MethodInterface](../../Http/MethodInterface.md)
:::

---

### controller

Provides access to the `$controller` instance.

::: tip Return
[ControllerInterface](../../Action/ControllerInterface.md)
:::

---

### withDescription

Return an instance with the specified `$description`.

::: warning Parameters
- *description*: string
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$description`.

---

### withoutParameter

Return an instance with the specified `$parameter` removed.

::: warning Parameters
- *parameter*: string
:::

::: danger Throws
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$parameter` removed.

---

### parameters

Provides access to the parameters.

::: tip Return
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

### description

Provides access to the description.

::: tip Return
string
:::

---

### getDescription

Defines the description.

::: tip Return
string
:::

---
