# Controller

Controller is a special type of action, specially made to be in charge of handling user input arguments, and to drive it towards your application instructions.

## Defining Controllers

A Controller implements the [ControllerInterface](../reference/Chevere/Interfaces/Action/ControllerInterface.md) and there's a base `Chevere\Components\Action\Controller` controller that you can use.

Code below defines `SomeController` class by extending `Chevere\Components\Action\Controller`.

```php
<?php

declare(strict_types=1);

namespace App\Controllers;

use Chevere\Components\Actions\Controller;

final class SomeController extends Controller
{
    // ...
}
```

