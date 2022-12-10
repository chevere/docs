# Container

Namespace `Chevere\Container`

The Container component is an immutable implementation of `Psr\Container\ContainerInterface`.

## Creating a Container

```php
use Chevere\Container\Container;

$container = new Container();
```

## Putting services

Use method `withPut` to put services into the Container. A service can be of *any* type.

```php
$container = $container
    ->withPut(
        redis: new Redis(),
    );
```

## Has service

Use method `has` to tell if Container has a service identified by its name.

```php
$true = $container->has('redis');
$false = $container->has('pdo');
```

## Get service

Use method `get` to access the service identified by its name.

```php
$redis = $container->get('redis');
```
