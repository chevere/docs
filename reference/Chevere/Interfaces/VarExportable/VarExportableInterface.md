---
editLink: false
---

# VarExportableInterface

`Chevere\Interfaces\VarExportable\VarExportableInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/VarExportable/VarExportableInterface.php)

## Description

Describes the component in charge of handling exportable variables.

## Methods

### __construct()

#### Parameters

1.  `$var`

::: danger THROWS
- [VarExportableException](../../Exceptions/VarExportable/VarExportableException.md)
if `$var` can't be exported.
:::

---

### var()

Provides access to `$var`.

::: tip RETURN
void
:::

---

### toExport()

Shorthand for `\var_export($var)`.

::: tip RETURN
void
:::

---

### toSerialize()

Shorthand for `\serialize($var)`.

::: tip RETURN
string
:::

---
