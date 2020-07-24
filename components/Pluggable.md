# Pluggable

The Plugin component consists in a set of tools providing pluggable logic, allowing applications to be extended, by any vendor or source.

The system works with classes that define pluggable anchors and registered plugs that *plug-in* these classes.

## Defining Pluggables

Classes defining pluggable logic are known as _pluggables_. Built-in pluggables are:

- [Events](#pluggable-events) 
- [Hooks](#pluggable-hooks)

### Example not-pluggable

In the code below the `App\DoesSomething` class defines a `set` method which sets the value of the `$string` property.

```php
namespace App;

final class DoesSomething
{
    private string $string = '';

    public function set(string $value): void
    {
        // set=value
        $this->string = 'set=' . $value;
    }
}
```

If the argument is `rodolfo` it will set the property to `set=rodolfo`.

> 🤯 By implementing one or more pluggable interfaces, the `App\DoesSomething` class will be able to _do something extra_.

### Pluggable Events

Events are used when it is intended to broadcast that something took place. A class must implement [PluggableEventsInterface](../reference/Chevere/Interfaces/Plugin/Plugs/EventListener/PluggableEventsInterface.md) to allow pluggable events.

> 👍🏾 `Chevere\Components\Plugs\Events\Traits\PluggableEventsTrait` allows to easily implement the `PluggableEventsInterface`

In the code below, calls to `event` method allows to emit an event once `set` method logic was executed.

```php
<?php

declare(strict_types=1);

namespace App;

use Chevere\Interfaces\Plugin\PlugAnchorsInterface;
use Chevere\Components\Plugin\Plugs\Events\Traits\PluggableEventsTrait;
use Chevere\Interfaces\Plugin\Plugs\Hooks\PluggableHooksInterface;

final class DoesSomething implements PluggableEventsInterface
{
    use PluggableEventsTrait;

    private string $string = '';

    public static function getEventAnchors(): PlugAnchorsInterface
    {
        return (new PlugAnchors)
            ->withAnchor('beforeSet')
            ->withAnchor('onSet');
    }

    public function set(string $value): void
    {
        $this->event('beforeSet', new Event([]));
        $this->string = 'set=' . $value;
        $this->event('onSet', new Event([]));
    }
}
```

In the example above, `App\DoesSomething` implements pluggable events with two anchors which emit events when _something_ happens.

The `beforeSet` event will be emitted before setting the value or the `$string` property. The `onSet` event is emitted after the value of `$string` is set.

#### Defining event anchors

The `getEventAnchors` method is used to define the event anchors available to implement in the pluggable class.

#### Using event anchors

Pluggable events use the `event` method to emit the event which will listened by registered event listeners (if-any).

```php
$this->event('anchor-name', EventInterface $event);
```

### Pluggable Hooks

Hooks are used when it is intended to allow modification on variables. A class must implement [PluggableHooksInterface](../reference/Chevere/Interfaces/Plugin/Plugs/Hooks/PluggableHooksInterface.md) to allow pluggable hooks.

> 👍🏾 The `Chevere\Components\Plugs\Hooks\Traits\` allows to easily implement the `PluggableHooksInterface`

In the code below, calls to `hook` method allows to extend the behavior of the base `set` method.

```php
<?php

declare(strict_types=1);

namespace App;

use Chevere\Interfaces\Plugin\PlugAnchorsInterface;
use Chevere\Components\Plugin\Plugs\Hooks\Traits\PluggableHooksTrait;
use Chevere\Interfaces\Plugin\Plugs\Hooks\PluggableHooksInterface;

final class DoesSomething implements PluggableHooksInterface
{
    use PluggableHooksTrait;

    private string $string = '';

    public static function getHookAnchors(): PlugAnchorsInterface
    {
        return (new PlugAnchors)
            ->withAnchor('hook:before')
            ->withAnchor('hook:after');
    }

    public function set(string $value): void
    {
        // value*alter
        $this->hook('hook:before', $value);
        // set=value*alter
        $this->string = 'set=' . $value;
        // set=value*`alter*again
        $this->hook('hook:after', $value);
    }
}
```

In the example above, `App\DoesSomething` implements pluggable hooks with two anchors which alter `$value` argument, and therefore, the value of the `$string` property.

#### Defining hook anchors

The `getHookAnchors` method is used to define the hook anchors available to implement in the pluggable class.

#### Using hook anchors

Pluggable hooks use the `hook` method to define a hookable code entry which will run hooks (if-any).

```php
$this->hook('anchor-name', $argument);
```

The argument `$argument` is passed by reference and it can be of any type. It is intended to be susceptible to be modified by potentially unknown logic instructions.

> 👍🏾 Chevere checks that the argument passed by reference doesn't alter its type after running any hook instruction.