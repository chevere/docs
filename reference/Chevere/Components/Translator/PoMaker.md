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

**Parameters:**

- *locale*: string
- *domain*: string

---

### withScanFor()

**Parameters:**

- *sourceDir*: [DirInterface](../../Interfaces/Filesystem/DirInterface.md)

::: tip RETURN
self
:::

---

### make()

**Parameters:**

- *targetDir*: [DirInterface](../../Interfaces/Filesystem/DirInterface.md)

::: tip RETURN
void
:::

---

### withWriter()

**Parameters:**

- *writer*: [WriterInterface](../../Interfaces/Writer/WriterInterface.md)

::: tip RETURN
self
:::

---

### writer()

::: tip RETURN
[WriterInterface](../../Interfaces/Writer/WriterInterface.md)
:::

---
