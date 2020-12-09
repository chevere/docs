# Overview

In essence, Chevere is an [action](./../components/Action.md) command runner with a [pluggable](../components/Pluggable.md) layer, which takes an `$input` and `return` a result of that process. It is designed around the concept of handling instructions for *consumers* of the application, which could be _anything_ triggering the call for these instructions.

The framework is completely modular, and it can be progressively implemented in any project.

## Abstracting Instructions

By abstracting the application instructions under pluggable controller, is possible to define software artifacts that will be used to provide all the different application entry points needed. Namely, HTTP routing, workers, background processing, etc.

The goal is that the business logic remains totally yours, with a very flexible I/O layer on top of it. It will be this layer which will be susceptible to _change_.

## Modern PHP

Chevere is modern PHP software and it encourages a proper use of the language just like [PHP The Right Way](https://phptherightway.com/).

> 🧔🏾 PHP is an awesome scripting language, allowing you to express and to organize code in so many different ways that the caveats is your skill, not the tooling. Is what you pay for its flexibility.

To avoid the caveats of PHP, Chevere has its own [architecture](./../architecture/README.md) concepts, conventions and rules.

### Tech Neutral

Chevere is tech neutral and it can be rigged with Apache, Nginx, [Swoole](https://www.swoole.co.uk/), [ReactPHP](https://reactphp.org/), [RoadRunner](https://roadrunner.dev/) and more. You can use it in any project, under any framework or totally bare.

## Use Benefits

Chevere is built to provide a flexible layer, specially made for instructions that are meant to be extended. It is made to provide a pluggable layer for your applications.

There are many reasons why you should want your application to be pluggable:

* Standardize how to extend base functionality
* Encourages third-party collaboration
* Allows organic growth
* Profit from addons
* Doesn't constrain your logic, it wraps it

In other words, it helps you to build an ecosystem around your software 👏🏾.
