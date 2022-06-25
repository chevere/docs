# Immutability Standard

Immutability in Chevere is the concept of that an object once created cannot be modified throughout the lifetime of the object. An immutable object can't change.

Although [PHP doesn't support immutability](https://wiki.php.net/rfc/immutability), Chevere uses cloning and DeepCopy to provide pseudo-immutability, which for our use case achieves the same result as the real thing.

## PHP objects

In PHP objects are passed by reference. For the code below, `$mutable` is a reference for the object id `#12345`.

```php
$mutable = new stdClass; // id: #12345
```

In code below, `$mutable` changes from its original state and its reference (object id) is the same as the previous state `#12345`.

```php
$mutable->prop = 'value'; // id: #12345
```

### Mutables aren't safe

The problem with mutable objects is that the state of `$mutable` is unknown for other code logic interacting with it. For other code units is not safe to rely in `$mutable`.

In the code below, `$mutable` is passed to `Service` as a dependency.

```php
$service = new Service($mutable);
$mutable->prop = 'altered-value';
```

As `$mutable` can change, `Service` must account the responsibility of observing `$mutable` states, making your code more expensive.

## State

For our realm the immutability concept is all about dealing with object states, which
is the characteristic values of a given object at a given time. States are each different version of an object.

Think about states as an object snapshots at different times rather than one version object.

```php
$immutable = new SomeImmutable; // id: #1313
$immutableCopy = $immutable
    ->withProp('altered-value'); // id: #1314
```

For the code above, `$immutableCopy` is an altered copy (another state) of `$immutable`. Objects have different ids, they are safe for other code units.

## Conventions

Immutable in Chevere refers to objects in which altering methods **returns an altered clone/copy** of the original object.

### Method naming

#### withX

The `with` prefix **must** be used in methods that provide another object state.

In the example below, the `withString` method sets the value of `$this->string`.

```php
function withString(string $string): MyInterface;
```

##### withoutX

The `without` prefix **must** be used in methods that remove something from the object.

In the example below, the `withoutString` method unset `$this->string`.

```php
function withoutString(): MyInterface
```

## Implementing

### Cloning

Chevere uses [object cloning](https://www.php.net/oop5.cloning) for pseudo-immutability. It is called that way because `clone` creates a shallow copy.

💡 Using `clone` doesn't work all the time as it doesn't account for nested object properties. For these cases we recommend doing [DeepCopy](#deepcopy).

In the next example, `$clone` is assigned to the new cloned copy of `$immutable`, which has a different state and reference (object id).

```php
class MyImmutable
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

As properties are protected/private by [convention](../spec/components.md#conventions), the property `$string` of `$immutable` can't be altered in public context without creating a new copy of the original object, which implies a new reference thus immutability.

### DeepCopy

Chevere uses [DeepCopy](https://github.com/myclabs/DeepCopy) to provide deep copies of objects, which is needed when is not possible to rely in cloning for immutability.

In next example, `map` method provides public access to a deep copy of `$map`. This enables `MyImmutable` to effectively provide read-only public access to `$map`.

```php
use function DeepCopy\deep_copy;
use Ds\Map;

class MyImmutable
{
    private Map $map;

    public function __construct()
    {
        $this->map = new Map;
    }

    public function map(): Map
    {
        return deep_copy($this->map);
    }
}
```

For the example above, any manipulation on the return of `map` it won't affect the original object.
