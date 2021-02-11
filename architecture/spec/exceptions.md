# Exceptions Spec

Exceptions are error events that happens on runtime, that disrupts the execution of the software.

::: tip Reference
Check thee [Exceptions Reference](./../../reference/exceptions.md) to learn about all the interfaces available.
:::

## Conventions

Interfaces **must**:

* Define a descriptive name
* Named with `Exception` suffix
* Extend `Chevere\Exceptions\Core\Exception`
* Located at `Exceptions/<component>/` namespace

## Design

### Uniqueness

Each different error event **should** have its own unique exception.

### Descriptive

Use names that explicitly explain the context of the exception. For example, `SomeException` is less descriptive than `RoutingBadRouteException`.

## Throwing Exceptions

### Exception Message

A [Message](../../components/Message.md) **should** explain the error event when needed.

Exception messages **must**:

* Clearly describe the error
* Indicate the conflict element

Exception messages **should not**:

* Provide *hints* in how-to deal with the error

### Previous Exception

Passing the previous exception **should** be preferred and wrapping a previous exception **should** be avoided.
