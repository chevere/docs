# Message

The [Message](../reference/Chevere/Components/Message/Message.md) component allows to create messages with rich formatting support for console, HTML and plain text.

## Creating a Message

A Message is created by passing a Message template. In the code below a new Message is created with `Hello, %to%!`.

```php
use Chevere\Message\Message;

$message = new Message(template: 'Hello, %to%!');
```

## Replacing sub-strings

The `strtr` method allows to prepare sub-string replacement without formatting.

```php
$message = $message
    ->strtr(
        search: '%to%',
        replace: 'Rodolfo'
    ); // Hello, Rodolfo!
```

## Formatting

A Message can be formatted using methods that take a `$search` needle and replace it with `$replace` prepared with the desired formatting.

```php
$message = new Message(template: '$0 $1 "%say" [**output**]');
```

### Emphasis

The `emphasis` method allows to prepare sub-string replacement with emphasis.

```php
$message = $message
    ->emphasis(
        search: '$0',
        replace: 'ERROR'
    )
```

### Strong

The `strong` method allows to prepare sub-string replacement with strong.

```php
$message = $message
    ->strong(
        search: '$1',
        replace: '/where-it-happened.php'
    )
```

### Underline

The `underline` method allows to prepare sub-string replacement with underline.

```php
$message = $message
    ->underline(
        search: '%say',
        replace: 'Por la cresta!'
    )
```

### Code

The `code` method allows to prepare sub-string replacement with code.

```php
$message = $message
    ->code(
        search: '**output**',
        replace: 'WhatChuchaHappen'
    );
```

## Outputting

Formatting for the Message template is implemented on outputting. The resulting output strings vary depending on the target device.

### To Console

The `toConsole` method returns a console highlighted string.

```php
$message->toConsole();
```

The console output is raw ASCII string which looks like the example below.

> <em>ERROR</em> <strong>/where-it-happened.php</strong> <u>"Por la cresta!"</u> <code>[WhatChuchaHappen]</code>

### To HTML

The `toHtml` method returns a HTML highlighted string.

```php
$message->toHtml();
```

```html
<em>ERROR</em> <strong>/where-it-happened.php</strong> <u>"Por la cresta!"</u> <code>[WhatChuchaHappen]</code>
```

### To string

The `toString` method returns a plain string, no formatting.

```php
$message->toString();
```

```txt
ERROR /where-it-happened.php "Por la cresta!" [WhatChuchaHappen]
```
