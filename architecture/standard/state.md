# State Standard

An [application state](https://en.wikipedia.org/wiki/State_(computer_science)) refers to an application with all the config, variables, objects and so forth previously stored.

Chevere is designed to provide systems that will load an already made application state and performs _n_ tasks under this context. The application state is made to be re-used, allowing to re-run (or loop) the application without the expensive bootstrapping required to build the state from scratch.

## States in Chevere

Conventional PHP applications usually rely in just one big application state. For example, an `index.php` [entry point](https://en.wikipedia.org/wiki/Entry_point) serving under an HTTP web server all the incoming requests.

In Chevere we do the opposite, building **many** different application entry points for _n_ application states where each state is optimized for it single given task.

::: tip
🧔🏾 Is all about loading only what you need at runtime and to have states that we can re-run in the event loop.
:::

Thanks to this, a Chevere application may have one state for public HTTP traffic, another state for background processing, another for logged users, etc. Each state is built around the same business, it just changes how it will be used and where it will run.

## Working with States

### Conventions

The following conventions applies:

* **must** exists isolated in its own unique folder at `states/`
* **must** provide a `load.php` file (loads the state)
* **must** provide a `make.php` file (makes the state)

The example belows shows hows a `./states` tree looks like. Both `web` and `api` are application states.

```shell
./states
├── web
│   ├── cache/
│   ├── load.php
│   ├── make.php
└── api
    ├── named-cache/
    ├── load.php
    └── make.php
```

## Learn By Example

The example at [03.Http/00.router-make.php](https://github.com/chevere/examples/blob/master/03.Http/00.router-make.php) creates an state at [03.Http/cache](https://github.com/chevere/examples/tree/master/03.Http/cache), which is used by all the other examples in that scope.

> 🧔🏾 The same state is used to showcase HTTP resolving, Swoole and RoadRunner examples