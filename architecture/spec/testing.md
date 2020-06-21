# Testing

[Software testing](https://en.wikipedia.org/wiki/Software_testing) is the activity of checking software quality under a test. It is carried to ensure that the software system is free of errors. It helps to detect bugs, errors, missing requirements, etc.

Testing is all about make sure that the software behave as expected. That the software will always _responds_ in a predictable way every time.

> 👍🏾 Chevere tests are located at [Chevere\Tests](https://github.com/chevere/chevere/tree/master/Tests) namespace

## Design decisions

### Testing Framework

Tests should be always compatible with the latest [PHPUnit](https://phpunit.de/) production release.

### Required testing

[Unit testing](https://en.wikipedia.org/wiki/Unit_testing), [Integration testing](https://en.wikipedia.org/wiki/Integration_testing) and [Functional testing](https://en.wikipedia.org/wiki/Functional_testing) are **required**.

### Test Doubles

* Mocks **must** be used for external dependencies
* Mocks **must be avoided** for own components

> 👴🏾 Mocking is avoided in own components because it doesn't trigger any [trade-off](https://blog.cleancoder.com/uncle-bob/2014/05/10/WhenToMock.html) in our context

### Coverage

All the code **must** be covered, code coverage **must** be equals to `100%`.

## Conventions

* Must be named with `Test` suffix
* Must be located at `Tests/<component>/`