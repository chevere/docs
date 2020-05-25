# Workspace

## Introduction

The workspace refers to the working directory where Chevere is developed. 

## IDE

Chevere provides snippets and recommendation on extensions that goes better for development, this includes the provisioning IDE resources.

> 🧔🏾 The default IDE of choice is [Visual Studio Code](https://code.visualstudio.com/)

### Settings

Workspace settings are at `.vscode/settings.json`

### Extensions

* [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
* [Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters)
* [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
* [php cs fixer](https://marketplace.visualstudio.com/items?itemName=junstyle.php-cs-fixer)
* [PHP Debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug)
* [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
* [PHP Namespace Resolver](https://marketplace.visualstudio.com/items?itemName=MehediDracula.php-namespace-resolver)
* [PHPUnit Test Explorer](https://marketplace.visualstudio.com/items?itemName=recca0120.vscode-phpunit)

## Snippets

Snippets provide an easy way to define templates for code. It is a productivity tool that allows to rapidly create source code just typing a keyword in the IDE.

> 👍🏾 Built-in snippets are at `.vscode/Templates.code-snippets`

### Working with snippets

In the following two-steps, a new test will be created in seconds.

#### Step 1: Create the file

An empty `ExampleTest.php` file must be created at `./Tests/Example/ExampleTest.php`. The tree should look like as below.

```bash
./Tests
└── Example
    └── ExampleTest.php
```

#### Step 2: Inserting the snippet

Triggering snippets is easy as typing the snippet prefix in the editor. The screen below shows how snippets are triggered for `test` and `test-method`.

> 🤷🏾 Snippets can be also inserted using the [command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette), but it slower you know?

![Snippets in action](./../src/screen/snippets-in-action.gif "Snippets in action")

> 🧙🏾 Both header comment and `strict_types` declaration are automatically inserted on save

Table below shows the prefix and description for built-in snippets.

| Prefix               | Description                 |
| -------------------- | --------------------------- |
| `docblock-boolean`   | Insert a docblock boolean   |
| `docblock-construct` | Insert a docblock construct |
| `docblock-immutable` | Insert a docblock immutable |
| `docblock-instance`  | Insert a docblock instance  |
| `component`          | Create a component          |
| `exception`          | Create an exception         |
| `interface`          | Create an interface         |
| `test-method`        | Create a test method        |
| `test`               | Create a test               |
| `trait`              | Create a trait              |

## Coding Standards

[Formatting](https://code.visualstudio.com/docs/editor/codebasics#_formatting) is provided by [PHP CS Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer), for which Chevere provides a `.php_cs.dist` configuration file.

The VSCode extension [php cs fixer](https://marketplace.visualstudio.com/items?itemName=junstyle.php-cs-fixer) allows to register PHP CS Fixer as formatter.

> 🧙🏾 Formatting can be configured on save and or typing

## Testing

[PHPUnit Test Explorer](https://marketplace.visualstudio.com/items?itemName=recca0120.vscode-phpunit) allows to easily handle all tests. Providing inline tools for code execution and reviewing.

### Configuration

* `phpunit.xml` for development purposes
* `phpunit-coverage.xml` for reporting code coverage

### Running tests

```bash
vendor/bin/phpunit -c <configuration file>
```

