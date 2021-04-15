---
editLink: false
---

# PoMaker

`Chevere\Components\Translator\PoMaker`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Translator/PoMaker.php)

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

### __construct

::: warning Parameters
- *locale*: string
- *domain*: string
:::

---

### withScanFor

::: warning Parameters
- *sourceDir*: [DirInterface](../../Interfaces/Filesystem/DirInterface.md)
:::

::: tip Return
self
:::

---

### make

::: warning Parameters
- *targetDir*: [DirInterface](../../Interfaces/Filesystem/DirInterface.md)
:::

::: tip Return
void
:::

---

### withWriter

::: warning Parameters
- *writer*: [WriterInterface](../../Interfaces/Writer/WriterInterface.md)
:::

::: tip Return
static
:::

---

### writer

::: tip Return
[WriterInterface](../../Interfaces/Writer/WriterInterface.md)
:::

---
