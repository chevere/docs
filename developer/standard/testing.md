# Testing standard

## Software

* Tests should be compatible with the latest [PHPUnit](https://phpunit.de/) production release.
* For Code coverage we recommend installing [pcov](https://github.com/krakjoe/pcov).

## Requirements

* All components **must** be tested and covered.

## Conventions

* Test classes must be named with the `Test` suffix.
* Test classes must be located in the `Tests/<component>/` directory.

## Configuration

* The configuration for PHPUnit can be found at [phpunit.xml](https://github.com/chevere/chevere/blob/main/phpunit.xml).
* Use the configuration at [phpunit-report.xml](https://github.com/chevere/chevere/blob/main/phpunit-report.xml) for testing with code coverage.

## Running Tests

To run tests:

```shell
vendor/bin/phpunit -c phpunit.xml
```

To run tests with a code coverage report at `./build/coverage/`:

```shell
vendor/bin/phpunit -c phpunit-report.xml
```

::: tip
Check the [PHPUnit Documentation](https://phpunit.de/documentation.html) for all available options.
:::
