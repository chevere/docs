# Quality Standard

Our quality standard exists to determine the minimum requirements to consider our software usable and the objetive is to minimize technical debt.

Our standard requires that code delivered by Chevere **must be**:

* CI build
* Extensively tested (code coverage, mutation)
* Well documented
* PHPStan Level 9

## CI build

The code is continuously analyzed by many systems and third-party tools. All our packages will showcase a signature like this on the main `README.md` file:

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=chevere_chevere&metric=alert_status)](https://sonarcloud.io/dashboard?id=chevere_chevere) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=chevere_chevere&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=chevere_chevere) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=chevere_chevere&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=chevere_chevere) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=chevere_chevere&metric=security_rating)](https://sonarcloud.io/dashboard?id=chevere_chevere) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=chevere_chevere&metric=coverage)](https://sonarcloud.io/dashboard?id=chevere_chevere) [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=chevere_chevere&metric=sqale_index)](https://sonarcloud.io/dashboard?id=chevere_chevere) [![CodeFactor](https://www.codefactor.io/repository/github/chevere/chevere/badge)](https://www.codefactor.io/repository/github/chevere/chevere) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/b956754f8ff04aaa9ca24a6e4cc21661)](https://www.codacy.com/gh/chevere/chevere/dashboard)

We use the following third-party CI services:

* [SonarCloud](https://sonarcloud.io/)
* [CodeFactor](https://www.codefactor.io/)
* [Stryker Mutator](https://stryker-mutator.io/)

## Extensively tested

All Chevere software **must** be tested.

To ensure the quality of the tests, all Chevere software requires **mutation testing**.

## Well documented

All Chevere software **must** be documented.

We use [docs-deploy](https://github.com/chevere/docs-deploy) documenting system.

## PHPStan Level 9

All Chevere software **must** be checked against [PHPStan](https://phpstan.org/) Level 9.
