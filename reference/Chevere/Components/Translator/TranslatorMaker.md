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

### locale()

::: tip RETURN
string
:::

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

### assertHasLocale()

#### Parameters

1. string `$method`

::: tip RETURN
void
:::

---
