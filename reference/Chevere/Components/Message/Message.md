---
editLink: false
---

# Message

`Chevere\Components\Message\Message`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Message/Message.php)

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

### __construct()

#### Parameters

1. string `$template`

---

### __toString()

::: tip RETURN
string
:::

---

### template()

::: tip RETURN
string
:::

---

### trTable()

::: tip RETURN
array
:::

---

### toConsole()

::: tip RETURN
string
:::

---

### toHtml()

::: tip RETURN
string
:::

---

### toString()

::: tip RETURN
string
:::

---

### strtr()

#### Parameters

1. string `$search`
2. string `$replace`

::: tip RETURN
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---

### emphasis()

#### Parameters

1. string `$search`
2. string `$replace`

::: tip RETURN
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---

### strong()

#### Parameters

1. string `$search`
2. string `$replace`

::: tip RETURN
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---

### underline()

#### Parameters

1. string `$search`
2. string `$replace`

::: tip RETURN
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---

### code()

#### Parameters

1. string `$search`
2. string `$replace`

::: tip RETURN
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---

### put()

#### Parameters

1. string `$format`
2. string `$search`
3. string `$replace`

::: tip RETURN
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---
