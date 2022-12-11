# Workflow

![Workflow](../src/packages/workflow/workflow-logo.svg)

Namespace `Chevere\Workflow`

The Workflow package provides tooling for define an execution procedure based on the [workflow pattern](https://en.wikipedia.org/wiki/Workflow_pattern). Its purpose is to allow to abstract procedure instructions as logic units of interconnected independent async jobs.

👏 With this package you can design a Workflow procedures in a similar fashion to GitHub Actions.

::: tip 💡 Workflow introduction
 Read [Workflow for PHP](https://rodolfoberrios.com/2022/04/09/workflow-php/) at Rodolfo's blog for a compressive introduction to this package.
:::

## Installing

Workflow is available through [Packagist](https://packagist.org/packages/chevere/workflow) and the repository source is at [GitHub](https://github.com/chevere/workflow).

```sh
composer require chevere/workflow
```

## Creating a Workflow

To create a workflow, define the Workflow named [jobs](#job). A job is defined by passing an [Action](../library/action.md) class name and its arguments.

In the example below, a workflow defines a podcast publishing procedure:

```php
use function Chevere\Workflow\job;
use function Chevere\Workflow\reference;
use function Chevere\Workflow\variable;
use function Chevere\Workflow\workflow;

workflow(
    process:
        job(
            ProcessPodcast::class,
            payload: variable('payload')
        ),
    optimize:
        job(
            OptimizeFile::class,
            file: reference('process', 'file')
        ),
    podcast:
        job(
            CreatePodcast::class,
            file: reference('optimize', 'file',)
            request: reference('process', 'request')
        ),
    releaseTransistorFm:
        job(
            ReleaseTransistorFM::class,
            podcast: reference('podcast', 'object')
        ),
    releaseApple:
        job(
            ReleaseApple::class,
            podcast: reference('podcast', 'object')
        ),
    createTranscript:
        job(
            CreateTranscript::class,
            file: reference('optimize', 'file')
        ),
    translateTranscript:
        job(
            TranslateTranscript::class,
            script: reference('createTranscript', 'script')
        ),
    notifications:
        job(
            NotifySubscribers::class,
            podcast: reference('podcast', 'object'),
        )
        ->withDepends(
            'releaseTransistorFm', 'releaseApple'
        ),
    tweet:
        job(
            SendReleaseTweet::class,
            fm: reference('releaseTransistorFm', 'url'),
            apple: reference('releaseApple', 'url'),
        )
        ->withDepends(
            'translateTranscript',
        ),
);
```

For the code above, `variable('payload')` declares a [workflow variable](#variables), the actual value for it should be provided at [WorkflowRun](#running-a-workflow) layer.

References to previous jobs as in `reference('process', 'file')` **implicit declare** that the given job depends on the previous Job `process` as it declares a [job reference](#job-reference).

## Job

The `Chevere/Workflow/Job` class defines an [Action](../library/action.md) with arguments to pass, supporting direct arguments and variable references to previous jobs response keys.

👉 The `action` parameter must be a class name implementing the `Chevere/Action/Interfaces/ActionInterface`. See [Action](../library/action.md) component.

```php
use function Chevere\Workflow\job;

job(SomeAction::class, ...$namedArguments);
```

### Parameters

Parameters for the job are defined in the [Action Run](../library/action.md#run) method.

### Arguments

Arguments can be passed on constructor using named arguments.

```php
use function Chevere\Workflow\job;

job(
    SomeAction::class
    firstName: 'Rodolfo',
    lastName: 'Berrios'
);
```

For the code above, arguments `Rodolfo` and `Berrios` will be passed to `SomeAction` when running the Workflow. These arguments will be matched against the Parameters defined at `SomeAction::run()`.

### Variables & References

Referenced arguments can be used to bind arguments against Workflow variables or responses returned by any previous Job.

### Workflow variables

A Workflow variable gets declared using function `variable`. This denotes a variable which must be injected by at Workflow run layer.

```php
use function Chevere\Workflow\variable;

variable('myVar');
```

### Job reference

A Job reference gets declared using function `reference`. This denotes a reference to a response key returned by a previous Job. 🦄 Workflow will **auto declare** the referenced Job as [dependency](#dependencies).

```php
use function Chevere\Workflow\reference;

reference(job: 'task', key: 'id');
```

For the code above, the reference indicates that it will pass the value of key `id` for the job `task`.

### Dependencies

Use `withDepends` method to explicit declare previous jobs as dependencies. The dependent job won't run until the dependencies are resolved.

```php
use function Chevere\Workflow\job;

job(SomeAction::class)
    ->withDepends('job1', 'job2');
```

### Synchronous jobs

Jobs will run in **parallel (async)** by default, must use `withIsSync` method to use sync processing for running a job. Sync Jobs will always run in sequence.

```php
use function Chevere\Workflow\job;

job(SomeAction::class)
    ->withIsSync();
```

## Running a Workflow

To run a Workflow use the `Chevere\Workflow\workflowRun` function:

```php
use Chevere\Container\Container;
use function Chevere\Workflow\workflow;
use function Chevere\Workflow\workflowRun;

// Your Workflow:
$workflow = workflow(/** ... **/);
// Workflow variables:
$vars = [
    'payload' => 'the payload'
];
// A PSR-Container for jobs services
$container = new Container();
$run = workflowRun($workflow, $vars, $container);
```

Variable `$run` will be assigned to a `Chevere\Workflow\Interfaces\WorkflowRunInterface` object, which you can query for obtaining data from the workflow runtime.

```php
// TRUE if has a job named `my_job`.
$run->has('my_job');
// A response object for the job's.
$run->get('my_job');
```
