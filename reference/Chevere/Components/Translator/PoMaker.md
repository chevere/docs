---
editLink: false
---

# PoMaker

`Chevere\Components\Translator\PoMaker`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Translator/PoMaker.php)

## Implements

- [PoMakerInterface](../../Interfaces/Translator/PoMakerInterface.md)

## Description



## Constants

### FUNCTIONS

Type `array`

```php
array (
  '__' => 'gettext',
  '__f' => 'gettext',
  '__t' => 'gettext',
  '__n' => 'ngettext',
  '__nf' => 'ngettext',
  '__nt' => 'ngettext',
)
```

## Methods

### __construct()

#### Parameters

1. string `$locale`
2. string `$domain`

---

### withScanFor()

#### Parameters

1. [DirInterface](../../Interfaces/Filesystem/DirInterface.md) `$sourceDir`

::: tip RETURN
self
:::

---

### make()

#### Parameters

1. [DirInterface](../../Interfaces/Filesystem/DirInterface.md) `$targetDir`

::: tip RETURN
void
:::

---

### getIterator()

::: tip RETURN
[RecursiveIteratorIterator](https://www.php.net/manual/class.recursiveiteratoriterator)
:::

---

### withWriter()

#### Parameters

1. [WriterInterface](../../Interfaces/Writer/WriterInterface.md) `$writer`

::: tip RETURN
self
:::

---

### writer()

::: tip RETURN
[WriterInterface](../../Interfaces/Writer/WriterInterface.md)
:::

---
