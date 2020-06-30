# RouterMakerInterface

`Chevere\Interfaces\Router\RouterMakerInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Router/RouterMakerInterface.php)

## Methods

### __construct()


---

### withAddedRoutable()

> Return an instance with the specified added RoutableInterface.

This method MUST retain the state of the current instance, and return
an instance that contains the specified added RoutableInterface.

#### Parameters

- [RoutableInterface](./RoutableInterface.md) `$routable`
- string `$group`

#### Return

RouterMakerInterface

---

### router()

> Provides access to the generated RouterInterface instance.

#### Return

[RouterInterface](./RouterInterface.md)

---

