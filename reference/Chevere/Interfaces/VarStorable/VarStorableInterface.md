---
editLink: false
---

# VarStorableInterface

`Chevere\Interfaces\VarStorable\VarStorableInterface`

[view source](https://github.com/chevere/chevere/blob/master/VarStorable/VarStorableInterface.php)

## Description

Describes the component in charge of handling storable variables.

## Methods

### __construct()

#### Parameters

1.  `$var`

::: danger THROWS
- [VarStorableException](../../Exceptions/VarStorable/VarStorableException.md) if `$var` can't be exported.
:::

---

### var()

Provides access to `$var`.

::: tip RETURN
mixed
:::

---

### toExport()

Shorthand for `\var_export($var)`.

::: tip RETURN
string
:::

---

### toSerialize()

Shorthand for `\serialize($var)`.

::: tip RETURN
string
:::

---
