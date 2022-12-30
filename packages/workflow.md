# Workflow

![Workflow](../src/packages/workflow/workflow-logo.svg)

Namespace `Chevere\Workflow`

The Workflow package provides tooling for defining an execution procedure based on the [workflow pattern](https://en.wikipedia.org/wiki/Workflow_pattern). Its purpose is to abstract logic instructions as units of interconnected independent jobs.

👏 With this package you can design a workflow procedure in a similar fashion to GitHub Actions.

::: tip 💡 Workflow introduction
 Read [Workflow for PHP](https://rodolfoberrios.com/2022/04/09/workflow-php/) at Rodolfo's blog for a compressive introduction to this package.
:::

## Installing

Workflow is available through [Packagist](https://packagist.org/packages/chevere/workflow) and the repository source is at [GitHub](https://github.com/chevere/workflow).

```sh
composer require chevere/workflow
```

## Creating a Workflow

To create a Workflow define its named Jobs. A [Job](#job) is created by passing an [Action](../library/action.md) object and its arguments, which can be raw values [Variables](#variable) adn [References](#reference).

### With Synchronous jobs

A synchronous job block execution until it gets resolved. Use function `sync` to create a synchronous job.

In the example below a Workflow describes an image uploading procedure.

```php
use function Chevere\Workflow\sync;
use function Chevere\Workflow\reference;
use function Chevere\Workflow\variable;
use function Chevere\Workflow\workflow;

workflow(
    user: sync(
        new GetUser(),
        request: variable('payload')
    ),
    validate: sync(
        new ValidateImage(),
        mime: 'image/png',
        file: variable('file')
    ),
    meta: sync(
        new GetMeta(),
        file: variable('file'),
    ),
    store: sync(
        new StoreFile(),
        file: variable('file'),
        name: reference('meta:name'),
        user: reference('user:output')
    ),
);
```

For the code above:

* `variable('payload')` and `variable('file')` declares a [Variable](#variable).
* `reference('meta:meta')` and `reference('user:output')` declares a [Reference](#reference).

The graph for this Workflow looks like this:

```php
//$workflow->jobs()->graph();
[
    ['user'],
    ['validate'],
    ['meta'],
    ['store']
];
```

The graph above says that all jobs run one after each other as all jobs are defined using `sync`.

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

A asynchronous job runs in paraller, non-blocking. Use function `async` to create an asynchronous job.

In the example below a Workflow describes an image creation procedure for multiple image sizes.

```php
use function Chevere\Workflow\sync;
use function Chevere\Workflow\reference;
use function Chevere\Workflow\variable;
use function Chevere\Workflow\workflow;

workflow(
    thumb: async(
        new ImageResize(),
        image: variable('image'),
        width: 100,
        height: 100,
        fit: 'thumb'
    ),
    medium: async(
        new ImageResize(),
        image: variable('image'),
        width: 500,
        fit: 'resizeByW'
    ),
    poster: async(
        new ImageResize(),
        image: variable('image'),
        width: 1500,
        fit: 'resizeByW'
    ),
    store: sync(
        new StoreFiles(),
        reference('thumb:filename'),
        reference('medium:filename'),
        reference('poster:filename'),
    ),
);
```

The graph for this Workflow looks like this:

```php
//$workflow->jobs()->graph();
[
    ['thumb', 'medium', 'poster'],
    ['store']
];
```

The graph above says that `thumb`, `medium` and `poster` run non-blocking. Job `store` runs blocking.

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

A Workflow variable gets declared using function `variable`. This denotes a variable which must be injected by at Workflow run layer.

```php
use function Chevere\Workflow\variable;

variable('myVar');
```

### Reference

A Job reference gets declared using function `reference`. This denotes a reference to a response key returned by a previous Job. It will **auto declare** the referenced Job as [dependency](#dependencies).

```php
use function Chevere\Workflow\reference;

reference(job: 'task', key: 'id');
```

## Job

The `Job` class defines an [Action](../library/action.md) with arguments to pass, supporting direct arguments and variable references to previous jobs response keys.

👉 The `action` parameter must be a class name implementing the `ActionInterface`. See the [Action](../library/action.md) component.

Argument can be passed passed "as-is", [variable](#variable) or [reference](#reference) on constructor using named arguments.

### Synchronous Job

```php
use function Chevere\Workflow\job;

sync(new SomeAction(), ...$argument);
```

### Asynchronous Job

```php
use function Chevere\Workflow\job;

async(new SomeAction(), ...$argument);
```

### Job variables and references

```php
sync(
    new SomeAction()
    context: 'public',
    role: variable('role'),
    userId: reference('user', 'id'),
);
```

For the code above, argument `context` will be passed "as-is" (`public`) to `SomeAction`, arguments `role` and `userId` will be dynamic provided. When running the Workflow these arguments will be matched against the Parameters defined at the [run](../library/action.md#run) method for `SomeAction`.

### Conditional running

Method `withRunIf` enables to pass arguments of type [Variable](#variable) or [Reference](#reference) for conditionally running a Job.

```php
sync(
    new CompressImage(),
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
job(new SomeAction())->withDepends('jobName');
```

## Running Workflow

To run a Workflow use the `run` function by passing a Workflow and an `array` for its arguments (variables) if any.

```php
use function Chevere\Workflow\run;

$run = run($workflow, $arguments);
```

Variable `$run` will be assigned to an object implementing `Interfaces\RunInterface`, which you can query for obtaining data from the workflow runtime.

```php
use Chevere\DataStructure\Interfaces\VectorInterface;
use Chevere\Response\Interfaces\ResponseInterface;

$run->keys(): array;
$run->uuid(): string;
$run->workflow(): WorkflowInterface;
$run->arguments(): ArgumentsInterface;
$run->skip(): VectorInterface;
$run->getResponse(string $job): ResponseInterface;
```

### Injecting services

Pass a [PSR-Container](../library/action.md#container) for injecting services that will be available at Action layer.

```php
use Chevere\Container\Container;

$container = new Container();
$run = run($workflow, $arguments, $container);
```
