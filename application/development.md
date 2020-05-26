# Development

- [Development](#development)
  - [Introduction](#introduction)
  - [Recommendations](#recommendations)
  - [Discouraged Practices](#discouraged-practices)

## Introduction

This specification should be considered as a **base recommendation** on how applications **could be** developed on top of the framework.

## Recommendations

??

## Discouraged Practices

Although there aren't bad practices by definition, there are certain implementations that become troublesome with the evolution of the application.

The following practices are **discouraged** and should be avoided.

* Font controller
* All-in loader / bootstrapping
* Global instances

The reasoning is that each group of components of the application **must** be optimized for its own runtime operation. It depends on each instruction group runner to define how much will be _loaded_ on each execution.

This means that everything including database, sessions, services and anything else must be provided in each different context.