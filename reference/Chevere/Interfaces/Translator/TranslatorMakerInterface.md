---
editLink: false
---

# TranslatorMakerInterface

`Chevere\Interfaces\Translator\TranslatorMakerInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Translator/TranslatorMakerInterface.php)

## Description

Describes the component in charge of make a translator.

## Methods

### __construct()

#### Parameters

1. [DirInterface](../Filesystem/DirInterface.md) `$sourceDir`
2. [DirInterface](../Filesystem/DirInterface.md) `$targetDir`

---

### locale()

::: tip RETURN
string
:::

---

### sourceDir()

::: tip RETURN
[DirInterface](../Filesystem/DirInterface.md)
:::

---

### targetDir()

::: tip RETURN
[DirInterface](../Filesystem/DirInterface.md)
:::

---

### withLocale()

#### Parameters

1. string `$locale`

::: tip RETURN
self
:::

---

### make()

#### Parameters

1. string `$domain`

::: tip RETURN
string
:::

---
