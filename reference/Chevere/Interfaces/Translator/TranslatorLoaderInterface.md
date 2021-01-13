---
editLink: false
---

# TranslatorLoaderInterface

`Chevere\Interfaces\Translator\TranslatorLoaderInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Translator/TranslatorLoaderInterface.php)

## Description

Describes the component in charge of load php translations.

## Methods

### __construct()

#### Parameters

1. [DirInterface](../Filesystem/DirInterface.md) `$dir`

::: danger THROWS
- [DirNotExistsException](../../Exceptions/Filesystem/DirNotExistsException.md) 
:::

---

### dir()

::: tip RETURN
[DirInterface](../Filesystem/DirInterface.md)
:::

---

### getTranslator()

#### Parameters

1. string `$locale`
2. string `$domain`

::: danger THROWS
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) If $locale doesn't exists.
- [DomainException](../../Exceptions/Core/DomainException.md) If $domain doesn't exists.
- ⚠ Unknown type `LogicException` declared in `@throws` tag`
:::

::: tip RETURN
Gettext\TranslatorInterface
:::

---
