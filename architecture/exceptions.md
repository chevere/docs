# Exceptions

- [Exceptions](#exceptions)
  - [Introduction](#introduction)
  - [Design decisions](#design-decisions)
    - [Uniqueness](#uniqueness)
    - [Descriptive](#descriptive)
  - [Conventions](#conventions)
  - [Throwing exceptions](#throwing-exceptions)

## Introduction

Exceptions are events that happens on runtime, that disrupts the execution of the software. Chevere extends all [SPL exceptions](https://www.php.net/manual/en/spl.exceptions.php) with support for [Message](./../components/message.md).

> 👍🏾 Chevere exceptions are located at [Chevere\Exceptions](https://github.com/chevere/chevere/tree/master/Exceptions) namespace

## Design decisions

### Uniqueness

Each different event **should** have its own unique exception.

This is related to the [SRP](https://en.wikipedia.org/wiki/Single-responsibility_principle) in the way that each event is different, so the exception. It is encouraged to provide custom exceptions for each different event.

> 👶🏿 Is like naming your children... Don't get two kids named Braulio!

### Descriptive

The exception name **must** be descriptive as possible.

Use names that explicitly explain the context of the exception. For example, `SomeException` is less descriptive than `UserIdAlreadyTakenException`.

> 🙈 All the info needed to tell what's the event about should be in the exception name 

## Conventions

* Must be named with `Exception` suffix
* Must extend [Chevere\Exceptions\Core\Exception]()
* Must be located at `Exceptions/<component>/`

## Throwing exceptions

The exception message *must* explain the event.

Provide rich messages with plenty context for the event, like arguments, how exactly the event was triggered, paths or any additional context. It is encouraged to provide a *hint* for the developer dealing with the situation.

> 🧔🏾 Assume that you will deal with the event. Make sure to make happy your future self.

```php
<?php

use Chevere\Exceptions\Core\Exception;
use Chevere\Components\Message\Message;

thrown new Exception(
    (new Message('An error happened when opening %path% when trying to %action% for %id%))
        ->strong('%path%', '/the/path/')
        ->code('%action%', 'register')
        ->code('%id%', '123')
);