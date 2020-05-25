# Plugin

- [Plugin](#plugin)
  - [Introduction](#introduction)
  - [Defining Pluggables](#defining-pluggables)
    - [Example not-pluggable](#example-not-pluggable)
    - [Pluggable Events](#pluggable-events)
      - [Defining pluggable event anchors](#defining-pluggable-event-anchors)
      - [Using pluggable event anchors](#using-pluggable-event-anchors)
    - [Pluggable Hooks](#pluggable-hooks)
      - [Defining pluggable hook anchors](#defining-pluggable-hook-anchors)
      - [Using pluggable hook anchors](#using-pluggable-hook-anchors)
  - [Defining Plugs](#defining-plugs)
    - [Event Plug](#event-plug)
    - [Hook Plug](#hook-plug)

## Introduction

The Plugin component consists in a set of tools providing pluggable logic, allowing applications to be extended, by any vendor or source.

The system works with classes that define pluggable anchors and registered plugs that *plug-in* these classes.

## Defining Pluggables

Classes defining pluggable logic are known as _pluggables_. Built-in pluggables are:

- [PluggableEventsInterface](#pluggable-events) 
- [PluggableHooksInterface](#pluggable-hooks)

### Example not-pluggable

In the code below the `App\DoesSomething` class defines a `set` method which sets the value of the `$string` property.

```php
namespace App;

final class DoesSomething
{
    private string $string = '';
    
    public function set(string $value): void
    {
        $this->string = 'set=' . $value; // do=value
    }
}
```

If the argument is `rodolfo` it will set the property to `set=rodolfo`.

> 🤯 By implementing one or more pluggable interfaces, the `App\DoesSomething` class will be able to _do something extra_.

### Pluggable Events

Events are used when it is intended to broadcast that something took place. A class must implement the [PluggableEventsInterface]() to allow pluggable events.

> 👍🏾 The [PluggableEventsTrait](Chevere\Components\Plugs\Events\Traits\PluggableEventsTrait) allows to easily implement the `PluggableEventsInterface`

In the code below, implementing `PluggableEventsInterface` on `App\DoesSomething` allows to emit an event once `set` method logic was executed.

```php
<?php

declare(strict_types=1);

namespace App;

use Chevere\Interfaces\Plugin\PlugAnchorsInterface;
use Chevere\Components\Plugs\Events\Traits\PluggableEventsTrait;
use Chevere\Interfaces\Plugs\Hooks\PluggableHooksInterface;

final class DoesSomething implements PluggableEventsInterface
{
    use PluggableEventsTrait;

    private string $string = '';

    public static function getEventAnchors(): PlugAnchorsInterface
    {
        return (new PlugAnchors)
            ->withAnchor('onSet');
    }
    
    public function set(string $value): void
    {
        $this->string = 'set=' . $value;
        $this->event('onSet', new Event([]));
    }
}
```

In the example above, the class implements the pluggable event `onSet` which is emitted after the value of `$string` is set.

#### Defining pluggable event anchors

The `getEventAnchors` method is used to define the event anchors available to implement in the pluggable class.

#### Using pluggable event anchors

Pluggable events use the `event` method to emit the event which will listened by registered event listeners (if-any).

```php
$this->event('anchor-name', EventInterface $event);
```

### Pluggable Hooks

Hooks are used when it is intended to allow modification on variables.

> 👍🏾 The [PluggableHooksTrait](Chevere\Components\Plugs\Hooks\Traits\PluggableHooksTrait) allows to easily implement the `PluggableHooksInterface`

In the code below, implementing [PluggableHooksInterface]() on `App\DoesSomething` allows to alter the behavior of `set` method.

```php
<?php

declare(strict_types=1);

namespace App;

use Chevere\Interfaces\Plugin\PlugAnchorsInterface;
use Chevere\Components\Plugs\Hooks\Traits\PluggableHooksTrait;
use Chevere\Interfaces\Plugs\Hooks\PluggableHooksInterface;

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
        $this->hook('hook:before', $value); // value*alter
        $this->string = 'set=' . $value; // set=value*alter
        $this->hook('hook:after', $value); // set=value*`alter*again
    }
}
```

In the example above, `App\DoesSomething` implements pluggable hooks with two anchors which alter `$value` before and after the base logic sets the value of `$string` property.

#### Defining pluggable hook anchors

The `getHookAnchors` method is used to define the hook anchors available to implement in the pluggable class.

#### Using pluggable hook anchors

Pluggable hooks use the `hook` method to define a hookable code entry which will run hooks (if-any).

```php
$this->hook('anchor-name', $argument);
```

The argument `$argument` is passed by reference and it can be of any type. It is intended to be susceptible to be modified by potentially unknown logic instructions.

> 👍🏾 Chevere checks that the argument passed by reference doesn't alter its type after running any hook instruction.

## Defining Plugs

Plugs are classes defining extra functionality, requiring to comply with the pluggable anchor where it applies, the class name which accepts to plug and the priority in which it must run.

Built-in Plugs are:

- [EventPlugInterface](#event-plug)
- [HookPlugInterface](#hook-plug)

> 🧔🏾 Plugs are designed to be short sets of instructions that should be executed without persistent memory and decoupled as possible from the application.

### Event Plug

A Event Plug is a class implementing the [EventPlugInterface]().

In the code below, the `__invoke` triggers extra functionality if `$value` ends with `lfo`. If you pass `rodolfo` will perform extra logic.

```php
<?php

declare(strict_types=1);

namespace App;

use App\DoesSomething;
use Chevere\Components\Controller\Controller;
use Chevere\Components\Plugs\Events\Interfaces\EventPlugInterface;
use Chevere\Components\Str\Str;
use Chevere\Components\Str\StrBool;

final class DoesSomethingEventListener implements EventPlugInterface
{
    public function anchor(): string
    {
        return 'onSet'; // Matches declaration at App\DoesSomething
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

### Hook Plug

A Hook Plug is a class implementing the [HookPlugInterface]().

In the code below, the `__invoke` method adds functionality by removing `lfo` if `$value` ends with it. If you pass `rodolfo` will return `rodo`.

```php
<?php

declare(strict_types=1);

namespace App;

use App\DoesSomething;
use Chevere\Components\Controller\Controller;
use Chevere\Interfaces\Plugs\Hooks\HookPlugInterface;
use Chevere\Components\Str\Str;
use Chevere\Components\Str\StrBool;

final class DoesSomethingHookListener implements HookPlugInterface
{
    public function anchor(): string
    {
        return 'hook:before'; // Matches declaration at App\DoesSomething
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


<!-- ## Manually executing Hooks

A hookable needs to be injected with a hook runner to execute the hook anchors and inject the hook logic. A hook runner is a class implementing the [HooksRunnerInterface](Chevere\Components\Hooks\Interfaces\HooksRunnerInterface) and is in charge of running the hooks queue.

A hooks queue is a class implementing the [HooksQueueInterface](Chevere\Components\Hooks\Interfaces\HooksQueueInterface) and it is a collection of registered hooks for a given hookable.

```php
<?php

use Chevere\Components\Hooks\HooksRunner;
use App\DoesSomething;

// queue registered hooks
$queue = (new HooksQueue)
    ->withHook(new DoesSomethingHook)
    ->withHook(new TheOtherHook);

// pass the queue to hookable
$hookable  = (new DoesSomething)
    ->withHooksRunner(
        new HooksRunner($queue)
    );

$argument = 'argument';
$hookable->do($argument); // $hookable->string = 'do=argument';
```

In the example above, a hooks runner is attached to the hookable. From there, executing `do` will `__invoke` on `DoesSomethingHook`.

## Manual Hooks registering

A hook register is a class which implements the [HooksRegisterInterface](Chevere\Components\Hooks\Interfaces\HooksRegisterInterface).

Registering hooks refers to register and cache the known hooks available for the application. A hooks register can be built using [HooksRegister](Chevere\Components\Hooks\HooksRegister), attaching hooks to it using the `withHook` method.

```php
$hooksRegister = (new HooksRegister)
    ->withHook(new DoesSomethingHook);
```

### Caching registred hooks

Cache for registered hooks gets made by calling the `withHookablesClassMap` method with the target directory.

```php
$dir = new DirFromString('/hooks_cache/');
$hooksRegister = $hooksRegister
    ->withHookablesClassMap($dir);
```

The above code will create the file `/hooks_cache/hookables_classmap.php`, which maps the hookable class names to a `.php` file at `/hooks_cache/hooks-reg/<hookable class name>/hooks.php` which contains the hooks queue for the mapped hookable.

### Accesing cached registred hooks

A hooks registered is a class which implements the [HooksRegisteredInterface](Chevere\Components\Hooks\Interfaces\HooksRegisteredInterface). The [HooksRegister](Chevere\Components\Hooks\HooksRegister) allows to access to the cache generated by the hooks register.

```php
$hooksRegistered = new HooksRegistered($dir);
$hookablesMap = $hooksRegistered->hookablesMap();
```

From there, hooks can be created by passing `$hookablesMap` when creating a [Hooks](Chevere\Components\Hooks\Hooks) instance.

```php
$hooks = new Hooks($hookablesMap);
```

The hooks queue can be retrieved using the `getQueue` method. The hooks queue `$queue` is then passed to the hooks runner.

```php
$hookableName = 'App\DoesSomething';
$hooksQueue = $hooks->getQueue($hookableName);
$hookable  = (new $hookable)
    ->withHooksRunner(
        new HooksRunner($queue)
    );
$hookable->do($argument);
```
 -->
