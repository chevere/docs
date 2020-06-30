# RouterInterface

`Chevere\Interfaces\Router\RouterInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Router/RouterInterface.php)

## Constants

### CACHE_ID

Type `string`

```php
'router'
```

## Methods

### withRoutables()

#### Parameters

- [Routables](../../Components/Router/Routables.md) `$routables`

#### Return

RouterInterface

---

### routables()

#### Return

[Routables](../../Components/Router/Routables.md)

---

### withRegex()

> Return an instance with the specified RegexInterface.

This method MUST retain the state of the current instance, and return
an instance that contains the specified RegexInterface.

#### Parameters

- [RouterRegexInterface](./RouterRegexInterface.md) `$regex`

#### Return

RouterInterface

---

### hasRegex()

#### Return

bool

---

### regex()

> Provides access to the instance regex.

#### Return

[RouterRegexInterface](./RouterRegexInterface.md)

---

### withIndex()

> Return an instance with the specified index.

This method MUST retain the state of the current instance, and return
an instance that contains the specified index.

#### Parameters

- [RouterIndexInterface](./RouterIndexInterface.md) `$index`

#### Return

RouterInterface

---

### index()

> Provides access to the instance index.

#### Return

[RouterIndexInterface](./RouterIndexInterface.md)

---

