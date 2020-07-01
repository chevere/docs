---
editLink: false
---

# RouterRegexInterface

`Chevere\Interfaces\Router\RouterRegexInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Router/RouterRegexInterface.php)

## Description

Provides regular expression formatting.

## Constants

### TEMPLATE

Type `string`

```php
'#^(?%s)$#x'
```

### MATCHER

Type `string`

```php
'~\\#\\^\\(\\?((\\|(\\S+) \\(\\*\\:\\d+\\))+)\\)\\$\\#x~'
```

### TEMPLATE_ENTRY

Type `string`

```php
'|%s (*:%s)'
```

## Methods

### regex()

::: tip RETURN
[RegexInterface](../Regex/RegexInterface.md)
:::

---
