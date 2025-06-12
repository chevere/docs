# Interfaces spec

Interfaces describe the public methods implemented by a given class. In Chevere, all components **must** define their own interface.

## Conventions

Interfaces **must**:

* Define a descriptive name
* Be named with the `Interface` suffix
* Be located in the `Chevere/<component>/Interfaces` namespace

## Design

### Uniqueness

Each interface should describe a unique public procedure that **may** be implemented by one or several classes.

### Typing

Parameters and return types **must** be typed against a scalar or an interface.

> Parameters and return types **should not** be typed against concrete implementations.

### Method naming

#### Accessors

Accessors refer to methods that **access** an object property.

Accessors **must be nouns** and named as the property they retrieve. For example, the method `something` should be used to retrieve the value of `$this->something`.

```php
public function something(): string;
```

> Accessors = nouns

#### Actions

Actions refer to when the object must **do something**. These actions could return _anything_ or just `void`.

A verb **should** be prefixed for any given action. For example, `getSome`, `setValue`, or `doStuff`.

> Actions = verbs

In the example below, we do the evolution.

```php
public function doTheEvolution(): void;
```

#### Immutables

Refer to [Immutability Standard](../standard/immutability.md).

Immutables refer to methods that **return an altered copy** of the original object.

The `with` prefix **should** be used in immutable methods. For example, `withSomething`, `withoutSomething`, `withAddedStuff`, `withRemovedStuff`, etc.

> Immutables = with*

#### Conditionals

Conditionals refer to methods that **return a boolean**, usually for object flagging.

Either `is` or `has` prefixes **must** be used in methods returning `bool`.
