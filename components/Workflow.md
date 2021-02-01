# Workflow

The [Workflow](../reference/Chevere/Components/Workflow/Workflow.md) component provides the ability to define a runtime execution based on the [workflow pattern](https://en.wikipedia.org/wiki/Workflow_pattern). It allows to define a series of individual interconnected steps with goal to describe and execute any given procedure.

## Creating a Workflow

To create a workflow pass the workflow name:

```php
use Chevere\Components\Workflow\Workflow;

$workflow = new Workflow(name: 'insert-user');
```

## Adding Steps

The `withAdded` method allows to append [steps](#step) to the Workflow. For the code below, note how validate and insert steps [reference arguments](#referenced-arguments) stored in the response of the fetch step.

Variables `payload` and `useCache` will be required to be provided by the Workflow runner.

```php
use Chevere\Components\Workflow\Step;

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

Code below modify `$workflow` to extend its functionality.

```sh
# From this:
fetch->validate->insert

# To this:
logging->fetch->validate->insert->updateCount->caching
```

```php
use Chevere\Components\Workflow\Step;

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

## Step

The [Step](../reference/Chevere/Components/Workflow/Step.md) component define an [Action](Action.md) with arguments to pass.

```php
use Chevere\Components\Workflow\Step;

new Step(action: 'SomeActionClassName');
```

For the code above, the argument passed must be a class name implementing the [ActionInterface](../reference/Chevere/Interfaces/Action/ActionInterface.md).

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
