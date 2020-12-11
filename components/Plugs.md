# Plugs

Plugs are classes defining extra functionality, requiring to comply with the pluggable anchor where it applies, the class name which accepts to plug and the priority in which it must run.

> 🧔🏾 Plugs are designed to be short sets of instructions that should be executed without persistent memory and decoupled as possible from the application.

## Event

An Event Listener implements [EventListenerInterface](../reference/Chevere/Interfaces/Plugin/Plugs/EventListener/EventListenerInterface.md) and is a type of plug that fires when something took place.

::: tip Learn by Examples
Check the Event [example](https://github.com/chevere/examples/tree/master/00.HelloWorld#03eventphp) to learn directly playing with code.
:::

In the code below, the `__invoke` triggers extra functionality if `$value` ends with `lfo`. If you pass `rodolfo` will perform extra logic.

```php
use App\DoesSomething;
use Chevere\Components\Controller\Controller;
use Chevere\Components\Plugin\Plugs\Events\Interfaces\EventPlugInterface;
use Chevere\Components\Str\Str;
use Chevere\Components\Str\StrBool;

final class DoesSomethingEventListener implements EventPlugInterface
{
    public function anchor(): string
    {
        return 'onSet';
        // Matches declaration at App\DoesSomething
    }

    public function className(): string
    {
        return DoesSomething::class;
    }

    public function priority(): int
    {
        return 0;
    }

    public function __invoke(EventDataInterface $eventData): void
    {
        // $value=rodolfo
        if((new StrBool($event->prop))->endsWith('lfo')) {
            // Do something with $eventData
        }
    }
}
```

## Hook

A hook implements [HookInterface](../reference/Chevere/Interfaces/Plugin/Plugs/Hooks/HookInterface.md) and is a type of plug that alters a variable.

::: tip Learn by Examples
Check the Hook [example](https://github.com/chevere/examples/tree/master/00.HelloWorld#02hookphp) to learn directly playing with code.
:::

### Defining a Hook

In the code below, the `__invoke` method adds functionality by removing `lfo` if `$value` ends with it. If you pass `rodolfo` will return `rodo`.

```php
use App\DoesSomething;
use Chevere\Components\Controller\Controller;
use Chevere\Interfaces\Plugin\Plugs\Hooks\HookPlugInterface;
use Chevere\Components\Str\Str;
use Chevere\Components\Str\StrBool;

final class DoesSomethingHookListener implements HookPlugInterface
{
    public function anchor(): string
    {
        return 'hook:before';
        // Matches declaration at App\DoesSomething
    }

    public function className(): string
    {
        return DoesSomething::class;
    }

    public function priority(): int
    {
        return 0;
    }

    public function __invoke(&$value): void
    {
        // $value=rodolfo
        if(!(new StrBool($value))->endsWith('lfo')) {
            return;
        }
        $value = (new Str($value))
            ->replaceLast('lfo', '') // chop lfo
            ->toString(); // rodo
    }
}
```
