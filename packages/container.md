---
sidebarDepth: 3
---

# Container

## Summary

**Chevere Container** is a minimalist PSR-11 dependency injection container. It provides `get` and `has` for service container-interop, along with immutable `with` and `without` methods for modifying container entries.

It features automatic dependency resolution and injection. The container can automatically instantiate and inject class dependencies based on their constructor type hints. It also provides a `Dependencies` utility to collect, validate, and manage dependencies from multiple classes, ensuring type compatibility across the dependency graph.

## Installing

Container is available through [Packagist](https://packagist.org/packages/chevere/container) and the repository source is at [chevere/container](https://github.com/chevere/container).

```sh
composer require chevere/container
```

## Creating Container

Create a Container by passing the known dependencies.

```php
use Chevere\Container\Container;

$container = new Container(database: $database, cipher: $cipher);
```

## Working with entries

The container is immutable. All methods that modify the container will return a new instance.

### has

Use `has` to check if an entry exists in the container.

```php
$container->has('database'); // true
$container->has('logger'); // false
```

### get

Use `get` to retrieve an entry from the container. It will throw `ContainerNotFoundException` if the entry is not found.

```php
$database = $container->get('database');
```

### with

Use `with` to add or replace entries in the container.

```php
$newContainer = $container->with(logger: $logger);
```

### without

Use `without` to remove entries from the container.

```php
$newContainer = $container->without('cipher');
```

## Dependencies

The `Dependencies` class is used to collect constructor dependencies from multiple classes. It helps to identify required services and validates against type compatibility.

```php
use Chevere\Container\Dependencies;

$dependencies = new Dependencies(
    MyController::class,
    MyMiddleware::class,
);
```

### assert

Use `assert` to check if a container has all the required dependencies. It will throw a `LogicException` if any dependency is missing or if there's a type mismatch.

```php
$dependencies->assert($container);
```

## Auto-injection

The container can automatically resolve and inject dependencies.

### withAutoInject

Use `withAutoInject` to get a new container instance with resolved dependencies.

```php
$containerWithServices = $container->withAutoInject($dependencies);
```

This will automatically create instances for services like `MyController` and `MyMiddleware` if they are not already in the container, resolving their own dependencies recursively.

### extract

Use `extract` to get the constructor arguments for a class from the container.

```php
$arguments = $containerWithServices->extract(MyController::class);
$controller = new MyController(...$arguments);
```
