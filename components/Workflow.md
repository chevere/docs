# Workflow

The Workflow component provides the ability to define a sequential (stepped) runtime execution. A Workflow contains a collection of Step, which use an [Action](Action.md) to run any given instruction.

[WorkflowInterface](../reference/Chevere/Interfaces/Workflow/WorkflowInterface.md) describes the interface for the component in charge of defining a Workflow.

Workflow is designed to run any kind of instruction and is immutable, which enables support for resume-able Workflows (long as your instructions are also stateless).

## Step

A Step allows to define an action with context arguments. [StepInterface](../reference/Chevere/Interfaces/Workflow/StepInterface.md) describes the interface for the component in charge of defining a Step.

```php
use Chevere\Components\Workflow\Step;

new Step('ClassNameImplementingActionInterface');
```

The argument passed must be a class name implementing the [ActionInterface](../reference/Chevere/Interfaces/Action/ActionInterface.md). A Step is an interface build around the concept of a named Action.

### Step Parameters

Step parameters are defined same as [Action Parameters](Action.md#parameters) and the definition will be used to match runtime arguments.

### Step Arguments

Step supports referenced arguments handling for workflow environment variables and for referencing the response from previous Steps. The `withArguments` method is used to define referenced arguments.

For the code below, runtime argument checking will be made against the  defined at `ValidateAction`.

```php
use Chevere\Components\Workflow\Step;

(new Step('SomeAction'))
    ->withArguments(
        foo: '${bar}',
        boo: '${foo:key}',
    );
```

| Expression   | Meaning                                                     |
| ------------ | ----------------------------------------------------------- |
| `${bar}`     | A context argument                                          |
| `${foo:key}` | The value of `key` key for the response of named step `foo` |

## Creating a Workflow

Code below illustrates how `validate` step references a value stored in the response of the `fetch` Step. I this example, assume that `FetchAction` allows to pass a request payload of type `string` that will enable `email` and `username` arguments in the `validate` Step.

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
            )
    );
```

Adding the Steps above to a Workflow will add `payload` and `useCache` as a Workflow context arguments. For validate Step, both email and username arguments are referenced with the responses obtained from `fetch` Step.

> **Note**: It won't be possible to run the Workflow if the references are broken.

## Modifying a Workflow

The `withAddedBefore` method allows to add Steps before a named Step. The `withAddedAfter` method allows to add Steps after a named Step.

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

In the code above, a logging Step is added before the fetch Step. On the other hand, Steps updateCount and caching are added after the insert Step.
