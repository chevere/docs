# Hooks
- [Hooks](#hooks)
  - [Introduction](#introduction)
  - [Defining Hookables](#defining-hookables)
    - [Example not-hookable](#example-not-hookable)
    - [Example hookable](#example-hookable)
    - [Defining hook anchors](#defining-hook-anchors)
    - [Using hook anchors](#using-hook-anchors)
  - [Defining Hooks](#defining-hooks)
    - [Example hook](#example-hook)
  - [Manually executing Hooks](#manually-executing-hooks)
  - [Manual Hooks registering](#manual-hooks-registering)
    - [Caching registred hooks](#caching-registred-hooks)
    - [Accesing cached registred hooks](#accesing-cached-registred-hooks)

## Introduction

Hooks are anchors in the logic where is intended to allow third-party logic to be executed. Classes defining hookable logic are known as _hookables_ and a class providing a hook logic is known as a _hook_. 

Using hooks, applications can extend in ways that no-one figured before crafting the application and ship it to real users. Any software which you can easily plug will increase its delivered value.

## Defining Hookables

Hookables are classes implementing the [HookableInterface](Chevere\Components\Hooks\Interfaces\HookableInterface).

> 👍 Chevere includes a base trait to easily provive hook-ability to any class.

### Example not-hookable

In the code below the `DoesSomething` defines a `do` method which sets the value of the `$string` property.

```php
final class DoesSomething
{
    private string $string = '';
    
    public function do(string $value): void
    {
        $this->string = 'do=' . $value; // do=value
    }
}
```

If the argument is `rodolfo` it will set the property to `do=rodolfo`. It will do the same for any `$value`.

### Example hookable

By implementing hooks on `DoesSomething`, the `do` method can now _do something extra_.

```php
<?php

declare(strict_types=1);

namespace App\Stuff;

use Chevere\Components\Hooks\HookAnchors;
use Chevere\Components\Hooks\Interfaces\HookInterface;
use Chevere\Components\Hooks\Traits\HookableTrait;

final class DoesSomething implements HookableInterface
{
    use HookableTrait;

    private string $string = '';

    public static function getHookAnchors(): HookAnchors
    {
        return (new HookAnchors)
            ->withAnchor('do:before')
            ->withAnchor('do:after');
    }
    
    public function do(string $value): void
    {
        $this->hook('do:before', $value); // value*alter
        $this->string = 'do' . $value; // do=value*alter
        $this->hook('do:after', $value); // do=value*`alter*again
    }
}
```

In the example above, `DoesSomething` is a hookable with two hook anchors which alter `$value` before and after the base logic sets the value of `$string` property.

### Defining hook anchors

The `getHookAnchors` method is used to define the hook anchors available to implement in the hookable class. Hook anchors are classes implementing the [HookAnchorsInterface]().

The code below declares hook anchors for different purposes. A hook anchor can be freely named as it suits better.

```php
(new HookAnchors)
    ->withAnchor('after@create')
    ->withAnchor('emailSent-notify')
    ->withAnchor('O550');
```

### Using hook anchors

Hookables use the `hook` method to define a hookable code entry which will run hooks (if-any).

```php
$this->hook('anchor-name', $argument);
```

The argument `$argument` is passed by reference and it can be of any type. It is intended to be susceptible to be modified by potentially unknown logic instructions.

> 👍 Chevere checks that the argument passed by reference doesn't alter its type after running any hook instruction.

Type `array` or better, type `object` can be used to provide more _context_ like services, arguments or data that you want to expose and allow to be used by hook logic.

## Defining Hooks

Hooks are classes implementing the [HookInterface](Chevere\Components\Hooks\Interfaces\HookInterface).

A hook defines the anchor where it applies, the class name which accepts to hook and the priority in which it must run. The `__invoke` method is called when executing the hook.

Hooks are designed to be short sets of instructions that should be executed without persistent memory and decoupled as possible from the application.

### Example hook

```php
<?php

declare(strict_types=1);

use App\Stuff\DoesSomething;
use Chevere\Components\Controller\Controller;
use Chevere\Components\Hooks\Interfaces\HookInterface;
use Chevere\Components\Str\Str;
use Chevere\Components\Str\StrBool;

final class TheHook implements HookInterface
{
    public function anchor(): string
    {
        return 'do:before';
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

In the example above, the `__invoke` method adds functionality by removing `lfo` if `$value` ends with it. If you pass `rodolfo` will return `rodo`.

## Manually executing Hooks

A hookable needs to be injected with a hook runner to execute the hook anchors and inject the hook logic. A hook runner is a class implementing the [HooksRunnerInterface](Chevere\Components\Hooks\Interfaces\HooksRunnerInterface) and is in charge of running the hooks queue.

A hooks queue is a class implementing the [HooksQueueInterface](Chevere\Components\Hooks\Interfaces\HooksQueueInterface) and it is a collection of registered hooks for a given hookable.

```php
<?php

use Chevere\Components\Hooks\HooksRunner;
use App\Stuff\DoesSomething;

// queue registered hooks
$queue = (new HooksQueue)
    ->withHook(new TheHook)
    ->withHook(new TheOtherHook);

// pass the queue to hookable
$hookable  = (new DoesSomething)
    ->withHooksRunner(
        new HooksRunner($queue)
    );

$argument = 'argument';
$hookable->do($argument); // $hookable->string = 'do=argument';
```

In the example above, a hooks runner is attached to the hookable. From there, executing `do` will `__invoke` on `TheHook`.

## Manual Hooks registering

A hook register is a class which implements the [HooksRegisterInterface](Chevere\Components\Hooks\Interfaces\HooksRegisterInterface).

Registering hooks refers to register and cache the known hooks available for the application. A hooks register can be built using [HooksRegister](Chevere\Components\Hooks\HooksRegister), attaching hooks to it using the `withHook` method.

```php
$hooksRegister = (new HooksRegister)
    ->withHook(new TheHook);
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
$hookableName = 'App\Stuff\DoesSomething';
$hooksQueue = $hooks->getQueue($hookableName);
$hookable  = (new $hookable)
    ->withHooksRunner(
        new HooksRunner($queue)
    );
$hookable->do($argument);
```

