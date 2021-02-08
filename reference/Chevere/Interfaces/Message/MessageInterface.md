---
editLink: false
---

# MessageInterface

`Chevere\Interfaces\Message\MessageInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Message/MessageInterface.php)

## Extends

- [ToStringInterface](../Common/ToStringInterface.md)

## Description

Describes the component in charge of handling rich system messages for CLI and HTML.

## Constants

### CLI_TABLE

Type `array`

```php
array (
  'emphasis' => 
  array (
    'bold' => 3,
  ),
  'strong' => 
  array (
    'bold' => 1,
  ),
  'underline' => 
  array (
    'bold' => 4,
  ),
  'code' => 
  array (
    'bg' => 37,
    'fg' => 30,
  ),
)
```

### HTML_TABLE

Type `array`

```php
array (
  'emphasis' => 'em',
  'underline' => 'u',
)
```

## Methods

### __construct

::: warning Parameters
- *template*: string
:::

---

### template

Provides access to the message template.

::: tip Return
string
:::

---

### trTable

Provides access to the message translation table.

::: tip Return
array
:::

---

### toConsole

Returns a console message representation.

::: tip Return
string
:::

---

### toHtml

Returns a HTML message representation.

::: tip Return
string
:::

---

### toString

Returns a text message representation.

::: tip Return
string
:::

---

### strtr

Return an instance with the specified string translation.

::: warning Parameters
- *search*: string
- *replace*: string
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified string translation.

---

### emphasis

Return an instance with the specified `$search` replaced with `$replace` emphasis tag.

::: warning Parameters
- *search*: string
- *replace*: string
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$search` replaced with `$replace` emphasis tag.

---

### strong

Return an instance with the specified `$search` replaced with `$replace` as strong tag.

::: warning Parameters
- *search*: string
- *replace*: string
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$search` replaced with `$replace` as strong tag.

---

### underline

Return an instance with the specified underline.

::: warning Parameters
- *search*: string
- *replace*: string
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified underline.

---

### code

Return an instance with the specified `$search` replaced with `$replace` as code tag.

::: warning Parameters
- *search*: string
- *replace*: string
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$search` replaced with `$replace` as code tag.

---
