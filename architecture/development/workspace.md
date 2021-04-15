# 📐 Workspace

The workspace refers to the working directory where the software is developed.

## IDE

Default IDE of choice by developer is [Visual Studio Code](https://code.visualstudio.com/) and Chevere provides tooling and recommendations on how to configure this IDE.

### Assets

Templates and settings are at the [.vscode/](https://github.com/chevere/chevere/tree/main/.vscode) folder.

### Template Snippets

[Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets) in Visual Studio Code provide an easy way to define templates for code. It is a productivity tool that allows to rapidly cast source code just typing a keyword in the IDE.

Snippets provide this functionality for the IDE:

![Snippets in action](./../../src/screen/snippets-in-action.gif "Snippets in action")

Note that for the example above, the header comment and `strict_types` declaration are automatically provided by the [coding standard formatting](#coding-standards-formatting).

### Extensions

This is a list of the essential extensions that the developer recommends for using Visual Studio Code for developing Chevere.

* [Psalm (PHP Static Analysis Linting Machine)](https://marketplace.visualstudio.com/items?itemName=getpsalm.psalm-vscode-plugin)
* [Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters)
* [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
* [PHP Namespace Resolver](https://marketplace.visualstudio.com/items?itemName=MehediDracula.php-namespace-resolver)
* [PHPUnit Test Explorer](https://marketplace.visualstudio.com/items?itemName=recca0120.vscode-phpunit)
* [Run on Save](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave)


## Coding Standards Formatting

The [coding standard](../standard/coding.md) is automatically implemented on save by using [Run on Save](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave) extension.

::: warning
Make sure to configure your filters in the [ecs.php](../standard/coding.md#ecsphp) file.
:::

```json
{
    "emeraldwalk.runonsave": {
        "commands": [
            {
                "match": "\\.php$",
                "cmd": "vendor/bin/ecs check ${file} --fix"
            }
        ]
    }
}
```

## Testing

[PHPUnit Test Explorer](https://marketplace.visualstudio.com/items?itemName=recca0120.vscode-phpunit) provides inline tools for code execution and reviewing. It allows to easily handle all tests.

## Code Coverage

[Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters) provides visual feedback regarding covered lines right into the editor.
