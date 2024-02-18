# heroku env-lookup plugin

An easy way to find an app using a string in environment variables

<!-- toc -->
* [heroku env-lookup plugin](#heroku-env-lookup-plugin)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage
You can install and use the plugin via `heroku` CLI:
```sh-session
heroku plugins:install heroku-env-lookup
heroku env-lookup --help
heroku env-lookup string_to_lookup
```
or directly:
<!-- usage -->
```sh-session
$ npm install -g heroku-env-lookup
$ heroku-env-lookup COMMAND
running command...
$ heroku-env-lookup (--version)
heroku-env-lookup/1.0.0 darwin-arm64 node-v18.17.0
$ heroku-env-lookup --help [COMMAND]
USAGE
  $ heroku-env-lookup COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`heroku-env-lookup env-lookup LOOKUPSTRING`](#heroku-env-lookup-env-lookup-lookupstring)
* [`heroku-env-lookup help [COMMANDS]`](#heroku-env-lookup-help-commands)

## `heroku-env-lookup env-lookup LOOKUPSTRING`

Lookup string value in heroku apps env variables

```
USAGE
  $ heroku-env-lookup env-lookup LOOKUPSTRING [--columns <value> | -x] [--filter <value>] [--no-header | [--csv
    | --no-truncate]] [--output csv|json|yaml |  | ] [--sort <value>]

ARGUMENTS
  LOOKUPSTRING  String to lookup for

FLAGS
  -x, --extended         show extra columns
      --columns=<value>  only show provided columns (comma-separated)
      --csv              output is csv format [alias: --output=csv]
      --filter=<value>   filter property by partial string matching, ex: name=foo
      --no-header        hide table header from output
      --no-truncate      do not truncate output to fit screen
      --output=<option>  output in a more machine friendly format
                         <options: csv|json|yaml>
      --sort=<value>     property to sort by (prepend '-' for descending)

DESCRIPTION
  Lookup string value in heroku apps env variables

EXAMPLES
  $ heroku-env-lookup env-lookup LOOKUP_STRING
```

_See code: [src/commands/env-lookup.ts](https://github.com/lancedikson/heroku-env-lookup/blob/v1.0.0/src/commands/env-lookup.ts)_

## `heroku-env-lookup help [COMMANDS]`

Display help for heroku-env-lookup.

```
USAGE
  $ heroku-env-lookup help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for heroku-env-lookup.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.12/src/commands/help.ts)_
<!-- commandsstop -->
