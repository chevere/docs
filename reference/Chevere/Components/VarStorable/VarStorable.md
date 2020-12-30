---
editLink: false
---

# VarStorable

`Chevere\Components\VarStorable\VarStorable`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/VarStorable/VarStorable.php)

## Implements

- [VarStorableInterface](../../Interfaces/VarStorable/VarStorableInterface.md)

## Methods

### __construct()

#### Parameters

1. mixed `$var`

---

### var()

::: tip RETURN
mixed
:::

---

### toExport()

::: tip RETURN
string
:::

---

### toSerialize()

::: tip RETURN
string
:::

---

### assertExportable()

#### Parameters

1.  `$var`

::: tip RETURN
void
:::

---

### assertIsNotResource()

#### Parameters

1.  `$var`

::: danger THROWS
- [NotVarStorableException](../../Exceptions/VarStorable/NotVarStorableException.md) 
:::

::: tip RETURN
void
:::

---

### breadcrumbIterable()

#### Parameters

1. iterable `$var`

::: danger THROWS
- ⚠ Unknown type `VarExportableIsResourceException` declared in `@throws` tag`
:::

::: tip RETURN
void
:::

---

### breadcrumbObject()

#### Parameters

1. object `$var`

::: tip RETURN
void
:::

---
