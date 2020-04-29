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
  - [Running Hooks on Hookables](#running-hooks-on-hookables)
  - [Registering Hooks](#registering-hooks)

## Introduction

Hooks are anchors in the logic where is intended to allow third-party logic to be executed. Classes defining hookable logic are known as _hookables_ and a class providing a hook logic is known as a _hook_. 

> 👍 Chevere includes both hook registering and managing, making applications to be extended with ease.

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
        $this->hook('do:after', $value); // do=value*alter*again
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

Hookables use `hook` method to define a hookable code entry which allows to hook anywhere on it.

```php
$this->hook('anchor', $argument);
```

The argument `$argument` is passed by reference and it can be of any type. It is intended to be susceptible to be modified by potentially unknown logic instructions.

> 👍 Chevere checks that the argument passed by reference doesn't alter its type after running any hook instruction.

Type `array` or better, type `object` can be used to provide more _context_ like services, arguments or data that you want to expose and allow to be used by hookable logic.

## Defining Hooks

Hooks are classes implementing the [HookInterface](Chevere\Components\Hooks\Interfaces\HookInterface).

A hook defines the anchor where it applies, the class name which accepts to hook and the priority in which it must run. The `__invoke` method is called when executing the hook.

Hooks are designed to be short sets of instructions that should be executed without persistent memory and decoupled as possible from the application.

### Example hook

```php
<?php

declare(strict_types=1);

use Chevere\Components\Controller\Controller;
use Chevere\Components\Hooks\Interfaces\HookInterface;
use App\Stuff\DoesSomething;

final class MyHook implements HookInterface
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
        $str = (new Str($value));
        if(!$str->endsWith('lfo')) {
            return;
        }
        $str
            ->replaceLast('lfo', '') // chop lfo
            ->toString(); // rodo
    }
}
```

In the example above, the `__invoke` method adds functionality by removing `lfo` if `$value` ends with it. If you pass `rodolfo` will return `rodo`.

## Running Hooks on Hookables



## Registering Hooks
