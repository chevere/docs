# Testing Standard

## Testing Software

* Tests should be compatible with the latest [PHPUnit](https://phpunit.de/) production release.\
* Code coverage requires to install [pcov](https://github.com/krakjoe/pcov).

## Requirements

* All components **must** be tested and covered

## Conventions

* Must be named with `Test` suffix
* Must be located at `Tests/<component>/`

## Configuration

* Configuration for PHPUnit can be found at [phpunit.xml](https://github.com/chevere/chevere/blob/main/phpunit.xml).
* Use configuration at [phpunit-report.xml](https://github.com/chevere/chevere/blob/main/phpunit-report.xml) for testing with code coverage.

## Running tests

To run tests:

```shell
vendor/bin/phpunit -c phpunit.xml
```

To run tests with code coverage report at `./build/coverage/`:

```shell
vendor/bin/phpunit -c phpunit-report.xml
```

::: tip
Check [PHPUnit Documentation](https://phpunit.de/documentation.html) for all available options.
:::
