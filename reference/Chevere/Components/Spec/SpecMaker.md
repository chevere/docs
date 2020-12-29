---
editLink: false
---

# SpecMaker

`Chevere\Components\Spec\SpecMaker`

[view source](https://github.com/chevere/chevere/blob/master/Spec/SpecMaker.php)

## Implements

- [SpecMakerInterface](../../Interfaces/Spec/SpecMakerInterface.md)

## Methods

### __construct()

#### Parameters

1. [DirInterface](../../Interfaces/Filesystem/DirInterface.md) `$specDir`
2. [DirInterface](../../Interfaces/Filesystem/DirInterface.md) `$outputDir`
3. [RouterInterface](../../Interfaces/Router/RouterInterface.md) `$router`

---

### specIndex()

::: tip RETURN
[SpecIndexInterface](../../Interfaces/Spec/SpecIndexInterface.md)
:::

---

### files()

::: tip RETURN
Ds\Map
:::

---

### assertDir()

::: tip RETURN
void
:::

---

### assertRouter()

::: tip RETURN
void
:::

---

### makeJsonFile()

#### Parameters

1. [SpecInterface](../../Interfaces/Spec/SpecInterface.md) `$spec`

::: tip RETURN
void
:::

---

### getPathFor()

#### Parameters

1. string `$jsonPath`

::: tip RETURN
[PathInterface](../../Interfaces/Filesystem/PathInterface.md)
:::

---

### toJson()

#### Parameters

1. array `$array`

::: tip RETURN
string
:::

---
