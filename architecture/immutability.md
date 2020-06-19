# Immutability

- [Immutability](#immutability)
  - [Introduction](#introduction)
    - [Mutables vs Immutables](#mutables-vs-immutables)
  - [State](#state)
  - [Language considerations](#language-considerations)
  - [Conventions](#conventions)
    - [Method naming](#method-naming)
  - [Implementing](#implementing)
    - [Cloning](#cloning)
    - [Deep copy](#deep-copy)
      - [Passing and accessing objects](#passing-and-accessing-objects)



Immutability is the concept of that an object, once constructed, cannot be modified throughout the lifetime of the object. In other words, an immutable object can't change.

### Mutables vs Immutables

In the example below there's a `$mutable` object.

```php
$mutable = new StdClass; // created
$mutable->prop = 'value'; // changed
```

In some basic applications this behavior is desired, but long as as applications trends to become more complex, several degress of object encapsultation will be incorporated on the logic, making very troublesome to control the objects.

In the example below `$mutable` is passed to `Service`.

```php
$service = new Service($mutable);
$mutable->prop = 'altered-value';
```

As `$mutable` can change, is unknown if is safe or not to use `$service` as `Service` isn't aware of the possible changes in the `$mutable` object.

When `Service` rely in a mutable object its processes are not thread safe. Also, it delegate towards the implementation the responsibility of checking if the dependencies are safe to use or not.

An immutable version of `Service` shouldn't allow alteration and consumers of this class won't have to mind about the uncertainty of mutable objects.

> 👍🏾 Immutables will always provide more thread safety

## State

The immutability concept is all about dealing with the object state, which
is the characteristic values of a given object at a given time. In immutability, states are each different version of an object.

> 🧔🏾 Think about states as a snapshots of the object at different times

The way to provide immutable objects by always creating **a modified copy** of the object intended to alter.

## Language considerations

In PHP, objects are passed by reference and immutability is still on [RFC](https://wiki.php.net/rfc/immutability).

As an answer to this, Chevere implements using [cloning](#cloning) and proper [deep copy](#deep-copy).


## Conventions

Immutable refers to classes which methods **returns an altered copy** of the original object.

### Method naming

The `with` prefix **must** be used in methods that modify the object.

In the example below the `withString` method sets the value of `$this->string`.

```php
public function withString(string $string): MyInterface;
```

The `without` prefix **must** be used in methods that remove something from the object.

In the example below the `withoutString` method unset `$this->string`.

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

Chevere uses [object cloning](https://www.php.net/manual/en/language.oop5.cloning.php) for pseudo-immutability. It is called _pseudo_ because `clone` creates a shallow copy.

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

In the example above, `$clone` is assigned to the new cloned copy of `$immutable`, which has a different state and reference.

As properties are protected/private by [convention](./conventions.md), the property `$string` of `$immutable` can't be altered in public context without creating a new copy of the original object, which implies a new reference thus immutability.

### Deep copy

Chevere uses [DeepCopy](https://github.com/myclabs/DeepCopy) to provide deep copies of objects, which is needed when is not possible to rely in cloning for immutability.

> 👍🏾 By deep copying, a new reference will be associated with a deep copy of the entire object

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

> 🤔 Note that the use of `deep_copy` will vary depending on each given case, the above is just an example case