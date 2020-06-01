# Console

- [Console](#console)
  - [Introduction](#introduction)
    - [Command Help](#command-help)
  - [Controller](#controller)
    - [`coninspect`](#coninspect)
    - [`conlist`](#conlist)
    - [`conrun`](#conrun)
  - [Routing](#routing)
    - [`routeput`](#routeput)
    - [`routeen`](#routeen)
    - [`routedis`](#routedis)
    - [`routermake`](#routermake)
  - [Plugin](#plugin)
    - [`pluginen`](#pluginen)
    - [`plugindis`](#plugindis)
    - [`pluginlist`](#pluginlist)
  - [HTTP](#http)
    - [`httprequest`](#httprequest)

## Introduction

The Chevere console provides access to tools and commands designed to ease the application development process.

It is located located at `vendor/bin/chevere` and is built on top of [php-cli](https://github.com/adhocore/php-cli).

```bash
vendor/bin/chevere --help
```

> 🧐 The above assumes CWD at application root

### Command Help

All commands contains a description and use cases. Try running:

```bash
vendor/bin/chevere <command> --help
```

From your terminal to get more information of any available commands in this page.

## Controller

### `coninspect`

Returns information about the given controller.

### `conlist`

List controllers implementing the [ControllerInterface]() at the given directory.

### `conrun`

Runs the given controller.

## Routing

### `routeput`

Puts a route endpoint at the given directory.

### `routeen`

Enavbles the specified route endpoint.

### `routedis`

Disables the specified route endpoint.

### `routermake`

Generates HTTP routing at the given directory for the target route directory.

## Plugin

### `pluginen`
### `plugindis`
### `pluginlist`

## HTTP

### `httprequest`

Mimic an HTTP request.
