# Examples Repository

A hands-on self introduction to Chevere with example scripts.

The repository at [chevere/examples](https://github.com/chevere/examples) holds a variety of working examples that will help you to learn how to use Chevere.

> 👍🏾 Feel free to [contribute](#contributing) to this repository

## Installing

### Requirements

* [git](https://git-scm.com/)
* [Composer](https://getcomposer.org/)

Clone the repository in `examples/`.

```sh
git clone git@github.com:chevere/examples.git
```

Install dependencies at `vendor/`.

```sh
composer install --ignore-platform-reqs
```

## Browsing

Each folder represents an example topic, like [00.HelloWorld/](https://github.com/chevere/examples/tree/main/00.HelloWorld) for "Hello, World" or [02.VarDump/](https://github.com/chevere/examples/tree/main/02.VarDump) for [VarDump component](../components/VarDump.md).

> 👴🏾 All files and folders use a numeric index representing levels of complexity

## Running

```sh
php pathToScript
```

To run the ubiquitous "Hello, World":

```sh
php 00.HelloWorld/00.controller.php 
```

## Recommendations

* Use an IDE for code and reference highlighting
* Check the [components](../reference/components.md), [interfaces](../reference/interfaces.md) and [exceptions](../reference/exceptions.md) reference
* Check at [Chevere\Tests](https://github.com/chevere/chevere/tree/main/tests) namespace which contains [testing](../architecture/standard/testing.md) on everything

## Contributing

The examples repo is a playground, everything concerning potential uses is welcome.

Feel free to [suggests](https://github.com/chevere/examples/issues/new/choose) examples that should be added or to [share](https://github.com/chevere/examples/compare) your own.

> 🧔🏾 Try to think about Chevere as butter, you want it (mostly) everywhere
