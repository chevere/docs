# Controller

`🚧 OUTDATED DOCS`

The Controller component is a special type of action in charge of handling external-driven instructions. It is the same as [Action](Action.md), but it takes string parameters.

::: tip Learn by Example
Check the Controller [example](https://github.com/chevere/examples/tree/main/00.HelloWorld#00controllerphp) to learn playing with code.
:::

## String Parameters?

Controller takes string parameters as it is intended to use them   _wired_ to:

* CLI applications
* Web Servers
* Application runners

If you don't need to wire to these devices you should be using [Action](Action.md), which doesn't restrict the input parameter type.

## Creating a Controller

Code below defines class `SomeController` by extending the base [Controller](../reference/Chevere/Components/Controller/Controller.md).

```php
use Chevere\Controller\Controller;

final class SomeController extends Controller
{
    // ...
}
```

### Controller getParameters

Parameters are defined in the `getParameters` method. Parameter types provided must be of type [StringParameter](Parameter.md#string-paramater).

```php
use Chevere\Parameter\StringParameter;
use Chevere\Interfaces\Parameter\ParametersInterface;

public function getParameters(): ParametersInterface
{
    return new Parameters(
        id: new StringParameter(),
        name: new StringParameter(),
    );
}
```

### Type Casting

Type casting can be applied in the `run` method directly on each argument.

```php
use Chevere\Response\Response;
use Chevere\Interfaces\Parameter\ArgumentsInterface;
use Chevere\Interfaces\Response\ResponseInterface;

public function run(ArgumentsInterface $arguments): ResponseInterface
{
    $id = (int) $arguments->getString('id');
    $name = $arguments->getString('name');

    // ...
}
```

## Creating a ControllerWorkflow

A Controller with built-in [Workflow](Workflow.md) integration allows to create controllers following the workflow pattern.

Code below defines class `SomeWorkflowController` by extending the base [ControllerWorkflow](../reference/Chevere/Components/Controller/ControllerWorkflow.md).

```php
use Chevere\Controller\ControllerWorkflow;

final class SomeWorkflowController extends ControllerWorkflow
{
    // ...
}
```

### Controller getWorkflow

Workflow is defined in the `getWorkflow` method.

```php
use Chevere\Workflow\Workflow;
use Chevere\Interfaces\Workflow\WorkflowInterface;

public function getWorkflow(): WorkflowInterface
{
    return new Workflow(
        // ...
    );
}
```
