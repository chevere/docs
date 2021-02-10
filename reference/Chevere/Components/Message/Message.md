---
editLink: false
---

# Message

`Chevere\Components\Message\Message`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Message/Message.php)

## Implements

- [MessageInterface](../../Interfaces/Message/MessageInterface.md)
- [Stringable](https://www.php.net/manual/class.stringable)
- [ToStringInterface](../../Interfaces/Common/ToStringInterface.md)

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

### __toString

::: tip Return
string
:::

---

### template

::: tip Return
string
:::

---

### trTable

::: tip Return
array
:::

---

### toConsole

::: tip Return
string
:::

---

### toHtml

::: tip Return
string
:::

---

### toString

::: tip Return
string
:::

---

### strtr

::: warning Parameters
- *search*: string
- *replace*: string
:::

::: tip Return
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---

### emphasis

::: warning Parameters
- *search*: string
- *replace*: string
:::

::: tip Return
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---

### strong

::: warning Parameters
- *search*: string
- *replace*: string
:::

::: tip Return
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---

### underline

::: warning Parameters
- *search*: string
- *replace*: string
:::

::: tip Return
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---

### code

::: warning Parameters
- *search*: string
- *replace*: string
:::

::: tip Return
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---
