---
editLink: false
---

# ClassMapInterface

`Chevere\Interfaces\ClassMap\ClassMapInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/ClassMap/ClassMapInterface.php)

## Implements

- [Countable](https://www.php.net/manual/class.countable)
- [ToArrayInterface](../To/ToArrayInterface.md)

## Description

Describes the component in charge of mapping classes to strings.

## Methods

### withPut()

Return an instance with the specified className mapping.

**Parameters**

1. string `$className`
2. string `$string`

::: danger THROWS
- [ClassNotExistsException](../../Exceptions/ClassMap/ClassNotExistsException.md)
- [StringMappedException](../../Exceptions/ClassMap/StringMappedException.md)
:::

::: tip RETURN
ClassMapInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified className mapping.

---

### has()

Indicates whether the instance is mapping the given class name.

**Parameters**

1. string `$className`

::: tip RETURN
bool
:::

---

### get()

Provides access to the class name mapping.

**Parameters**

1. string `$className`

::: danger THROWS
- [ClassNotMappedException](../../Exceptions/ClassMap/ClassNotMappedException.md)
:::

::: tip RETURN
string
:::

---

### toArray()

Provides access to the class map.

::: tip RETURN
array
:::

```php
return [
    'className' => 'string',
]
```

---
