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

## Replacing strings

A Message can be altered by chaining methods that enable to replace sub-strings. For example:

```php
use function Chevere\Message\message;

$message = message('Hello, %to%!')
    ->withStrtr('Hell', 'H3LL')
    ->withEmphasis('%to%', 'Rodolfo');
// H3LLo, Rodolfo!
```

String replacement can be performed on anything, but we encourage using placeholders wrapped in `%`.

### Strtr

The `withStrtr` method is used for string replacement without formatting.

```php
$message = $message
    ->withStrtr('%to%', 'Rodolfo');
// Hello, Rodolfo!
```

### Emphasis

The `withEmphasis` method is used for string replacement with emphasis.

```php
$message = $message
    ->withEmphasis('%to%', 'Rodolfo')
// Hello, <em>Rodolfo</em>!
```

### Strong

The `withStrong` method is used for string replacement with strong.

```php
$message = $message
    ->withStrong('%to%', 'Rodolfo')
// Hello, <strong>Rodolfo</strong>!
```

### Underline

The `withUnderline` method is used for string replacement with underline.

```php
$message = $message
    ->withUnderline('%to%', 'Rodolfo')
// Hello, <underline>Rodolfo</underline>!
```

### Code

The `withCode` method is used for string replacement with code.

```php
$message = $message
    ->withCode('%to%', 'Rodolfo')
// Hello, <code>Rodolfo</code>!
```

## Output

The resulting output strings vary depending on the target device.

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
