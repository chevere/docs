---
editLink: false
---

# WriterInterface

`Chevere\Interfaces\Writer\WriterInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Writer/WriterInterface.php)

## Extends

- [ToStringInterface](../Common/ToStringInterface.md)

## Description

Describes the component in charge of writing strings.

## Methods

### write

Writes the given string.

::: warning Parameters
- *string*: string
:::

::: danger Throws
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

::: tip Return
void
:::

---

### toString

Returns the contents written. Must not alter the file cursor.

::: tip Return
string
:::

---
