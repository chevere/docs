# Message

The Message component allows to create messages with rich formatting support for console, HTML and plain text.

## Creating a Message

A Message is created by passing a Message template. In the code below a new Message is created with `Hello, %to%!`.

```php
use Chevere\Message\Message;
use function Chevere\Message\message;

$message = new Message('Hello, %to%!');
// It can be also created with:
$message = message('Hello, %to%!');
```

## Replacing sub-strings

The `strtr` method allows to prepare sub-string replacement without formatting.

```php
$message = $message
    ->strtr('%to%', 'Rodolfo'); // Hello, Rodolfo!
```

## Formatting

A Message is formatted using methods that take `$search` needle and replace it with `$replace` strings.

### Emphasis

The `emphasis` method allows to prepare sub-string replacement with emphasis.

```php
$message = $message
    ->emphasis('%to%', 'Rodolfo') // Hello, <em>Rodolfo</em>!
```

### Strong

The `strong` method allows to prepare sub-string replacement with strong.

```php
$message = $message
    ->strong('%to%', 'Rodolfo') // Hello, <strong>Rodolfo</strong>!
```

### Underline

The `underline` method allows to prepare sub-string replacement with underline.

```php
$message = $message
    ->underline('%to%', 'Rodolfo') // Hello, <underline>Rodolfo</underline>!
```

### Code

The `code` method allows to prepare sub-string replacement with code.

```php
$message = $message
    ->code('%to%', 'Rodolfo') // Hello, <code>Rodolfo</code>!
```

## Outputting

Formatting for the Message template is implemented on outputting. The resulting output strings vary depending on the target device.

### To Console

The `toConsole` method returns a console highlighted string.

```php
$message->toConsole();
```

The console output is raw ASCII string, with color when supported.

### To HTML

The `toHtml` method returns a HTML highlighted string.

```php
$message->toHtml();
```

### To string

The `__toString` method returns a plain string, no formatting.

```php
$message->__toString();
```
