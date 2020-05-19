# Message

## Introduction

The Message class is in charge of providing a common message standard for system messages. A Message is a class implementing [MessageInterface](Chevere\Interfaces\Message\MessageInterface).

Message provide rich formatting support and output for console, HTML and plain text.

### Creating the Message

A Message is created by passing a message template. In the code below a Message is created with `Hello, %to%!`.

> 👍 A message template can be any string.

```php
use Chevere\Components\Message\Message;

$message = new Message('Hello, %to%!');
```

### Replacing Sub-strings

The `replace` method allows to replace a sub-string, without formatting.

```php
$message = $message
    ->replace('%to%', 'Rodolfo'); // Hello, Rodolfo!
```

### Formatting the Message

A Message can be formatted using `emphasis`, `strong`, `underline` and `code`. These methods take a `$search` needle and replace it with `$replace`, applying the desired formatting. 

```php
$message = (new Message('$0 $1 "%say" [**output**]'))
    ->emphasis('$0', 'ERROR')
    ->strong('$1', '/where-it-happened.php')
    ->underline('%say', 'Por la cresta!')
    ->code('**output**', 'WhatChuchaHappen');
```

### Outputting the Message

#### To Console

The `toConsole` method returns a console highlighted string.

```php
$message->toConsole();
```
> 👍 The console output is raw ASCII string which looks like the example below.
> 
> <em>ERROR</em> <strong>/where-it-happened.php</strong> <u>"Por la cresta!"</u> <code>[WhatChuchaHappen]</code>

#### To HTML

The `toHtml` method returns a HTML highlighted string.

```php
$message->toHtml();
```

```html
<em>ERROR</em> <strong>/where-it-happened.php</strong> <u>"Por la cresta!"</u> <code>[WhatChuchaHappen]</code>
```

#### To string

The `toString` method returns a plain string, no formatting.

```php
$message->toString();
```

```txt
ERROR /where-it-happened.php "Por la cresta!" [WhatChuchaHappen]
```