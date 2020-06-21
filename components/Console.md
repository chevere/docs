# Console

The Chevere console application is designed to ease the application development process of chevere-based applications.

The console is located located at `vendor/bin/chevere` and is made on top of [php-cli](https://github.com/adhocore/php-cli).

### Command Help

All commands contains a description and use cases. Try running the command below to get more information of each available command.

```shell
vendor/bin/chevere <command> --help
```

> 👴🏾 Command help includes a description, arguments, options and example use cases.


### Interactive Modes

Some commands include interactive modes, which prompt the user in order to build an instruction. The prompts are generated using code reflection and it aims to leverage the workflow of human-made tasks.

## Controller

### `controller:make`

⚡`cM` Makes a controller.

### `controller:make-interactive`

⚡`cMi` Makes a controller, interactive mode.

### `controller:list`

⚡`cL` List controllers implementing the [ControllerInterface]().

### `controller:inspect`

⚡`cI` Returns information about the given controller.

### `controller:run`

⚡`cR` Runs the given controller.

## Route

### `route:make`

⚡`rP` Makes a route endpoint.

### `route:enable`

⚡`rE` Enables the given route endpoints.

### `route:disable`

⚡`rD` Disables the given route endpoints.

### `route:enable-all`

⚡`rEa` Enables all route endpoints.

### `route:disable-all`

⚡`rDa` Disables all route endpoints.

### `route:status`

⚡`rS` Shows the status of the given route endpoint.

### `route:list`

⚡`rL` List routes.

## HTTP

### `http:make`

⚡`hM` Generates HTTP routing.

### `http:view`

⚡`hO` Shows an overview of generated HTTP routing.

### `http:for`

⚡`hF` Shows HTTP routing for the given path URI.

## Plugin

### `plugin:make`

⚡`pM` Makes a plugin for the given pluggable.

### `plugin:make-interactive`

⚡`pMi` Makes a plugin for the given pluggable, interactive mode.

### `plugin:run`

⚡`pR` Runs the given plugin. 

### `plugin:enable`

⚡`pE` Enables the specified plugins.

### `plugin:disable`

⚡`pD` Disables the specified plugins.

### `plugin:enable-all`

⚡`pEa` Enables all plugins.

### `plugin:disable-all`

⚡`pDa` Disables all plugins.

### `plugin:list`

⚡`pL` List plugins implementing the [PluggableInterface]() at the given directory.

## State

### `state:make`
### `state:make-interactive`
### `state:list`
### `state:inspect`
### `state:run`
