# Schwager

![Schwager](../src/packages/schwager/schwager-logo.svg)

Namespace `Chevere\Schwager`

The Schwager package provides an API spec generator for the [Router](router.md) package.

<!-- ::: tip 💡 Schwager introduction
 Read [Schwager API](https://rodolfoberrios.com/404) at Rodolfo's blog for a compressive introduction to this package.
::: -->

## Installing

Schwager is available through [Packagist](https://packagist.org/packages/chevere/schwager) and the repository source is at [GitHub](https://github.com/chevere/schwager).

```sh
composer require chevere/schwager
```

## Specification

The Schwager API spec has the following general format:

```json
{
    "api": "<API>",
    "name": "<NAME>",
    "version": "<VERSION>",
    "servers": [
        {
            "url": "<SERVER_URL>",
            "description": "<SERVER_DESCRIPTION>"
        }
    ],
    "paths": {
        "<PATH>": {
            "name": "<PATH_NAME>",
            "group": "<PATH_GROUP>",
            "regex": "<PATH_REGEX>",
            "wildcards": {
                "<WILDCARD>": {
                    "type": "string",
                    "description": "<WILDCARD_DESCRIPTION>",
                    "regex": "<WILDCARD_REGEX>"
                }
            },
            "endpoints": {
                "<METHOD>": {
                    "description": "<ENDPOINT_DESCRIPTION>",
                    "body": {
                        <REQUEST_BODY_SCHEMA>
                    },
                    "query": {
                        <REQUEST_QUERY_SCHEMA>
                    },
                    "responses": {
                        "<STATUS_CODE>": [
                            {
                                "headers": {
                                    <RESPONSE_HEADERS>
                                },
                                "body": {
                                    <BODY_RESPONSE_SCHEMA>
                                }
                            },
                        ]
                    }
                }
            }
        }
    }
}
```

### Identification

Properties for API identification.

* `<API>`
* `<NAME>`
* `<VERSION>`

### Servers

The `servers` array indicate the server(s) available for interacting with the API. Useful for systems requiring sandbox and testing environments.

* `<SERVER_URL>`
* `<SERVER_DESCRIPTION>`

### Paths

The `paths` property contains a map for URI paths.

* `<PATH>`

For each path it takes the following properties:

* `<PATH_NAME>`
* `<PATH_GROUP>`
* `<PATH_REGEX>`

### Wildcards

Path wildcards are mapped by name within the `wildcards` property. Wildcards, also known as path variables, are always of type string.

* `<WILDCARD>`
* `<WILDCARD_DESCRIPTION>`
* `<WILDCARD_REGEX>`

### Endpoints

Path endpoints are mapped by HTTP method name within the `endpoints` property.

* `<METHOD>`

For each endpoint it provides the following properties:

* `<ENDPOINT_DESCRIPTION>`
* `<REQUEST_BODY_SCHEMA>`
* `<REQUEST_QUERY_SCHEMA>`

### Body schema

The body schema is defined by [Array Parameter](../library/parameter.md#array-parameter). It supports parameters of any type.

```json
{
    "type": "array#map",
    "description": "",
    "default": null,
    "parameters": {
        "myParameter": {
            "required": true,
            "type": "float",
            "description": "",
            "default": null,
            "minimum": 16.5,
            "maximum": null,
            "accept": [],
        }
    }
}
```

### Query schema

The query schema is defined by [Array String Parameter](../library/parameter.md#array-string). It only supports string types.

```json
{
    "type": "array#map",
    "description": "",
    "default": null,
    "parameters": {
        "myParameter": {
            "required": false,
            "type": "string",
            "description": "",
            "default": null,
            "regex": "^.*$",
        }
    }
}
```

### Responses

Endpoint responses are mapped by status code within the `responses` property. Status codes are taken from the [Status](./http.md#status) attribute, for both HTTP Controller and Middleware.

* `<STATUS_CODE>`

Schwager supports multiple responses for the same status code. For each response it provides the following properties:

* `<RESPONSE_HEADERS>`
* `<BODY_RESPONSE_SCHEMA>`

Response headers are taken from the [Headers](./http.md#header) attribute.

```json
{
    "headerName" : "headerValue"
}
```

## Creating API spec

To create an API spec pass an object implementing `RouterInterface` and a `DocumentSchema`. Optionally, you can provide one or more `ServerSchema` objects.

```php
use Chevere\Schwager\DocumentSchema;
use Chevere\Schwager\ServerSchema;
use Chevere\Schwager\Spec;
use function Chevere\Router\router;

$router = router();
$document = new DocumentSchema(
    api: 'chevere',
    name: 'Chevere API',
    version: '1.0.0'
);
$server = new ServerSchema(
    url: 'https://localhost:8080',
    description: 'Development server'
);
$spec = new Spec($router, $document, $server);
```

## Accessing API spec

Use method `toArray` to get the printer-ready array needed to export to other formats.

```php
$array = $spec->toArray();
```

## Filtering result

The `arrayFilter*` functions provided by the [Standard](../library/standard.md) component can become handy to modify and/or filter the generated API spec. This is useful to remove `null` values, empty strings and redundant information.

To recursive filter the array by value `$v` and key `$k`:

```php
use function Chevere\Standard\arrayFilterBoth;

$array = arrayFilterBoth($spec->toArray(), function ($v, $k) {
    return match (true) {
        $v === null => false, // 1
        $v === [] => false, // 2
        $v === '' => false, // 3
        $k === 'required' && $v === true => false, // 4
        $k === 'regex' && $v === '^.*$' => false, // 5
        $k === 'body' && $v === [ // 6
            'type' => 'array#map',
        ] => false,
        default => true, // 7
    };
});
```

The `match` used in the code above indicates that:

* `1` Remove if the value is `null`
* `2` Remove if the value is `[]`
* `3` Remove if the value is empty string
* `4` Remove if the key is `required` and value is `true`
* `5` Remove if the key is `regex` and value is `^.*$`
* `6` Remove if the key is `body` and value is `['type' => 'array#map']`
* `7` Keep everything else

For cases `1,2,3` the removal is for empty values while for cases `4,5,6` is because of redundant info.

## Export

Use the built-in [Filesystem](../library/filesystem.md#file) component to store the converted array with native [json_encode](https://www.php.net/manual/en/function.json-encode.php) as a JSON file.

```php
use function Chevere\Filesystem\fileForPath;

$json = json_encode($array, JSON_PRETTY_PRINT);
$file = fileForPath(__DIR__ . '/api.json');
$file->put($json);
```

🪄 A PHP array can be converted to any format including [YAML](https://www.php.net/manual/en/book.yaml.php), [XML](https://github.com/spatie/array-to-xml) and more.
