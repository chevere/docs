---
editLink: false
---

# StrictStd

`Chevere\Components\Router\RouteParsers\StrictStd`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Router/RouteParsers/StrictStd.php)

## Implements

- FastRoute\RouteParser

## Extends

- FastRoute\RouteParser\Std

## Description

Strict version of `FastRoute\RouteParser\Std`, without optional routing.

## Constants

### REGEX_PATH

Type `string`

```php
'#^\\/$|^\\/(?:[^\\/]+\\/)*[^\\/]*$#'
```

### VARIABLE_REGEX

Type `string`

```php
'\\{
    \\s* ([a-zA-Z_][a-zA-Z0-9_-]*) \\s*
    (?:
        : \\s* ([^{}]*(?:\\{(?-1)\\}[^{}]*)*)
    )?
\\}'
```

### DEFAULT_DISPATCH_REGEX

Type `string`

```php
'[^/]+'
```

## Methods

### parse

::: warning Parameters
- *route*: 
:::

::: tip Return
void
:::

---
