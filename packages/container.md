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

## Container usage

Create a Container by passing the known dependencies.

```php
use Chevere\Container\Container;

$container = new Container(
    database: $database,
    cipher: $cipher,
    //...
);
```

### Checking entries

Use `has` to check if an entry exists in the container.

```php
$container->has('database'); // true
$container->has('logger'); // false
```

### Retrieving entries

Use `get` to retrieve an entry from the container. It will throw `ContainerNotFoundException` if the entry is not found.

```php
$database = $container->get('database');
```

### Adding entries

Use `with` to add or replace entries in the container.

```php
$newContainer = $container->with(logger: $logger);
```

### Removing entries

Use `without` to remove entries from the container.

```php
$newContainer = $container->without('cipher');
```

## Auto-injection

The container can automatically resolve and inject dependencies.

### Resolving dependencies

Use `withAutoInject` to get a new container instance with resolved dependencies.

```php
$containerWithServices = $container->withAutoInject($dependencies);
```

This will automatically create instances for services like `MyController` and `MyMiddleware` if they are not already in the container, resolving their own dependencies recursively.

### Extracting arguments

Use `extract` to get the constructor arguments for a class from the container.

```php
$arguments = $containerWithServices->extract(MyController::class);
$controller = new MyController(...$arguments);
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

### Adding more dependencies

Use `withClass` to add more class dependencies to the collection. Returns a new instance with the specified classes added.

```php
$newDependencies = $dependencies->withClass(
    AnotherController::class,
    AnotherMiddleware::class,
);
```

### Accessing parameters

Use `parameters` to get a ParametersInterface instance reflecting all dependencies as [Parameters](https://chevere.org/packages/parameter).

```php
$parameters = $dependencies->parameters();
```

### Checking class dependencies

Use `has` to check if a specific class name defines dependencies.

```php
$dependencies->has(MyController::class); // true
$dependencies->has(UnknownClass::class); // false
```

### Retrieving class parameters

Use `get` to retrieve the parameters (dependencies) for a known class name.

```php
$controllerParams = $dependencies->get(MyController::class);
```

### Extracting constructor arguments

Use `extract` to get the typed constructor arguments for a class from a container.

```php
$arguments = $dependencies->extract(MyController::class, $container);
$controller = new MyController(...$arguments);
```

### Identifying dependency requirer

Use `requirer` to identify which class declared a specific dependency.

```php
$className = $dependencies->requirer('database');
```

### Validating container dependencies

Use `assert` to check if a container has all the required dependencies. It will throw a `LogicException` if any dependency is missing or if there's a type mismatch.

```php
$dependencies->assert($container);
```
