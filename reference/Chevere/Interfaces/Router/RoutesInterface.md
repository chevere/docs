---
editLink: false
---

# RoutesInterface

`Chevere\Interfaces\Router\RoutesInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Router/RoutesInterface.php)

## Extends

- [MappedInterface](../DataStructure/MappedInterface.md)
- [GetIteratorInterface](../DataStructure/GetIteratorInterface.md)
- [KeysInterface](../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RouteInterface`.

## Constants

### EXCEPTION_CODE_TAKEN_NAME

Type `integer`

```php
110
```

### EXCEPTION_CODE_TAKEN_PATH

Type `integer`

```php
100
```

## Methods

### withAdded

Return an instance with the specified `$namedRoutes`.

::: warning Parameters
- *...namedRoutes*: Route/RouteInterface.md
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$namedRoutes`.

---

### has

Indicates whether the instance has routable(s) identified by its `$path`.

::: warning Parameters
- *...path*: string
:::

::: tip Return
bool
:::

---

### get

Returns the routable identified by its `$path`.

::: warning Parameters
- *path*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
Route/RouteInterface.md
:::

---

### getIterator

::: tip Return
[Iterator](https://www.php.net/manual/class.iterator)
:::

---

### keys

Provides access to the object keys.

::: tip Return
array
:::

---
