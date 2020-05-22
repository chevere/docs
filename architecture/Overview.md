# Overview
- [Overview](#overview)
  - [Introduction](#introduction)
  - [Concept](#concept)
    - [Unopinionated](#unopinionated)
    - [Plugins](#plugins)
    - [Provisioning](#provisioning)
    - [Console first](#console-first)
## Introduction

Chevere aims to ease the process of creating, mantaining and extending any type of pluggable application. It is designed to be in essense, a controller command runner, which take an `$input` and `return` a result.

That's it. No kernel, no application bootstraping, no state of the application.

Chevere goes deeper in the abstraction layer as it sits in the I/O hadling. It is designed to present and deliver instructions to *consumers* of your application.

> 🧔🏾 A consumer is any actor which runs the instructions

## Concept

Instructions for input handling are defined using [Controllers](./../components/controllers.md), which provides all the application consumer actions and can be mapped to anything like console commands, HTTP routing,  workers, etc.

The concept in Chevere is to build a framework around the controller runner, with the intention of providing a common progressive building block for input instructions.

### Unopinionated

Chevere is completely modular and it can be progressively implemented by following the *use what you need* mindset. In fact, it is encouraged that your application implements its own opinions.

> 👍🏾 Chevere doesn't frame on how to rig your application

Chevere provides some recommendations for the most common application use cases, but our culture is that every program execution should be optimal.

Chevere doesn't stick to any concrete application model.

### Plugins

The pluggable layer is provided by the [plugin](../components/plugin.md) component. This allows additional instructions to enhance the application default functionality.

Plugins can be used anywhere. It follows the same building block concept coined by controllers.

### Provisioning

Chevere has been made to be able to be rigged to everything, from conventional HTTP servers like Apache up to custom made application runners like [RoadRunner](https://roadrunner.dev/).

> 👴🏾 It is encouraged that applications should deliver their own custom made server stack, is just ridiculous to deal with the universe of different server setups out there

We can't recommend enough the culture of taking responsibility on the server software required for the application. Please, do provide a server in which you can trust its functionality.

### Console first

Chevere encourages a strong culture around everything related to the console. To start, it assumes the `CLI SAPI`.

Chevere suits perfect for development of console applications, it also encurages the use of the console in on-going development.

