# Exceptions Spec

Exceptions are error events that happens on runtime, that disrupts the execution of the software.

## Conventions

Interfaces **must**:

* Define a descriptive name
* Named with `Exception` suffix
* Extend `Chevere\Throwable\Exception`
* Located at `Chevere/<component>/Exceptions` namespace

## Design

### Uniqueness

Each different error event **should** have its own unique exception.

### Descriptive

Use names that explain the context of the exception. For example, `SomeException` is less descriptive than `RoutingBadRouteException`.

## Throwing Exceptions

### Exception Message

A [Message](../../library/message.md) **should** explain the error event when needed.

Exception messages **must**:

* Describe the error
* Indicate the conflict element

Exception messages **should not**:

* Provide *hints* in how-to deal with the error

### Previous Exception

Passing previous exception **should** be preferred and wrapping **should** be avoided.
