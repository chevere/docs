# Workflow

![Workflow](../src/packages/workflow/workflow-logo.svg)

Namespace `Chevere\Workflow`

The Workflow package provides tooling for defining an execution procedure based on the [workflow pattern](https://en.wikipedia.org/wiki/Workflow_pattern). Its purpose is to abstract logic instructions as units of interconnected independent jobs.

::: tip 💡 Workflow introduction
 Read [Workflow for PHP](https://rodolfoberrios.com/2022/04/09/workflow-php/) at Rodolfo's blog for a compressive introduction to this package.
:::

## Installing

Workflow is available through [Packagist](https://packagist.org/packages/chevere/workflow) and the repository source is at [GitHub](https://github.com/chevere/workflow).

```sh
composer require chevere/workflow
```

## Creating a Workflow

To create a Workflow define its named Jobs. A [Job](#job) is created by passing an [Action](../library/action.md) object and its arguments, which can be raw values,  [Variables](#variable) and/or [References](#reference) to another job's output.

### With Synchronous jobs

Use function `sync` to create a synchronous job. A synchronous job block execution until it gets resolved.

In the example below a Workflow describes an image uploading procedure.

```php
use function Chevere\Workflow\sync;
use function Chevere\Workflow\reference;
use function Chevere\Workflow\variable;
use function Chevere\Workflow\workflow;

workflow(
    user: sync(
        GetUser::class,
        request: variable('payload')
    ),
    validate: sync(
        ValidateImage::class,
        mime: 'image/png',
        file: variable('file')
    ),
    meta: sync(
        GetMeta::class,
        file: variable('file'),
    ),
    store: sync(
        StoreFile::class,
        file: variable('file'),
        name: reference('meta:name'),
        user: reference('user:output')
    ),
);
```

* `variable('payload')` and `variable('file')` declares a [Variable](#variable).
* `reference('meta:meta')` and `reference('user:output')` declares a [Reference](#reference).

The graph for this Workflow says that all jobs run one after each other as all jobs are defined using `sync`.

```php
//$workflow->jobs()->graph();
[
    ['user'],
    ['validate'],
    ['meta'],
    ['store']
];
```

To complete the example, here's how to [Run](#running-workflow) the Workflow previously defined:

```php
use function Chevere\Workflow\run;

run(
    workflow: $workflow,
    arguments: [
        'payload' => $_REQUEST,
        'file' => '/path/to/file',
    ]
);
```

### With Asynchronous jobs

Use function `async` to create an asynchronous job. An asynchronous job runs in parallel, non-blocking.

In the example below a Workflow describes an image creation procedure for multiple image sizes.

```php
use function Chevere\Workflow\sync;
use function Chevere\Workflow\reference;
use function Chevere\Workflow\variable;
use function Chevere\Workflow\workflow;

workflow(
    thumb: async(
        ImageResize::class,
        image: variable('image'),
        width: 100,
        height: 100,
        fit: 'thumb'
    ),
    medium: async(
        ImageResize::class,
        image: variable('image'),
        width: 500,
        fit: 'resizeByW'
    ),
    poster: async(
        ImageResize::class,
        image: variable('image'),
        width: 1500,
        fit: 'resizeByW'
    ),
    store: sync(
        StoreFiles::class,
        reference('thumb:filename'),
        reference('medium:filename'),
        reference('poster:filename'),
    ),
);
```

The graph for this Workflow says that `thumb`, `medium` and `poster` run non-blocking. Job `store` runs blocking (another node).

```php
//$workflow->jobs()->graph();
[
    ['thumb', 'medium', 'poster'],
    ['store']
];
```

To complete the example, here's how to [Run](#running-workflow) the Workflow previously defined:

```php
use function Chevere\Workflow\run;

run(
    workflow: $workflow,
    arguments: [
        'image' => '/path/to/file',
    ]
);
```

## Variable

Use function `variable` to declare a Workflow variable. This denotes a variable which must be injected by at Workflow run layer.

```php
use function Chevere\Workflow\variable;

variable('myVar');
```

### Reference

Use function `reference` to declare a Job reference. This denotes a reference to a response key returned by a previous Job. It will **auto declare** the referenced Job as [dependency](#dependencies).

```php
use function Chevere\Workflow\reference;

reference(job: 'task', key: 'id');
```

## Job

The `Job` class defines an [Action](../library/action.md) with arguments which can be passed passed "as-is", [variable](#variable) or [reference](#reference) on constructor using named arguments.

### Synchronous Job

```php
use function Chevere\Workflow\job;

sync(
    SomeAction::class,
    ...$argument
);
```

### Asynchronous Job

```php
use function Chevere\Workflow\job;

async(
    SomeAction::class,
    ...$argument
);
```

### Job variables and references

```php
sync(
    SomeAction::class
    context: 'public',
    role: variable('role'),This function can define `description`.
    userId: reference('user', 'id'),
);
```

For the code above, argument `context` will be passed "as-is" (`public`) to `SomeAction`, arguments `role` and `userId` will be dynamic provided. When running the Workflow these arguments will be matched against the Parameters defined at the [run](../library/action.md#run) method for `SomeAction`.

### Conditional running

Method `withRunIf` enables to pass arguments of type [Variable](#variable) or [Reference](#reference) for conditionally running a Job.

```php
sync(
    CompressImage::class,
    file: variable('file')
)
    ->withRunIf(
        variable('compressImage'),
        reference('SomeAction', 'doImageCompress')
    )
```

For the code above, all conditions must meet to run the Job: The variable `compressImage` and the reference `SomeAction:doImageCompress` must be `true`.

### Dependencies

Use `withDepends` method to explicit declare previous jobs as dependencies. The dependent Job won't run until the dependencies are resolved.

```php
job(SomeAction::class)->withDepends('jobName');
```

## Running Workflow

To run a Workflow use the `run` function by passing a Workflow and an `array` for its variables (if any).

```php
use function Chevere\Workflow\run;

$run = run($workflow, $variables);
```

Variable `$run` will be assigned to an object implementing `Interfaces\RunInterface`, which you can query for obtaining data from the workflow runtime.

### Injecting services

Pass a [PSR-Container](../library/action.md#container) for injecting services that will be available at Action layer.

```php
use Chevere\Container\Container;

$container = new Container();
$run = run($workflow, $variables, $container);
```
