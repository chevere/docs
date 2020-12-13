# Overview

Chevere is a collection of interconnected [components](https://github.com/chevere/chevere/tree/master/src/Chevere/Components) for creating high-demand extensible server-side applications. It basically provides an [action](./../components/Action.md) runner with a [pluggable](../components/Pluggable.md) layer, which takes an `$input` and return a result for that process.

The framework is completely modular and it can be progressively implemented in any project.

## Extensible & Pluggable

It provides safe-to extend layers, specially for instructions that are meant to change due to ongoing new requirements or because third-party collaboration.

Some reasons why you should want your application to be dynamically extensible:

* Standardize how to extend base functionality
* Encourages third-party collaboration
* Allows organic growth
* Profit from addons

> 😉 Keep in mind that Chevere is PHP software, it doesn't require a compile step to alter a plugin or addon.

## Tech Neutral

It can be used under any server or application runner including Apache, Nginx, [Swoole](https://www.swoole.co.uk/), [ReactPHP](https://reactphp.org/), [RoadRunner](https://roadrunner.dev/) and more. Chevere grants you the freedom of choose the best servicing strategy based on your needs and knowledge.

Some reasons why you should want to use a Tech Neutral framework:

* Doesn't constrain your logic, it wraps it
* Not biased towards any technology
* Sane upgrade to another tech available
* Easier to scale
