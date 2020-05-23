# Overview
- [Overview](#overview)
  - [Introduction](#introduction)
  - [Concept](#concept)
    - [Console first](#console-first)
    - [Provisioning](#provisioning)
## Introduction

In essense, Chevere is a [controller](./../components/controllers.md) command runner, with a [pluggable](../components/plugin.md) layer, which takes an `$input` and `return` a result. Around this simple concept, it builds a modular system wich can be progressively implemented by following the *use what you need* mindset.

Chevere sits in the I/O hadling, designed to present and deliver instructions to *consumers* of the application.

> 🧔🏾 A consumer is any actor requesting the application to perform an action, for example an HTTP request

## Concept

The concept is to build a framework around the controller, which provides a common progressive building block for input instructions which can be mapped to anything, like console commands, HTTP routing, workers, etc.

### Console first

Chevere adopts a strong culture around everything related to the console. It assumes the `CLI SAPI`, and it has been made to suit best with console based development.

> 🤔 In essense, Chevere is a controller command runner

While working with the console may seen a bit complicated, it is exactly the opposite and it allows faster development.

### Provisioning

Chevere is ready for everything, it can be rigged with conventional HTTP servers like Apache up to custom made application runners like [RoadRunner](https://roadrunner.dev/).

For doing web, we recommend the culture of taking responsibility on the server software required by the application. It is encouraged that applications are provisioned in companion with the server.

> 👴🏾 You don't want to deal with the universe of server setups out there

Fortunately, this is dead easy with [Docker](https://www.docker.com/).