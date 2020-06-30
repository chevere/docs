# MessageInterface

`Chevere\Interfaces\Message\MessageInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Message/MessageInterface.php)

## Extends

- [ToStringInterface]()

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

#### Parameters

- string `$template`

---

### template()

> Provides access to the template property.

#### Return

string

---

### trTable()

> Provides access to the trTable property.

#### Return

array

---

### toConsole()

#### Return

string

---

### toHtml()

#### Return

string

---

### toString()

#### Return

string

---

### strtr()

> Return an instance with the specified string translation.

This method MUST retain the state of the current instance, and return
an instance that contains the specified string translation.

#### Parameters

- string `$search`
- string `$replace`

#### Return

MessageInterface

---

### emphasis()

> Return an instance with the specified emphasis.

This method MUST retain the state of the current instance, and return
an instance that contains the specified emphasis.

#### Parameters

- string `$search`
- string `$replace`

#### Return

MessageInterface

---

### strong()

> Return an instance with the specified strong.

This method MUST retain the state of the current instance, and return
an instance that contains the specified strong.

#### Parameters

- string `$search`
- string `$replace`

#### Return

MessageInterface

---

### underline()

> Return an instance with the specified underline.

This method MUST retain the state of the current instance, and return
an instance that contains the specified underline.

#### Parameters

- string `$search`
- string `$replace`

#### Return

MessageInterface

---

### code()

> Return an instance with the specified code.

This method MUST retain the state of the current instance, and return
an instance that contains the specified code.

#### Parameters

- string `$search`
- string `$replace`

#### Return

MessageInterface

---

