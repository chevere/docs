# Interfaces Spec

Interfaces describe the public methods implemented by a given class. In Chevere, all components **must** define their own interface.

## Conventions

Interfaces **must**:

* Define a descriptive name
* Named with `Interface` suffix
* Located at `Chevere/<component>/Interfaces` namespace

## Design

### Uniqueness

Each interface should describe a unique public procedure that **may** be implemented by one or several classes.

### Typing

Parameters and return types **must** be typed against an scalar or an interface.

> Parameters and return types **should not** be typed against concrete implementations

### Method naming

#### Accessors

Accessors refers to methods that **access to** an object property.

Accessors **must be nouns** and named as the name of the property it retrieves. For example, the method `something` should be used to retrieve the value of `$this->something`.

```php
public function something(): string;
```

> Accessors = nouns

#### Actions

Actions refers to when the object must **do something**. These actions could return _anything_ or just `void`.

A verb **should** be prefixed for any given action. For example, `getSome`, `setValue` or `doStuff`.

> Actions = verbs

In the example below, we do the evolution.

```php
public function doTheEvolution(): void;
```

#### Immutables

Refer to [Immutability](./immutability.md).

Immutables refers to methods that **returns an altered copy** of the original object.

The `with` prefix is associated with immutables. For example, `withSomething`, `withoutSomething`, `withAddedStuff`, `withRemovedStuff`, etc.

> Immutables = with*

#### Conditionals

Conditionals refers to methods that **returns boolean**, usually for object flagging.

The `is` prefix is used in methods returning `bool`.
