# Controller

The Controller component is a special type of action in charge of handling external-driven instructions. It is exactly the same as [Action](Action.md), but it only accepts parameters of type  [StringParameter](Parameter.md#string-paramater).

::: tip Learn by Example
Check the Controller [example](https://github.com/chevere/examples/tree/main/00.HelloWorld#00controllerphp) to learn directly playing with code.
:::

## Creating a Controller

Code below defines class `SomeController` by extending the base [Controller](../reference/Chevere/Components/Controller/Controller.md).

```php
use Chevere\Components\Controller\Controller;
use Chevere\Components\Parameter\StringParameter;
use Chevere\Interfaces\Parameter\ParametersInterface;

final class SomeController extends Controller
{
    public function getParameters(): ParametersInterface
    {
        return new Parameters(
            id: new StringParameter(),
            name: new StringParameter(),
        );
    }

    // ...
}
```

Using string arguments enable Controllers to be _wired_ to other devices as:

* CLI applications
* HTTP routing
* Application runners

Type casting can be applied in the `run` method directly on each argument.

```php
use Chevere\Components\Parameter\IntegerParameter;
use Chevere\Components\Parameter\Parameters;
use Chevere\Components\Response\Response;
use Chevere\Interfaces\Parameter\ArgumentsInterface;
use Chevere\Interfaces\Parameter\ParametersInterface;
use Chevere\Interfaces\Response\ResponseInterface;

public function run(ArgumentsInterface $arguments): ResponseInterface
{
    $id = $arguments->getInteger('id');
    $name = $arguments->getString('name');

    // ...
}
```

## Creating a ControllerWorkflow

Code below defines class `SomeWorkflowController` by extending the base [ControllerWorkflow](../reference/Chevere/Components/Controller/ControllerWorkflow.md), which is a special type of Controller with built-in [Workflow](Workflow.md) integration.

```php
use Chevere\Components\Controller\ControllerWorkflow;
use Chevere\Components\Workflow\Workflow;
use Chevere\Interfaces\Workflow\WorkflowInterface;

final class SomeWorkflowController extends ControllerWorkflow
{
    public function getWorkflow(): WorkflowInterface
    {
        return new Workflow(
            // ...
        );
    }

    // ...
}
```
