# ProcessorInterface

`Chevere\Interfaces\VarDump\ProcessorInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/VarDump/ProcessorInterface.php)

## Constants

### MAX_DEPTH

Type `integer`

```php
10
```

## Methods

### info()

> Provides access to the instance info.

The information about the variable like `size=1` or `length=6`

#### Return

string

---

### typeHighlighted()

#### Return

string

---

### highlightOperator()

#### Parameters

- string `$string`

#### Return

string

---

### highlightParentheses()

#### Parameters

- string `$string`

#### Return

string

---

### circularReference()

#### Return

string

---

### maxDepthReached()

#### Return

string

---

### type()

> Provides access to the instance type.

The information about the variable type like `array` or `object`

#### Return

string

---

### write()

#### Return

void

---

