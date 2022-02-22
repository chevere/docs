# Workflow

The `Chevere/Workflow` namespace provides the tooling to define a runtime execution based on the [workflow pattern](https://en.wikipedia.org/wiki/Workflow_pattern). It purpose is to allow to abstract instructions as logic units of interconnected async workflows.

## Creating a Workflow

To create a workflow pass the Workflow named [jobs](#job). In the example below, a workflow defines a podcast publishing:

```php
use function Chevere\Workflow\job;
use function Chevere\Workflow\workflow;

workflow(
    fetch: job(
        'FetchPayload',
        payload: '${payload}'
    ),
    process: job(
        'ProcessPodcast',
        file: '${fetch:file}'
    ),
    optimize: job(
        'OptimizePodcast',
        file: '${fetch:file}'
    ),
    podcast: job(
        'CreatePodcast',
        file: '${fetch:file}'
    )
        ->withDepends(
            'process',
            'optimize'
        ),
    releaseTransistorFm: job('ReleaseTransistorFM')
        ->withDepends(
            'podcast',
        ),
    releaseApple: job('ReleaseApple')
        ->withDepends(
            'podcast',
        ),
    createTranscript: job('CreateTranscription')
        ->withDepends(
            'process'
        ),
    translateTranscript: job('TranslateTranscription')
        ->withDepends(
            'createTranscript'
        ),
    notifications: job('NotifySubscribers')
        ->withDepends(
            'releaseTransistorFm',
            'releaseApple'
        ),
    tweet: job('SendTweet')
        ->withDepends(
            'translateTranscript',
            'releaseTransistorFm',
            'releaseApple'
        ),
);
```

For the code above, `${payload}` is handled as a [workflow variable](#variables), the actual value for it should be provided by the WorkflowRunner. Jobs `validate` and `insert` are using [job response variables](#job-response-variable) for the expected response keys at `fetch` Job.

👉 References to previous jobs (as in `${fetch:file}`) **implict declare** that the given job depends on the previous `fetch` step.

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

## Job

The `Chevere/Components/Workflow/Job` component defines an [Action](../library/Action.md) with arguments to pass, supporting direct arguments aswel previous jobs response keys.

👉 The `action` parameter must be a class name implementing the `Chevere/Action/Interfaces/ActionInterface`.

```php
use function Chevere\Workflow\job;

job(action: 'SomeActionClass', ...$namedArguments);
```

### Job Parameters

Parameters for the job are defined in the [Action Run](../library/Action.md#run).

### Job Arguments

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

### Job Variables

Referenced arguments can be used to bind arguments against Workflow variables or responses returned by any previous Job.

### Workflow variables

`${workflow_variable}`

A Workflow variable, injected by the WorkflowRunner. Regex `/^\${([\w-]*)}$/`.

### Job response variable

`${job_name:response_key}`

The value for `response_key` for the `job_name` job response. Regex `/^\${([\w-]*)\:([\w-]*)}$/`.
