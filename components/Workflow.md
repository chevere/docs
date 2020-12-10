# Workflow

The Workflow component provides the ability to define a runtime execution based on the [workflow pattern](https://en.wikipedia.org/wiki/Workflow_pattern). Using the Workflow component, you can define a series of individual Steps each triggering responses with the goal to produce a final outcome.

[WorkflowInterface](../reference/Chevere/Interfaces/Workflow/WorkflowInterface.md) describes the interface for the component in charge of defining a Workflow.

## Step

A Step define an [Action](Action.md) with arguments. [StepInterface](../reference/Chevere/Interfaces/Workflow/StepInterface.md) describes the interface for the component in charge of defining a Step.

```php
use Chevere\Components\Workflow\Step;

new Step('ClassNameImplementingActionInterface');
```

The argument passed in `Step` constructor must implement the [ActionInterface](../reference/Chevere/Interfaces/Action/ActionInterface.md).

### Step Parameters

Parameters are defined same as [Action Parameters](Action.md#parameters) and the parameter definition will be used to match step-referenced arguments on runtime.

### Step Arguments

The `withArguments` method is used to define step arguments, which will be passed when running the action.

```php
use Chevere\Components\Workflow\Step;

(new Step('SomeAction'))
    ->withArguments(
        name: 'Rodolfo',
        lastName: 'Berrios'
    );
```

For the code above, arguments `Rodolfo` and `Berrios` will be passed to `SomeAction` when running the Workflow. These arguments will be matched against the parameters instance defined at the action.

### Referenced Arguments

Referenced arguments can be defined to bind arguments referencing Workflow variables or responses returned after running any previous step.

| Expression        | Meaning                                                      |
| ----------------- | ------------------------------------------------------------ |
| `${var}`          | A context argument                                           |
| `${stepName:key}` | The value of `key` for the response of named step `stepName` |

## Creating a Workflow

Code below shows how to create a Workflow with this execution sequence:

```sh
fetch->validate->insert
```

```php
use Chevere\Components\Workflow\Workflow;
use Chevere\Components\Workflow\Step;

(new Workflow('insert-user'))
    ->withAdded(
        fetch: (new Step('FetchAction'))
            ->withArguments(
                payload: '${payload}'
            ),
        validate: (new Step('ValidateAction'))
            ->withArguments(
                cache: '${useCache}',
                email: '${fetch:email}',
                username: '${fetch:username}',
            ),
        insert: (new Step('InsertAction'))
            ->withArguments(
                email: '${fetch:email}',
                username: '${fetch:username}',
            )
    );
```

For the code above, note how validate and insert steps reference arguments stored in the response of the fetch step. Variables `payload` and `useCache` will be required to be provided by the Workflow runner.

## Modifying a Workflow

The `withAddedBefore` and `withAddedAfter` methods allows to add steps before/after another step.

Code below modify the Workflow:

```sh
# From this:
fetch->validate->insert

# To this:
logging->fetch->validate->insert->updateCount->caching
```

```php
use Chevere\Components\Workflow\Step;
use Chevere\Interfaces\Workflow\WorkflowInterface;

/**
 * @var WorkflowInterface $workflow 
 */
$workflow = $workflow
    ->withAddedBefore(
        'fetch',
        logging: (new Step('LoggingAction'))
            ->withArguments(device: '${logDevice}'),
    )
    ->withAddedAfter(
        'insert',
        updateCount: (new Step('UpdateUserCountAction'))
            ->withArguments(add: 1),
        caching: (new Step('CachingAction'))
            ->withArguments(userId: '${insert:userId}')
    );
```

In the code above, a logging step is added before the fetch step. On the other hand, steps updateCount and caching are added after the insert step.
