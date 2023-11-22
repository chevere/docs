# Message

Namespace `Chevere\Message`

The Message component allows to create markdown messages with template support.

## Creating a Message

Use function `message` to create a Message. In the code below a new Message is created with `Hello, **%tag%**!`, using named arguments you define the replacement pairs.

```php
use function Chevere\Message\message;

$message = message(
    'Hello, **%tag%**!',
    tag: 'World'
);
// Hello, **World**!
```

🪄 Message supports `%tag%`, `{{tag}}` and `{{ tag }}`.

## To string

The `__toString` method return the message with translated placeholders.

```php
$message->__toString();
```
