# Testing

[Software testing](https://en.wikipedia.org/wiki/Software_testing) is the activity of checking software quality under a test. It is carried to ensure that the software system is free of errors. It helps to detect bugs, errors, missing requirements, etc.

Testing is all about make sure that the software behave as expected. That the software will always _responds_ in a predictable way every time.

> 👍🏾 Chevere tests are located at [Chevere\Tests](https://github.com/chevere/chevere/tree/master/Tests) namespace

## Testing Framework

Tests should be always compatible with the latest [PHPUnit](https://phpunit.de/) production release. Code coverage requires to install [pcov](https://github.com/krakjoe/pcov).

## Requirements

* [Integration testing](https://en.wikipedia.org/wiki/Integration_testing) is **required**
* All components **must** be covered

## Conventions

* Must be named with `Test` suffix
* Must be located at `Tests/<component>/`
