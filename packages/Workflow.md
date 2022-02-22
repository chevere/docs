# Workflow

```sh
composer require chevere/workflow
```

The `Chevere/Workflow` namespace provides the tooling to define a runtime execution based on the [workflow pattern](https://en.wikipedia.org/wiki/Workflow_pattern). Its purpose is to allow to abstract instructions as logic units of interconnected async jobs.

## Creating a Workflow

To create a workflow pass the Workflow named [jobs](#job). In the example below, a workflow defines a podcast publishing procedure:

```php
use function Chevere\Workflow\job;
use function Chevere\Workflow\workflow;

workflow(
    process:
        job(
            'ProcessPodcast',
            payload: '${payload}'
        ),
    optimize:
        job(
            'OptimizeFile',
            file: '${process:file}'
        ),
    podcast:
        job(
            'CreatePodcast',
            file: '${optimize:file}',
            request: '${process:request}'
        ),
    releaseTransistorFm:
        job(
            'ReleaseTransistorFM',
            podcast: '${podcast:object}'
        ),
    releaseApple:
        job(
            'ReleaseApple',
            podcast: '${podcast:object}'
        ),
    createTranscript:
        job(
            'CreateTranscript',
            file: '${optimize:file}'
        ),
    translateTranscript:
        job(
            'TranslateTranscript',
            script: '${createTranscript:script}'
        ),
    notifications:
        job(
            'NotifySubscribers',
            podcast: '${podcast:object}',
        )
        ->withDepends(
            'releaseTransistorFm', 'releaseApple'
        ),
    tweet:
        job(
            'SendReleaseTweet',
            fm: '${releaseTransistorFm:url}',
            apple: '${releaseApple:url}',
        )
        ->withDepends(
            'translateTranscript',
        ),
);
```

For the code above, `${payload}` is handled as a [workflow variable](#variables), the actual value for it should be provided by the [WorkflowRunner](#running-a-workflow).

👉 References to previous jobs (as in `${process:file}`) **implict declare** that the given job depends on the previous `process` Job as it declares a [job response variables](#job-response-variable).

🦄 Jobs will run in **parallel** (when available and if dependencies are meet). Refer to [dependencies](#dependencies) for sequential run order.

### Dependencies

Use `withDeps` method to explicit declare previous jobs as dependencies. The dependent job won't run until the dependencies are resolved.

## Job

The `Chevere/Components/Workflow/Job` component defines an [Action](../library/Action.md) with arguments to pass, supporting direct arguments aswel previous jobs response keys.

👉 The `action` parameter must be a class name implementing the `Chevere/Action/Interfaces/ActionInterface`.

```php
use function Chevere\Workflow\job;

job(action: 'SomeActionClass', ...$namedArguments);
```

### Parameters

Parameters for the job are defined in the [Action Run](../library/Action.md#run).

### Arguments

Arguments can be passed on constructor using named arguments.

```php
use function Chevere\Workflow\job;

job(
    'SomeActionClass'
    firstName: 'Rodolfo',
    lastName: 'Berrios'
);
```

For the code above, arguments `Rodolfo` and `Berrios` will be passed to `SomeActionClass` when running the Workflow. These arguments will be matched against the Parameters defined at `SomeActionClass::run()`.

### Variables

Referenced arguments can be used to bind arguments against Workflow variables or responses returned by any previous Job.

### Workflow variables

`${workflow_variable}`

A Workflow variable, injected by the WorkflowRunner. Regex `/^\${([\w-]*)}$/`.

### Job response variable

`${job_name:response_key}`

The value for `response_key` for the `job_name` job response. Regex `/^\${([\w-]*)\:([\w-]*)}$/`.

## Running a Workflow

Following the previous example, this is how to run a Workflow:

```php
use Chevere\DataStructure\Map;
use Chevere\Workflow\WorkflowRun;
use Chevere\Workflow\WorkflowRunner;
use function Chevere\Workflow\workflow;

$workflow = workflow(/** ... **/);
$arguments = [
    'payload' => '{request payload}'
];
$workflowRun = new WorkflowRun($workflow, ...$arguments);
$container = new Map();
$workflowRunner = (new WorkflowRunner($workflowRun))
    ->withRun($container);
```
