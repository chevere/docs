---
editLink: false
---

# MessageInterface

`Chevere\Interfaces\Message\MessageInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Message/MessageInterface.php)

## Implements

- [ToStringInterface](../To/ToStringInterface.md)

## Description

Rich system messages for CLI and HTML.

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

**Parameters**

1. string `$template`

---

### template()

Provides access to the template property.

::: tip RETURN
string
:::

---

### trTable()

Provides access to the trTable property.

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

Return an instance with the specified string translation.

**Parameters**

1. string `$search`
2. string `$replace`

::: tip RETURN
MessageInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified string translation.

---

### emphasis()

Return an instance with the specified emphasis.

**Parameters**

1. string `$search`
2. string `$replace`

::: tip RETURN
MessageInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified emphasis.

---

### strong()

Return an instance with the specified strong.

**Parameters**

1. string `$search`
2. string `$replace`

::: tip RETURN
MessageInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified strong.

---

### underline()

Return an instance with the specified underline.

**Parameters**

1. string `$search`
2. string `$replace`

::: tip RETURN
MessageInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified underline.

---

### code()

Return an instance with the specified code.

**Parameters**

1. string `$search`
2. string `$replace`

::: tip RETURN
MessageInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified code.

---
