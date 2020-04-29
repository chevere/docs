# Hooks
- [Hooks](#hooks)
  - [Introduction](#introduction)
  - [Defining Hookables](#defining-hookables)
    - [Using hook anchors](#using-hook-anchors)
  - [Defining Hooks](#defining-hooks)
  - [Registering Hooks](#registering-hooks)
  - [Running Hooks on Hookables](#running-hooks-on-hookables)

## Introduction

Hooks refer to the concept of designate anchors in the logic where is intended to allow third-party logic to be executed. Classes defining hookable logic are known as _hookables_ and a classe providing this hook logic is known as a _hook_. 

Chevere includes both hook registering and managing, making applications to be freely extended with ease.

## Defining Hookables

A hookable is a class implementing the  [HookableInterface](Chevere\Components\Hooks\Interfaces\HookableInterface). 

In the code below the the `do` method sets the value of `$string` property. If the argument is `rodolfo` it will set the property to `do=rodolfo`.

```php
final class DoesSomething
{
    protected string $string = '';
    
    public function do(string $value): void
    {
        $this->string = 'do=' . $value; // do=value
    }
}
```

By implementing the HookableInterface the `DoesSomething` class can now _do something extra_.

> 👍 Chevere includes a base trait to easily provive hook-ability to any class.

```php
final class DoesSomething implements HookableInterface
{
    use HookableTrait;

    protected string $string = '';

    public static function getHookAnchors(): HookAnchors
    {
        return (new HookAnchors)
            ->withAnchor('do:before')
            ->withAnchor('do:after');
    }
    
    public function do(string $value): void
    {
        $this->string = $value; // value
        $this->hook('do:before'); // value*alter
        $this->string = 'do' . $this->string; // do=value*alter
        $this->hook('do:after'); // do=value*altered*again
    }
}
```

### Using hook anchors

The `getHookAnchors` method is used to define the hook anchors available to implement in the hookable class.

The `hook($anchor)` method calls designate the hookable entries, you can anchor anywhere, and you can name anchors freely.

## Defining Hooks

A hook is a class implementing the [HookInterface](Chevere\Components\Hooks\Interfaces\HookInterface).

A hook defines the anchor where it applies, the class name which accepts to hook and the priority in which it must run. The `__invoke` method is called when executing the hook.

```php
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

    public function __invoke(object $hookable): object
    {
        $string = $hookable->string(); // rodolfo
        $string = (new Str($string))->replaceLast('lfo', '')->toString(); // chop lfo
        $hookable->string = $string; // rodo

        return $hookable;
    }
}
```

Passing the argument `rodolfo` will return `do=rodo`. The `__invoke` mthod adds the functionality of removing `lfo` from `rodolfo` so the resulting value is `rodo`.

## Registering Hooks

## Running Hooks on Hookables