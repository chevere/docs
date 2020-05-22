# Immutability
- [Immutability](#immutability)
  - [Introduction](#introduction)
    - [Mutables vs Immutables](#mutables-vs-immutables)
  - [State](#state)
  - [Language considerations](#language-considerations)
  - [Conventions](#conventions)
    - [Method naming](#method-naming)
  - [Implementing](#implementing)
    - [Cloning (shallow copy)](#cloning-shallow-copy)
    - [Deep copy](#deep-copy)
      - [Passing objects](#passing-objects)
      - [Accesing objects](#accesing-objects)
## Introduction

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

> 👍 Immutables will always provide more thread safety

## State

The immutability concept is all about dealing with the object state, which
is the characteristic values of a given object at a given time. In immutability, states are each different version of an object.

> 🧔🏾 Think about states as a snapshots of the object at different times

The way to provide immutable objects by always creating **a modified copy** of the object intended to alter.

## Language considerations

In PHP, objects are passed by reference and immutability is still on [RFC](https://wiki.php.net/rfc/immutability).

As an answer to this, Chevere implements pseudo-immutability using [cloning](#cloning) and proper immutability using [deep copy](#deep-copy).


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

### Cloning (shallow copy)

Chevere uses [object cloning](https://www.php.net/manual/en/language.oop5.cloning.php) for pseudo-immutability. It is called pseudo because it is a shallow copy.

By cloning, a new reference (id) will be associated with the shallow copy. As scalars are passed by value, cloning is enough for simple immutability.

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

In the example above, `$clone` is assigned to the new copy of `$immutable`, which has a different state and reference. 

As properties are protected/private by [convention](./conventions.md), the property `string` of `$immutable` can't be altered in public context without creating a new copy of the original object.

> 👴🏿 Classes with properties of type `object` will be immutable depending on each given `object` property


### Deep copy

Chevere uses [DeepCopy](https://github.com/myclabs/DeepCopy) to provide deep copies of objects.

> 🧙🏾 Deep copy is needed when is not possible to rely in cloning

By deep copying, a new id will be associated with a deep copy of the entire object. It should be used when passing and/or when accessing objects that change the behavior of the parent implementation.

#### Passing objects

```php
use function DeepCopy\deep_copy;

class MyImmutable implements MyImmutableInterface
{
    private ServiceInterface $service;

    public function withService(ServiceInterface $service): void
    {
        $this->service = $service;
    }

    public function service(): MyImmutableInterface
    {
        return $this->service;
    }
}

$service = new Service;
$immutable = new MyImmutable; // ref#1
$immutableService = deep_copy($service); // ref#2
$clone = $immutable->withService($immutableService);
$immutable->service(); // === as $immutableService
```

In the example above, `$immutableService` is a deep copy of `$service` with a different reference. The `service` property of `$clone` references `$immutableService` not `$service`.

#### Accesing objects

```php
use function DeepCopy\deep_copy;

class MyImmutable implements MyImmutableInterface
{
    private ServiceInterface $service;

    public function __construct(): void
    {
        $this->service = new Service;
    }

    public function readService(): MyImmutableInterface
    {
        return deep_copy($this->service);
    }
}

$immutable = new MyImmutable;
$service = $immutable->readService();
```

In the example above, `new MyImmutable` sets a `$service` property which is accessed as a deep copy using `readService` method. Any alteration on `$service` won't affect the `service` property within `$immutable`.

