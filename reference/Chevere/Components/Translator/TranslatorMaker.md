---
editLink: false
---

# TranslatorMaker

`Chevere\Components\Translator\TranslatorMaker`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Translator/TranslatorMaker.php)

## Implements

- [TranslatorMakerInterface](../../Interfaces/Translator/TranslatorMakerInterface.md)

## Methods

### __construct()

#### Parameters

1. [DirInterface](../../Interfaces/Filesystem/DirInterface.md) `$sourceDir`
2. [DirInterface](../../Interfaces/Filesystem/DirInterface.md) `$targetDir`

---

### sourceDir()

::: tip RETURN
[DirInterface](../../Interfaces/Filesystem/DirInterface.md)
:::

---

### targetDir()

::: tip RETURN
[DirInterface](../../Interfaces/Filesystem/DirInterface.md)
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

### handleLocale()

#### Parameters

1. string `$locale`

::: tip RETURN
void
:::

---
