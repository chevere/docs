# Web

- [Web](#web)
  - [Introduction](#introduction)
  - [Hello, World!](#hello-world)
  - [Recommendations](#recommendations)
    - [Server](#server)
    - [Headless](#headless)

## Introduction

This specification should be considered as a **base recommendation** on how the framework components **could be** arranged to provide a web application.

> 🧔🏾 I encourage you to take seriously the previous paragraph, I really want you to [_Make your own kind of music_](https://www.youtube.com/watch?v=iQ7dTMPwUi8)

## Hello, World!

An example application is provided at `Examples/Web`. This application runs a simple `Hello, World!` under different server models.

## Recommendations

### Server

The web application developer **should** take the responsibility of the application dependencies up to the server layer. The server software configuration and provisioning **should be** provided by the application.

> 👴🏾 You don't want to deal with the universe of server setups out there

### Headless

Web applications **should** be preferred to be delivered as headless APIs as these applications are decoupled from the user interface. This allows the application to be presented under endless interface configurations and software.

