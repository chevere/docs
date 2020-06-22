# Learn By Example

A hands-on introduction to Chevere using example scripts.

## Examples Repository

The repository [chevere/examples](https://github.com/chevere/examples) holds a variety of working examples that will help you to learn how to use Chevere.

> 👍🏾 Feel free to [contribute](#contributing) to this repository

### Installing

1. Clone the repository (requires [git](https://git-scm.com/)).

```shell
git clone git@github.com:chevere/examples.git
```

Will clone it to `examples/`

2. Build the repository dependencies (requires [composer](https://getcomposer.org/)).

```shell
composer install
```

The dependencies will be at `vendor/`.

### Browsing

Each folder represents an example topic, like [`00.HelloWorld/`](https://github.com/chevere/examples/tree/master/00.HelloWorld) for "Hello, World" or [`02.VarDump/`]() for [VarDump component](../components/VarDump.md).

> 👴🏾 All files and folders use a numeric index representing levels of complexity

### Running

```shell
php <pathToScript>
```

To run the ubiquitous "Hello, World":

```shell
php 00.HelloWorld/00.controller.php 
```

## Contributing

The examples repo is a playground, everything concerning potential uses is welcome.

Feel free to [suggests](https://github.com/chevere/examples/issues/new/choose) examples that should be added or to [share](https://github.com/chevere/examples/compare) your own.

> 🧔🏾 Try to think about Chevere as butter, you want it (mostly) everywhere