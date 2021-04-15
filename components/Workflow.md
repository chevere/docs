# Workflow

The [Workflow](../reference/Chevere/Components/Workflow/Workflow.md) component provides the ability to define a runtime execution based on the [workflow pattern](https://en.wikipedia.org/wiki/Workflow_pattern). It allows to define a series of individual interconnected steps with goal to describe and execute a sequential procedure.

## Step

The [Step](../reference/Chevere/Components/Workflow/Step.md) component define an [Action](Action.md) with arguments to pass.

```php
use Chevere\Components\Workflow\Step;

new Step(action: 'SomeActionClass');
```

The argument passed must be a class name implementing the [ActionInterface](../reference/Chevere/Interfaces/Action/ActionInterface.md).

### Step Parameters

Parameters for the step are defined in the [Action Parameters](Action.md#parameters).

### Step Arguments

Arguments can be passed on constructor using named arguments.

```php
use Chevere\Components\Workflow\Step;

new Step(
    'SomeActionClass'
    firstName: 'Rodolfo',
    lastName: 'Berrios'
);
```

For the code above, arguments `Rodolfo` and `Berrios` will be passed to `SomeActionClass` when running the Workflow. These arguments will be matched against the Parameters defined at the Action.

The `withArguments` method can be used to modify the step arguments.

## Creating a Workflow

To create a workflow pass the Workflow named [steps](#step):

```php
use Chevere\Components\Workflow\Workflow;

$workflow = new Workflow(
    fetch: new Step(
        'FetchAction',
        payload: '${payload}'
    ),
);
```

For the code above, `${payload}` is declared as a [reference](#references), the actual value for it should be provided by the WorkflowRunner.

## References

Referenced arguments can be used to bind arguments against Workflow variables or responses returned by any previous existing Step.

| Expression    | Meaning                                       |
| ------------- | --------------------------------------------- |
| `${var}`      | A Workflow variable                           |
| `${step:key}` | The response value at key for a previous Step |

## Adding Steps

The `withAdded` method allows to add steps to a existing Workflow.

For the code below, steps `validate` and `insert` are using [references](#references) for the expected response keys at `fetch` Step.

```php
use Chevere\Components\Workflow\Step;

$workflow = $workflow
    ->withAdded(
        validate: new Step(
            'ValidateAction',
            email: '${fetch:email}',
            username: '${fetch:username}',
        ),
        insert: new Step(
            'InsertAction',
            email: '${fetch:email}',
            username: '${fetch:username}',
        )
    );
```

## Adding Steps Before and After

The `withAddedBefore` and `withAddedAfter` methods allows to add steps before/after another step.

For example, consider this existing flow:

* Fetch
* Validate
* Insert

Requiring to extend to something like this:

* +Logging
* Fetch
* Validate
* +ValidateMore
* Insert
* +Caching

```php
use Chevere\Components\Workflow\Step;

$workflow = $workflow
    ->withAddedBefore(
        'fetch',
        logging: new Step(
            'LoggingAction',
            device: '${logDevice}'
        )
    )
    ->withAddedAfter(
        'validate',
        validateMore: new Step(
            'ValidateMoreAction',
            payload: '${payload}'
        )
    )
    ->withAddedAfter(
        'insert',
        caching: new Step(
            'CachingAction',
            userId: '${insert:userId}'
        )
    );
```

## Workflow Dependencies

Workflow is aware of actions implementing the [DependentInterface](../reference/Chevere/Interfaces/Dependent/DependentInterface.md). All Action dependencies will be collected by the Workflow.

Use the method `dependencies` to get access to the dependencies for a given Workflow.

```php
$workflow->dependencies();
```

`🚧 Work in progress`

* WorkflowRun
* Workflow provider
