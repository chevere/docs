# Workspace

The workspace refers to the working directory where the software is developed.

## IDE

Default IDE of choice by the main developer is [Visual Studio Code](https://code.visualstudio.com/) and Chevere provides tooling and recommendations on how to configure this IDE.

### Assets

Templates and settings are at the [.vscode/](https://github.com/chevere/chevere/tree/main/.vscode) folder.

### Template Snippets

[Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets) in Visual Studio Code provide an easy way to define templates for code. It is a productivity tool that allows to cast source code typing keywords in the IDE.

Snippets provide this functionality for the IDE:

![Snippets in action](./../../src/screen/snippets-in-action.gif "Snippets in action")

For the example above, the header comment and `strict_types` declaration are automatic provided by the [coding standard formatting](#coding-standards-formatting).

### Extensions

This is a list of the extensions that the main developer recommends for using Visual Studio Code for developing Chevere. None of these are required, but it will improve the development experience.

* [Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters)
* [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
* [PHP Namespace Resolver](https://marketplace.visualstudio.com/items?itemName=MehediDracula.php-namespace-resolver)
* [PHPUnit Test Explorer](https://marketplace.visualstudio.com/items?itemName=recca0120.vscode-phpunit)
* [Run on Save](https://marketplace.visualstudio.com/items?itemName=pucelle.run-on-save)

## Coding Standards Formatting

The [coding standard](../standard/coding.md) is automatic implemented on save by using **Run on Save** extension.

> Make sure to configure your filters in the [ecs.php](../standard/coding.md#ecsphp) file.

`.vscode/settings.json`

```json
{
    "runOnSave.commands": [
        {
            "match": "\\.php$",
            "command": "php vendor/bin/ecs --config='.ecs/ecs.php' check ${file} --fix",
            "runIn": "backend",
            "runningStatusMessage": "ECS ${fileBasename}",
            "finishStatusMessage": "${fileBasename} OK"
        },
    ]
}
```

## Testing

[PHPUnit Test Explorer](https://marketplace.visualstudio.com/items?itemName=recca0120.vscode-phpunit) provides inline tools for code execution and reviewing. It allows to easily handle all tests.

## Code Coverage

[Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters) provides visual feedback regarding covered lines right into the editor.
