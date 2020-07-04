---
editLink: false
---

# RouterInterface

`Chevere\Interfaces\Router\RouterInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Router/RouterInterface.php)

## Constants

### CACHE_ID

Type `string`

```php
'router'
```

## Methods

### withRoutables()

**Parameters**

1. [RoutablesInterface](./RoutablesInterface.md) `$routables`

::: tip RETURN
RouterInterface
:::

---

### routables()

::: tip RETURN
[RoutablesInterface](./RoutablesInterface.md)
:::

---

### withRegex()

Return an instance with the specified RegexInterface.

**Parameters**

1. [RouterRegexInterface](./RouterRegexInterface.md) `$regex`

::: tip RETURN
RouterInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified RegexInterface.

---

### hasRegex()

::: tip RETURN
bool
:::

---

### regex()

Provides access to the instance regex.

::: tip RETURN
[RouterRegexInterface](./RouterRegexInterface.md)
:::

---

### withIndex()

Return an instance with the specified index.

**Parameters**

1. [RouterIndexInterface](./RouterIndexInterface.md) `$index`

::: tip RETURN
RouterInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified index.

---

### index()

Provides access to the instance index.

::: tip RETURN
[RouterIndexInterface](./RouterIndexInterface.md)
:::

---
