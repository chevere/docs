# Introduction

## What is Chevere?

Chevere is a general purpose PHP development framework for building extensible [server-side](https://en.wikipedia.org/wiki/Server-side) applications. Unlike almost all other frameworks, Chevere is designed for *everything*, not just web. It provides the tooling needed to organize and run the logic of any given software application from command line tools, Content Management Systems, headless-APIs up to anything you may think of.

Chevere has this flexibility and mindset because it has been designed to be used to create [self-hosted software](https://github.com/awesome-selfhosted/awesome-selfhosted).

::: tip
If you are new to all this check the [Beginners Guide](beginners-guide.md).
:::

### Name meaning

The term *[chévere](https://en.wiktionary.org/wiki/ch%C3%A9vere)* is a very well known word in spanish speaking countries which means *cool*, *excellent*, *great*, *awesome*, *pretty*, *nice* and *magnific*. The term has a generic connotation of good and can be used in almost any positive context.

The use of the term has roots in the [Chevereto](#origin) software, which simply means "chevere to".

## Core concepts

### Extensibility

Chevere aims to ease the process of crafting extensible applications by providing an architecture allowing to safely extend and plug the application logic. Extensible applications not only do more, also engage more users and provide a solid foundation for your own application ecosystem.

> 🔌 Pluggable logic allows to be open to do *more*.

### Clean & Typed

Chevere follows Clean Code principles, which can be resumed as the practice of creating code that is easy to understand, to change and maintain.

It uses strict strong-types for safe run-time operations and relies mostly on the language to avoid boilerplate code needed to validate dynamic types.

> 🏷 Typed code is easier to read and safer to work with. You will notice it when you work with it.

### General Purpose

Chevere is tech-neutral and on its core is just a simple command runner which can me mapped to do _anything_. The tooling is for general purposes, with enough flexibility to allow the creation a myriad of systems with the same know-how.

> 💎 It is tech neutral and not web-centric.

### Consistent

Everything in Chevere feels in its place, like something that it was diligently designed by a single person.

> 👨‍💻 Surprise, it is made by a single developer!.

In Chevere the code is highly opinionated, with many coding standards and conventions seeking for cohesion, and the best usage (in my opinion) of the programming language and tooling available.

### Quality

Chevere code is checked against many tools and services.

[![Build](https://img.shields.io/github/workflow/status/chevere/chevere/CI/master?style=flat-square)](https://github.com/chevere/chevere/actions) [![Quality Gate Status](https://img.shields.io/sonar/alert_status/chevere_chevere?server=https%3A%2F%2Fsonarcloud.io&style=flat-square
)](https://sonarcloud.io/dashboard?id=chevere_chevere) [![codecov](https://img.shields.io/codecov/c/github/chevere/chevere?style=flat-square)](https://codecov.io/gh/chevere/chevere) [![CodeFactor](https://img.shields.io/codefactor/grade/github/chevere/chevere?label=code%20grade&style=flat-square)](https://www.codefactor.io/repository/github/chevere/chevere) [![Codacy Badge](https://img.shields.io/codacy/grade/b956754f8ff04aaa9ca24a6e4cc21661?style=flat-square)](https://www.codacy.com/gh/chevere/chevere?utm_source=github.com&utm_medium=referral&utm_content=chevere/chevere&utm_campaign=Badge_Grade) [![Maintainability](https://img.shields.io/codeclimate/maintainability/chevere/chevere?style=flat-square)](https://codeclimate.com/github/chevere/chevere) [![Tech Debt](https://img.shields.io/codeclimate/tech-debt/chevere/chevere?style=flat-square)](https://codeclimate.com/github/chevere/chevere)

## Origin

Chevere begun as the supporting framework for [Chevereto 4](https://github.com/chevereto/chevereto). Development started about mid-2018, carrying a complete modernization of the previous Chevereto's supporting framework ([G\ Library](https://g.chevereto.com/)).

While Chevereto drove initial development, Chevere is a different organization with its own goals.

> Both Chevere and Chevereto are made by the same developer, [Rodolfo Berrios](https://github.com/rodolfoberrios) (Hey there 👋🏾).
