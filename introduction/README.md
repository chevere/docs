# Get started

## What is Chevere?

Chevere is a PHP development library that provides tooling to build high-quality applications. It emphasizes on clean code principles, robust type safety, strictness and full immutability. Chevere is designed to be lighter yet extensible, allowing developers to create a wide range of modern systems with a consistent approach.

💡 The term *chévere* is widely used in Latin America to mean **cool/awesome** in Spanish-speaking countries.

## Philosophy & Design Principles

Chevere is built with enterprise requirements at its core. Every design decision prioritizes **maintainability**, **scalability**, and **reliability** over convenience. We believe that software should be predictable, testable, and built to last decades, not just deliver quick solutions.

### Strict & Typed

Chevere enforces **strict typing** and **rigorous code contracts** throughout the entire codebase. Every function, method, and property is explicitly typed, eliminating the ambiguity and runtime errors common in dynamically typed systems.

### Explicit Over Implicit

Enterprise systems require clarity and explicitness. Chevere avoids "magic" behaviors, auto-configurations, and implicit assumptions. Every operation is explicit, traceable, and documentable, making systems easier to understand, debug, and maintain by large development teams.

### Architectural Boundaries

Chevere enforces clear **separation of concerns** through well-defined architectural boundaries. Components are designed to be loosely coupled, highly cohesive, and easily replaceable. This enables organizations to evolve their systems incrementally without costly rewrites.

Every interface in Chevere represents a **business contract** that must be honored across the entire system lifecycle. This contract-driven approach ensures that breaking changes are impossible without explicit versioning, protecting enterprise investments in existing codebases.

Security vulnerabilities often stem from design flaws, not implementation bugs. Chevere's architecture prevents entire classes of security issues through:

- **Input sanitization at boundaries**: All external data is validated and sanitized at system entry points
- **Privilege separation**: Components operate with minimal necessary permissions
- **Attack surface minimization**: Explicit interfaces limit exposure to malicious inputs

## Core concepts

### Lightweight

Chevere is designed to be **lightweight by default** while maintaining enterprise-grade capabilities. The framework follows a minimalist approach where you only include what you need, avoiding the bloat common in monolithic frameworks. This results in faster application startup times, reduced memory footprint, and optimal resource utilization in production environments.

### Extensible

Chevere offers a vast collection of packages that provide the flexibility to create a wide range of systems with a consistent know-how.

### Modern & High quality

Built entirely for PHP 8, Chevere uses cutting-edge features while adhering to strict quality standards as detailed in the [quality guidelines](../developer/standard/quality.md).

### Immutable

Chevere embraces full [immutability](../developer/standard/immutability.md) as a fundamental principle. This eliminates entire classes of concurrency issues and makes code behavior predictable across complex systems. This is particular useful in multi-threaded and distributed environments where shared mutable state can lead to subtle bugs that are hard to reproduce and fix.

### Tested

Chevere undergoes rigorous testing, including extensive code coverage and mutation testing, as detailed in the [testing guidelines](../developer/standard/testing.md).

## Who makes Chevere?

Chevere is driven by [Chevereto](https://chevereto.com) and developed by its creator, [Rodolfo Berrios](https://rodolfoberrios.com).

## Sponsors

- [JetBrains](https://www.jetbrains.com/opensource/) provides software licensing.
- [Algolia](https://algolia.com) powers the search functionality for this documentation.
