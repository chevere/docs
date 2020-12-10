# Workflow

The Workflow component provides the ability to define a runtime execution based on the [workflow pattern](https://en.wikipedia.org/wiki/Workflow_pattern). It allows to define a series of individual steps, each triggering responses with the goal to produce a final outcome.

[WorkflowInterface](../reference/Chevere/Interfaces/Workflow/WorkflowInterface.md) describes the interface for the component in charge of defining a Workflow.

## Step

A Step define an [Action](Action.md) with arguments (explicit or referenced). [StepInterface](../reference/Chevere/Interfaces/Workflow/StepInterface.md) describes the interface for the component in charge of defining a Step.

```php
use Chevere\Components\Workflow\Step;

new Step('ClassNameImplementingActionInterface');
```

For the code above, the argument passed must implement the [ActionInterface](../reference/Chevere/Interfaces/Action/ActionInterface.md).

### Step Parameters

Parameters for the step are defined in the [Action Parameters](Action.md#parameters).

### Step Arguments

The `withArguments` method is used to define arguments passed on runtime to the action defined in the step.

```php
use Chevere\Components\Workflow\Step;

(new Step('SomeAction'))
    ->withArguments(
        firstName: 'Rodolfo',
        lastName: 'Berrios'
    );
```

For the code above, arguments `Rodolfo` and `Berrios` will be passed to `SomeAction` when running the Workflow. These arguments will be matched against the Parameters defined at the Action.

### Referenced Arguments

Referenced arguments can be defined to bind arguments referencing Workflow variables or responses returned after running any previous step.

| Expression        | Meaning                                                      |
| ----------------- | ------------------------------------------------------------ |
| `${var}`          | A context argument                                           |
| `${stepName:key}` | The value of `key` for the response of named step `stepName` |

## Creating a Workflow

```php
use Chevere\Components\Workflow\Workflow;

$workflow = new Workflow('insert-user');
```

## Adding Steps

The `withAdded` method allows to append steps to the Workflow. For the code below, note how validate and insert steps reference arguments stored in the response of the fetch step.

Variables `payload` and `useCache` will be required to be provided by the Workflow runner.

```php
use Chevere\Components\Workflow\Workflow;
use Chevere\Components\Workflow\Step;

/**
 * @var Workflow $workflow
 */
$workflow = $workflow
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

## Adding Steps Before and After

The `withAddedBefore` and `withAddedAfter` methods allows to add steps before/after another step.

Code below modify the Workflow to extend its functionality.

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
