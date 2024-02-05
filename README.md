oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g heroku-env-lookup
$ heroku-env-lookup COMMAND
running command...
$ heroku-env-lookup (--version)
heroku-env-lookup/0.0.0 darwin-arm64 node-v18.17.0
$ heroku-env-lookup --help [COMMAND]
USAGE
  $ heroku-env-lookup COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`heroku-env-lookup hello PERSON`](#heroku-env-lookup-hello-person)
* [`heroku-env-lookup hello world`](#heroku-env-lookup-hello-world)
* [`heroku-env-lookup help [COMMANDS]`](#heroku-env-lookup-help-commands)
* [`heroku-env-lookup plugins`](#heroku-env-lookup-plugins)
* [`heroku-env-lookup plugins:install PLUGIN...`](#heroku-env-lookup-pluginsinstall-plugin)
* [`heroku-env-lookup plugins:inspect PLUGIN...`](#heroku-env-lookup-pluginsinspect-plugin)
* [`heroku-env-lookup plugins:install PLUGIN...`](#heroku-env-lookup-pluginsinstall-plugin-1)
* [`heroku-env-lookup plugins:link PLUGIN`](#heroku-env-lookup-pluginslink-plugin)
* [`heroku-env-lookup plugins:uninstall PLUGIN...`](#heroku-env-lookup-pluginsuninstall-plugin)
* [`heroku-env-lookup plugins reset`](#heroku-env-lookup-plugins-reset)
* [`heroku-env-lookup plugins:uninstall PLUGIN...`](#heroku-env-lookup-pluginsuninstall-plugin-1)
* [`heroku-env-lookup plugins:uninstall PLUGIN...`](#heroku-env-lookup-pluginsuninstall-plugin-2)
* [`heroku-env-lookup plugins update`](#heroku-env-lookup-plugins-update)

## `heroku-env-lookup hello PERSON`

Say hello

```
USAGE
  $ heroku-env-lookup hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/lancedikson/heroku-env-lookup/blob/v0.0.0/src/commands/hello/index.ts)_

## `heroku-env-lookup hello world`

Say hello world

```
USAGE
  $ heroku-env-lookup hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ heroku-env-lookup hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/lancedikson/heroku-env-lookup/blob/v0.0.0/src/commands/hello/world.ts)_

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

## `heroku-env-lookup plugins`

List installed plugins.

```
USAGE
  $ heroku-env-lookup plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ heroku-env-lookup plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/index.ts)_

## `heroku-env-lookup plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ heroku-env-lookup plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ heroku-env-lookup plugins add

EXAMPLES
  $ heroku-env-lookup plugins add myplugin 

  $ heroku-env-lookup plugins add https://github.com/someuser/someplugin

  $ heroku-env-lookup plugins add someuser/someplugin
```

## `heroku-env-lookup plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ heroku-env-lookup plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ heroku-env-lookup plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/inspect.ts)_

## `heroku-env-lookup plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ heroku-env-lookup plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ heroku-env-lookup plugins add

EXAMPLES
  $ heroku-env-lookup plugins install myplugin 

  $ heroku-env-lookup plugins install https://github.com/someuser/someplugin

  $ heroku-env-lookup plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/install.ts)_

## `heroku-env-lookup plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ heroku-env-lookup plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ heroku-env-lookup plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/link.ts)_

## `heroku-env-lookup plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ heroku-env-lookup plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ heroku-env-lookup plugins unlink
  $ heroku-env-lookup plugins remove

EXAMPLES
  $ heroku-env-lookup plugins remove myplugin
```

## `heroku-env-lookup plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ heroku-env-lookup plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/reset.ts)_

## `heroku-env-lookup plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ heroku-env-lookup plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ heroku-env-lookup plugins unlink
  $ heroku-env-lookup plugins remove

EXAMPLES
  $ heroku-env-lookup plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/uninstall.ts)_

## `heroku-env-lookup plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ heroku-env-lookup plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ heroku-env-lookup plugins unlink
  $ heroku-env-lookup plugins remove

EXAMPLES
  $ heroku-env-lookup plugins unlink myplugin
```

## `heroku-env-lookup plugins update`

Update installed plugins.

```
USAGE
  $ heroku-env-lookup plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/update.ts)_
<!-- commandsstop -->
