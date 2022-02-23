# Container

The `Chevere\Container\Container` component is an immutable implementation of `Psr\Container\ContainerInterface`.

## Creating a container

```php
use Chevere\Container\Container;

$container = new Container();
```

## Putting services

💡 A service can be of *any* type.

```php
use Redis;

$service = new Redis();
$id = 'wea';
$container = $container->withPut($id, $service);
```

## Check if contains service

```php
$contains = $container->has($id); // true if has wea
```

## Get service

```php
$wea = $container->get($id); // $wea = $service
```
