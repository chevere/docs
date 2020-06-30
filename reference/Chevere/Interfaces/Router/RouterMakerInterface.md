---
editLink: false
---

# RouterMakerInterface

`Chevere\Interfaces\Router\RouterMakerInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Router/RouterMakerInterface.php)

## Methods

### __construct()


---

### withAddedRoutable()

Return an instance with the specified added RoutableInterface.

**Parameters**

1. [RoutableInterface](./RoutableInterface.md) `$routable`
2. string `$group`

::: danger THROWS
[RouterMakerException](../../Exceptions/Router/RouterMakerException.md)
if unable to process routing
:::
::: danger THROWS
[RoutePathExistsException](../../Exceptions/Router/RoutePathExistsException.md)
if $routable has been already routed
:::
::: danger THROWS
[RouteKeyConflictException](../../Exceptions/Router/RouteKeyConflictException.md)
if $routable conflicts with other RoutableInterface
:::
::: danger THROWS
[RouteNameConflictException](../../Exceptions/Router/RouteNameConflictException.md)
if $routable name conflicts with other RoutableInterface
:::
::: tip RETURN
RouterMakerInterface
:::
This method MUST retain the state of the current instance, and return
an instance that contains the specified added RoutableInterface.

---

### router()

Provides access to the generated RouterInterface instance.

::: tip RETURN
[RouterInterface](./RouterInterface.md)
:::

---

