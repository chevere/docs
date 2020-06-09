# Overview

- [Overview](#overview)
  - [Introduction](#introduction)
  - [How it Works](#how-it-works)
    - [Abstraction](#abstraction)
    - [Portable](#portable)
    - [Console First](#console-first)
    - [Tech Neutral](#tech-neutral)

## Introduction

In essence, Chevere is a [controller](./../components/controllers.md) command runner with a [pluggable](../components/plugin.md) layer, which takes an `$input` and `return` a result. Around this simple concept it provides a modular system which can be progressively implemented by following the *use what you need* mindset.

> 🧔🏾 On a more formal definition, Chevere is a very sophisticated PHP scripting framework

Chevere sits in the I/O handling. It is designed to present and deliver instructions to *consumers* of the application. A consumer could be _anything_, like a cli command, an HTTP requests, a foreign function call, etc.

## How it Works

### Abstraction 

By abstracting the application instructions under pluggable controller, it is possible to define software artifacts that will be used to provide all the different application entry points needed. Namely, HTTP routing, workers, background processing, etc.

The goal is that the business logic remains totally yours, with a very flexible I/O layer on top of it. It will be this layer which will be susceptible to _change_.

> 🧔🏾 The notion is that controller instructions and controller running can be re-arranged to deliver any kind of system

### Portable

Chevere is designed to be portable and to easily scale horizontally. The file system is used to define the application, store the logic and cache of any given application states.

### Console First

Chevere adopts a strong culture around everything related to the console and it has been made to suit best with console based development.

> 👍🏾 You can learn more about the built-in commands at [Console](../components/console.md)

### Tech Neutral

Chevere provisioning is tech neutral and it can be rigged with Apache, Nginx, [Swoole](https://www.swoole.co.uk/), [ReactPHP](https://reactphp.org/), [RoadRunner](https://roadrunner.dev/) and more.

> 🧔🏾 There are some [recommendations](../application/recommendations.md) for provisioning applications