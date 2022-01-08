---
editLink: false
---

# Routes

`Chevere\Components\Router\Routes`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Router/Routes.php)

## Implements

- [RoutesInterface](../../Interfaces/Router/RoutesInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../Interfaces/DataStructure/KeysInterface.md)
- [GetIteratorInterface](../../Interfaces/DataStructure/GetIteratorInterface.md)
- [MappedInterface](../../Interfaces/DataStructure/MappedInterface.md)

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

::: warning Parameters
- *...routes*: [RouteInterface](../../Interfaces/Router/Route/RouteInterface.md)
:::

::: tip Return
[RoutesInterface](../../Interfaces/Router/RoutesInterface.md)
:::

---

### has

::: warning Parameters
- *...paths*: string
:::

::: tip Return
bool
:::

---

### get

::: warning Parameters
- *path*: string
:::

::: danger Throws
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[RouteInterface](../../Interfaces/Router/Route/RouteInterface.md)
:::

---

### __construct

---

### __clone

::: tip Return
void
:::

---

### keys

::: tip Return
array
:::

---

### count

::: tip Return
int
:::

---

### getIterator

::: tip Return
[Iterator](https://www.php.net/manual/class.iterator)
:::

---
