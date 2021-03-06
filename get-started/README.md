# Introduction

## What is Chevere?

Chevere is a general purpose PHP development framework made for building extensible [server-side](https://en.wikipedia.org/wiki/Server-side) applications. Unlike almost all other frameworks, Chevere is designed for *everything*, not just web and it provides the tooling needed to organize and run the logic of any given software application from command line tools, Content Management Systems, headless-APIs up to anything you may think of.

Chevere has this flexibility and mindset because it has been designed to be used to create [self-hosted software](https://github.com/awesome-selfhosted/awesome-selfhosted).

## Core concepts

### Clean & Typed

Chevere follows Clean Code principles, which can be resumed as the practice of creating code that is easy to understand, to change and maintain.

It uses strict strong-types for safe run-time operations and relies mostly on the language to avoid boilerplate code needed to validate dynamic types.

### Extensible

Chevere provides an immutable core library suitable to build _anything_. The tooling is for general purposes, with enough flexibility to allow the creation a myriad of systems with the same know-how. It includes the tooling to safely extend base instructions using plug-in addons.

Extensible applications not only do more, also engage more users and provide a solid foundation for your own application ecosystem.

### Modern & High-quality

Chevere has been designed from scratch for PHP 8, and it uses all the goodies recently added to the language, specially strictness, typing and named arguments. On top of that it follows [quality](../architecture/standard/quality.md) standards.

[![Build](https://img.shields.io/github/workflow/status/chevere/chevere/CI/main?style=flat-square)](https://github.com/chevere/chevere/actions) [![Quality Gate Status](https://img.shields.io/sonar/alert_status/chevere_chevere?server=https%3A%2F%2Fsonarcloud.io&style=flat-square
)](https://sonarcloud.io/dashboard?id=chevere_chevere) [![CodeFactor](https://img.shields.io/codefactor/grade/github/chevere/chevere?label=code%20grade&style=flat-square)](https://www.codefactor.io/repository/github/chevere/chevere) [![Codacy Badge](https://img.shields.io/codacy/grade/b956754f8ff04aaa9ca24a6e4cc21661?style=flat-square)](https://www.codacy.com/gh/chevere/chevere?utm_source=github.com&utm_medium=referral&utm_content=chevere/chevere&utm_campaign=Badge_Grade) [![Maintainability](https://img.shields.io/codeclimate/maintainability/chevere/chevere?style=flat-square)](https://codeclimate.com/github/chevere/chevere) [![Tech Debt](https://img.shields.io/codeclimate/tech-debt/chevere/chevere?style=flat-square)](https://codeclimate.com/github/chevere/chevere)

## Origin

Chevere begun as the supporting framework for Chevereto V4. Development started in May-2018, carrying a complete modernization of the previous Chevereto's supporting framework ([G\ Library](https://g.chevereto.com/)).

While Chevereto drove initial development, Chevere is a different organization with its own goals.

> Both [Chevere](https://chevere.org) and [Chevereto](https://chevereto.com) are made by the same developer, [Rodolfo Berrios](https://rodolfoberrios.com) (Hey there).
