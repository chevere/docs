# Pluggable

The `Chevere\Components\Pluggable`  namespace provides components for providing pluggable logic, allowing instructions to be easily extended.

::: tip
A class defining pluggable logic is known as _pluggable_.
:::

## Types

Two plug types are defined, both implementing [PlugTypeInterface](../reference/Chevere/Interfaces/Pluggable/PlugTypeInterface.md).

### EventPlugType

Events defined by [EventPlugType](../reference/Chevere/Components/Pluggable/Types/EventPlugType.md) with [Pluggable Events](#pluggable-events) to [Event Plug](#event-plug).

### HookPlugType

Hooks defined by [HookPlugType](../reference/Chevere/Components/Pluggable/Types/HookPlugType.md) with [Pluggable Hooks](#pluggable-hooks) to [Hook Plug](#hook-plug).

## Pluggable Events

Pluggable events are used when is intended to broadcast that something took place. A class must implement [PluggableEventsInterface](../reference/Chevere/Interfaces/Pluggable/Plug/Event/PluggableEventsInterface.md) to allow pluggable events.

::: tip
⏩ Use [PluggableEventsTrait](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Pluggable/Plug/Event/Traits/PluggableEventsTrait.php) to quickly implement `PluggableEventsInterface`
:::

### How Pluggable Events works

In the code below, calls to `event` method allows to emit an event once `set` method logic was executed.

```php
use Chevere\Interfaces\Pluggable\PluggableAnchorsInterface;
use Chevere\Components\Pluggable\Plug\Event\Traits\PluggableEventsTrait;
use Chevere\Interfaces\Pluggable\Plug\Hook\PluggableHooksInterface;

final class DoesSomething implements PluggableEventsInterface
{
    use PluggableEventsTrait;

    private string $string = '';

    public static function getEventAnchors(): PluggableAnchorsInterface
    {
        return (new PluggableAnchors)
            ->withAdded(anchor: 'beforeSet')
            ->withAdded(anchor: 'onSet');
    }

    public function set(string $value): void
    {
        $this->event(
            anchor: 'beforeSet',
            data: ['some data']
        );
        $this->string = 'set=' . $value;
        $this->event(
            anchor: 'onSet',
            data: ['some data']
        );
    }
}
```

In the example above, `App\DoesSomething` implements pluggable events with two anchors which emit events when _something_ happens:

* The `beforeSet` event will be emitted before setting the value or the `$string` property.
* The `onSet` event will be emitted after the value of `$string` is set.

### Defining event anchors

The `getEventAnchors` method is used to define event anchors available to implement in the pluggable class.

Pluggable events use the `event` method to emit the event which will listened by registered events (if-any).

```php
$this->event(anchor: 'anchor-name', data: $data);
```

## Pluggable Hooks

Hooks are used when it is intended to allow modification on variables. A class must implement [PluggableHooksInterface](../reference/Chevere/Interfaces/Pluggable/Plug/Hook/PluggableHooksInterface.md) to allow pluggable hooks.

::: tip
⏩ Use [PluggableHooksTrait](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Pluggable/Plug/Hook/Traits/PluggableHooksTrait.php) to quickly implement the `PluggableHooksInterface`
:::

### How Pluggable Hooks works

In the code below, calls to `hook` method allows to extend the behavior of the base `set` method.

```php
use Chevere\Interfaces\Pluggable\PluggableAnchorsInterface;
use Chevere\Components\Pluggable\Plug\Hook\Traits\PluggableHooksTrait;
use Chevere\Interfaces\Pluggable\Plug\Hook\PluggableHooksInterface;

final class DoesSomething implements PluggableHooksInterface
{
    use PluggableHooksTrait;

    private string $string = '';

    public static function getHookAnchors(): PluggableAnchorsInterface
    {
        return (new PluggableAnchors)
            ->withAdded(anchor: 'hook:before')
            ->withAdded(anchor: 'hook:after');
    }

    public function set(string $value): void
    {
        // value*alter
        $this->hook(
            anchor: 'hook:before',
            argument: $value
        );
        // set=value*alter
        $this->string = 'set=' . $value;
        // set=value*`alter*again
        $this->hook(
            anchor: 'hook:after',
            argument: $value
        );
    }
}
```

In the example above, `App\DoesSomething` implements pluggable hooks with two anchors which alter `$value` argument, and therefore, the value of the `$string` property.

### Defining hook anchors

The `getHookAnchors` method is used to define the hook anchors available to implement in the pluggable class.

Pluggable hooks use the `hook` method to define a hookable code entry which will run hooks (if-any).

```php
$this->hook(anchor: 'anchor-name', argument: $argument);
```

The argument `$argument` is passed by reference and it can be of any type. It is intended to be susceptible to be modified by potentially unknown logic instructions.

::: tip Type-checking
✅ Chevere checks that the argument passed by reference doesn't alter its type after running any hook instruction.
:::

## Plugin

Plugin is a class defining extra functionality, it is what a pluggable will _plug-in_ to extend its base instructions and it should be designed to be short sets of instructions that must be executed without persistent memory and decoupled as possible from the application.

### Event Plug

An Event implements [EventInterface](../reference/Chevere/Interfaces/Pluggable/Plug/Event/EventInterface.md) and is a type of plug that fires when something took place.

::: tip Learn by Example
Check the Event [example](https://github.com/chevere/examples/tree/master/00.HelloWorld#03eventphp) to learn directly playing with code.
:::

### Hook Plug

A hook implements [HookInterface](../reference/Chevere/Interfaces/Pluggable/Plug/Hook/HookInterface.md) and is a type of plug that alters a variable.

::: tip Learn by Example
Check the Hook [example](https://github.com/chevere/examples/tree/master/00.HelloWorld#02hookphp) to learn directly playing with code.
:::
