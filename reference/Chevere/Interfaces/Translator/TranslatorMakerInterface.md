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

### withMakeTranslation()

#### Parameters

1. string `$locale`
2. string `$domain`

::: tip RETURN
self
:::

---
