# Overview

- [Overview](#overview)
  - [Introduction](#introduction)
  - [Concept](#concept)
    - [Console First](#console-first)
    - [Provisioning](#provisioning)

## Introduction

In essence, Chevere is a [controller](./../components/controllers.md) command runner with a [pluggable](../components/plugin.md) layer, which takes an `$input` and `return` a result. Around this simple concept it provides a modular system which can be progressively implemented by following the *use what you need* mindset.

Chevere sits in the I/O handling. It is designed to present and deliver instructions to *consumers* of the application.

> 🧔🏾 A consumer could be _anything_, like a cli command, an HTTP requests, a foreign function call, etc.

## Concept

The concept in Chevere is to abstract the application instructions. The framework is made around the controller for providing a common progressive building block for input instructions which can be mapped to anything.

> 🧔🏾 The notion is that controller instructions can be arranged to deliver any kind of system

### Console First

Chevere adopts a strong culture around everything related to the console. It assumes the `CLI SAPI`, and it has been made to suit best with console based development.

> 🤔 In essence, Chevere is a controller command runner

While working with the console may seen a bit complicated, it is exactly the opposite and it allows faster development.

### Provisioning

Chevere is tech neutral and it can be rigged with Apache, Nginx, [Swoole](https://www.swoole.co.uk/), [ReactPHP](https://reactphp.org/), [RoadRunner](https://roadrunner.dev/) and more.

> 👴🏾 There are some base recommendations for provisioning [web](../application/web.md) applications