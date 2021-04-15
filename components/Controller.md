# Controller

The Controller component is a special type of action in charge of handling external-driven instructions. It is exactly the same as [Action](Action.md), but it only accepts string parameters.

::: tip Learn by Example
Check the Controller [example](https://github.com/chevere/examples/tree/main/00.HelloWorld#00controllerphp) to learn directly playing with code.
:::

## String Parameters?

Using string parameters enable Controllers to be _wired_ to other devices such as:

* CLI applications
* HTTP routing
* Application runners

Using strings deliberately throws on the Controller the responsibility of [type casting](#type-casting).

## Creating a Controller

Code below defines class `SomeController` by extending the base [Controller](../reference/Chevere/Components/Controller/Controller.md).

```php
use Chevere\Components\Controller\Controller;

final class SomeController extends Controller
{
    // ...
}
```

### Controller getParameters

Parameters are defined in the `getParameters` method. Parameter types provided must be of type [StringParameter](Parameter.md#string-paramater).

```php
use Chevere\Components\Parameter\StringParameter;
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
use Chevere\Components\Response\Response;
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

A Controller with built-in [Workflow](Workflow.md) integration allows to easily create controllers following the workflow pattern.

Code below defines class `SomeWorkflowController` by extending the base [ControllerWorkflow](../reference/Chevere/Components/Controller/ControllerWorkflow.md).

```php
use Chevere\Components\Controller\ControllerWorkflow;

final class SomeWorkflowController extends ControllerWorkflow
{
    // ...
}
```

### Controller getWorkflow

Workflow is defined in the `getWorkflow` method.

```php
use Chevere\Components\Workflow\Workflow;
use Chevere\Interfaces\Workflow\WorkflowInterface;

public function getWorkflow(): WorkflowInterface
{
    return new Workflow(
        // ...
    );
}
```
