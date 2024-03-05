# Message

![Message](/src/packages/message-logo.svg)

## Summary

Message enables to create strings with template tags support.

## Installing

Message is available through [Packagist](https://packagist.org/packages/chevere/message) and the repository source is at [chevere/message](https://github.com/chevere/message).

```sh
composer require chevere/message
```

## Creating a Message

Use function `message` to create a Message by passing the message template. Use named named arguments to define replacement pairs.

Supported tags:

* <code v-pre>%tag%</code>
* <code v-pre>{{tag}}</code>
* <code v-pre>{{ tag }}</code>

```php
use function Chevere\Message\message;

$message = message(
    'Hello, %tag%!',
    tag: 'World'
);
```

## To string

The `__toString` method return the message with translated placeholders.

```php
$message->__toString();
// Hello, World!
```

## Utility methods

### Template

Use `template` method to return the message template.

```php
$message->template();
// Hello, %tag%!
```

### Replacements

Use `replacements` method to read message replacement pairs.

```php
$message->replacements();
// ['tag' => 'World']
```
