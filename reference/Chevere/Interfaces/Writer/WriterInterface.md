---
editLink: false
---

# WriterInterface

`Chevere\Interfaces\Writer\WriterInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Writer/WriterInterface.php)

## Extends

- [ToStringInterface](../Common/ToStringInterface.md)

## Description

Describes the component in charge of writing strings.

## Methods

### write()

Writes the given string.

#### Parameters

1. string `$string`

::: danger THROWS
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

::: tip RETURN
void
:::

---

### toString()

Returns the contents written. Must not alter the file cursor.

::: tip RETURN
string
:::

---
