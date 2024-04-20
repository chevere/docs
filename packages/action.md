# Action

## Summary

This software provides an object oriented convention around [Parameter](https://chevere.org/packages/parameter).

## Installing

Action is available through [Packagist](https://packagist.org/packages/chevere/action) and the repository source is at [chevere/action](https://github.com/chevere/action).

```sh
composer require chevere/action
```

## Quick start

Implement ActionInterface by using the [Action trait](#use-actiontrait) or by extending [Action abstract](#extend-action).

## Creating actions

### Use ActionTrait

Create an action by using ActionTrait.

```php
use Chevere\Action\Interfaces\ActionInterface;
use Chevere\Action\Traits\ActionTrait;

class MyAction implements ActionInterface
{
    use ActionTrait;
    // ...
}
```

### Extend Action

Create an Action by extending Action.

```php
use Chevere\Action\Action;

class MyAction extends Action
{
    // ...
}
```

## Main method

Use the `main` method to determine your action's main logic. Use **attributes** from [chevere/parameter](https://github.com/chevere/parameter) on arguments and method return to add validation rules.

* Before validation rules:

```php
class MyAction
{
    protected function main(
        string $value
    ): int
    {
        return mb_strlen($value) * 5;
    }
}
```

* After validation rules:

```php
use Chevere\Action\Action;
use Chevere\Parameter\Attributes\IntAttr;
use Chevere\Parameter\Attributes\ReturnAttr;
use Chevere\Parameter\Attributes\StringAttr;

class MyAction extends Action
{
    #[ReturnAttr(
        new IntAttr(min: 0, max: 100)
    )]
    protected function main(
        #[StringAttr('/^ok/')]
        string $value
    ): int {
        return mb_strlen($value) * 5;
    }
}
```

## Using actions

Invoke action's main logic passing the arguments you would pass to `main`. Action internal runtime will validate arguments and return against all defined rules.

💡 You can toy with this by running `php demo/demo.php`

```php
$action = new MyAction();
$result = $action('ok muy bueno');
```

## Advanced use

### Return method

For validating `return` beyond the limitations of PHP's attributes you can define Action's `return()` method. In this context you can use and remix any [Parameter function](https://github.com/chevere/parameter#function-reference).

```php
use Chevere\Action\Interfaces\ParameterInterface;
use function Chevere\Parameter\string;

public static function return(): ParameterInterface
{
    return string();
}
```

You can also forward parameter resolution to a callable by using `CallableAttr`:

```php
use Chevere\Action\Attributes\CallableAttr;
use Chevere\Action\Attributes\ReturnAttr;
use function Chevere\Parameter\string;

function myCallable(): StringParameterInterface
{
    return string();
}

#[ReturnAttr(
    new CallableAttr('myCallable')
)]
protected function main(): string
{
    return 'chevere';
}
```

### Custom main method

Override Action's `mainMethod` to define a custom `main` method to use.

```php
public static function mainMethod(): string
{
    return 'altMain';
}
```

## Controller

The Controller component is a special type of Action in charge of handling incoming instructions. Its `main` method only takes parameters of type `string`.

Controller is intended to use them wired to:

* Web Servers
* CLI applications
* Application runners

### Defining a Controller

A Controller implements the `ControllerInterface`. You can extend `Controller` to quick create a compliant Controller:

```php
use Chevere\Action\Controller;

class SomeController extends Controller
{
    // ...
}
```

### Main Parameters

Parameters are defined in the `main` method but it just takes strings.

```php
public function main(
    string $pepito,
    string $paysTwice
): array
{
    // ...
}
```

## Parameter Attributes

Use `StringAttr` to validate string:

```php
use Chevere\Parameter\Attributes\StringAttr;

public function main(
    #[StringAttr('/^[a-z]$/')]
    string $pepito,
    #[StringAttr('/^[a-zA-Z]+$/')]
    string $paysTwice
): array
{
    // ...
}
```
