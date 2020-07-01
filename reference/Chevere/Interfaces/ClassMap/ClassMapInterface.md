---
editLink: false
---

# ClassMapInterface

`Chevere\Interfaces\ClassMap\ClassMapInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/ClassMap/ClassMapInterface.php)

## Implements

- [Countable](https://www.php.net/manual/class.countable)

## Methods

### isStrict()

::: tip RETURN
bool
:::

---

### withStrict()

**Parameters**

1. bool `$isStrict`

::: tip RETURN
ClassMapInterface
:::

---

### withPut()

**Parameters**

1. string `$className`
2. string `$string`

::: danger THROWS
[ClassNotExistsException](../../Exceptions/ClassMap/ClassNotExistsException.md)
:::

::: danger THROWS
[ClassMappedException](../../Exceptions/ClassMap/ClassMappedException.md)
:::

::: tip RETURN
ClassMapInterface
:::

---

### has()

**Parameters**

1. string `$className`

::: tip RETURN
bool
:::

---

### get()

**Parameters**

1. string `$className`

::: danger THROWS
[ClassNotMappedException](../../Exceptions/ClassMap/ClassNotMappedException.md)
:::

::: tip RETURN
string
:::

---

### toArray()

::: tip RETURN
array
:::

---
