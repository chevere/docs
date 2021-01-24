# Immutability Standard

Immutability in Chevere is the concept of that an object once constructed cannot be modified throughout the lifetime of the object. In other words, an immutable object can't change.

Although [PHP doesn't support immutability](https://wiki.php.net/rfc/immutability), Chevere use [cloning](#cloning) and [DeepCopy](#deepcopy) to provide pseudo-immutability, which for our use case  achieves the same result as the real thing.

## Why?

::: tip TL;DR
Immutables provide thread safety
:::

### How PHP handle objects

In PHP objects are passed by reference. For the code below, `$mutable` is just a reference for some id, known as the object id. The variable `$mutable` is just a reference.

```php
$mutable = new stdClass; // id: #12345
```

In code below, `$mutable` mutates (changes) from its original state but the reference (object id) is exactly the same as the previous state.

```php
$mutable->prop = 'value'; // id: #12345
```

### Mutables aren't safe

The problem with lack of immutability is that the state of `$mutable` is unknown for other code interacting with it so is not safe to rely in `$mutable`.

In the code below, `$mutable` is passed to `Service` as a dependency.

```php
$service = new Service($mutable);
$mutable->prop = 'altered-value';
```

As `$mutable` can change, `Service` must take the responsibility of observing `$mutable`, making your code more expensive.

## State

The immutability concept is all about dealing with object states, which
is the characteristic values of a given object at a given time. In immutability, states are each different version of an object.

Think about states as a object snapshots at different times rather than one single object.

```php
$immutable = new SomeImmutable; // id: #1313
$immutableCopy = $immutable
    ->withProp('altered-value'); // id: #1314
```

For the code above, `$immutableCopy` is just an altered copy (another state) of `$immutable`. Objects have different ids (thread safe).

## Conventions

Immutable in Chevere refers to objects which altering methods **returns an altered clone/copy** of the original object.

### Method naming

The `with` prefix **must** be used in methods that provide another object state.

In the example below, the `withString` method sets the value of `$this->string`.

```php
public function withString(string $string): MyInterface;
```

The `without` prefix **must** be used in methods that remove something from the object.

In the example below, the `withoutString` method unset `$this->string`.

```php
public function withoutString(): MyInterface
```

The `withAdded` and `withoutAdded` prefixes **must** be used in methods working with multiple added values.

In the example below the `withAddedString` method will add `$string` at the given position while `withoutAddedString` will remove it.

```php
public function withAddedString(int $pos, string $string): MyInterface;

public function withoutAddedString(int $pos): MyInterface;
```

## Implementing

### Cloning

Chevere uses [object cloning](https://www.php.net/oop5.cloning) for pseudo-immutability. It is called that way because `clone` creates a shallow copy.

```php
class MyImmutable implements MyImmutableInterface
{
    private string $string = 'default';

    public function withString(string $string): self
    {
        $new = clone $this;
        $new->string = $string;

        return $new;
    }

    public function string(): string
    {
        return $this->string;
    }
}

$immutable = new MyImmutable; // ref#1
$clone = $immutable->withString('val'); // ref#2
$immutable->string(); // ref#1 default
$clone->string(); // ref#2 val
```

In the example above, `$clone` is assigned to the new cloned copy of `$immutable`, which has a different state and reference (object id).

As properties are protected/private by [convention](./conventions.md), the property `$string` of `$immutable` can't be altered in public context without creating a new copy of the original object, which implies a new reference thus immutability.

### DeepCopy

Chevere uses [DeepCopy](https://github.com/myclabs/DeepCopy) to provide deep copies of objects, which is needed when is not possible to rely in cloning for immutability.

#### Passing and accessing objects

The caveats of working with objects can be summarized in that exposed properties shouldn't allow the object to change.

```php
use function DeepCopy\deep_copy;
use Ds\Map;

class MyImmutable implements MyImmutableInterface
{
    private Map $map;

    private ServiceInterface $service;

    public function __construct()
    {
        $this->map = new Map;
    }

    public function __clone()
    {
        $this->map = $this->map();
    }

    public function withAddedService(ServiceInterface $service): void
    {
        $new = clone $this;
        $new->map->put($service->name(), $service);
    }

    public function map(): Map
    {
        return deep_copy($this->map);
    }
}
```

For the example above, the `map` method accessor provides a deep copy of `$map` on the fly, and any manipulation on it won't affect the original object. The `__clone` method is used to create a deep copying of `$map` property after every `clone`.
