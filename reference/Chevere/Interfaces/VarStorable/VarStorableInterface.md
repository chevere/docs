---
editLink: false
---

# VarStorableInterface

`Chevere\Interfaces\VarStorable\VarStorableInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/VarStorable/VarStorableInterface.php)

## Description

Describes the component in charge of handling storable variables.

## Methods

### __construct

::: warning Parameters
- *var*: 
:::

::: danger Throws
- [NotVarStorableException](../../Exceptions/VarStorable/NotVarStorableException.md) if `$var` can't be exported.
:::

---

### var

Provides access to `$var`.

::: tip Return
mixed
:::

---

### toExport

Shorthand for `\var_export($var)`.

::: tip Return
string
:::

---

### toSerialize

Shorthand for `\serialize($var)`.

::: tip Return
string
:::

---
